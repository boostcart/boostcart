"use client";

import {
	AlertCircle,
	CheckCircle2,
	Clock,
	Copy,
	ExternalLink,
	Globe,
	MoreVertical,
	Plus,
	RefreshCw,
	Shield,
	Star,
	Trash2,
	XCircle,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Loader } from "@/components/loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	addDomain,
	getDomains,
	getDomainVerificationInstructions,
	refreshDnsToken,
	removeDomain,
	setPrimaryDomain,
	verifyDomain,
} from "@/server/api/internal/domains";

interface Domain {
	id: string;
	domain: string;
	isPrimary: boolean;
	sslStatus: string;
	sslExpiry: Date | null;
	dnsVerified: boolean;
	dnsToken: string;
	createdAt: Date;
}

interface VerificationInstructions {
	domain: string;
	dnsToken: string;
	verified: boolean;
	instructions: {
		type: string;
		host: string;
		value: string;
		ttl: number;
		cname: {
			host: string;
			value: string;
		};
	};
}

export default function DomainsPage() {
	const [domains, setDomains] = useState<Domain[]>([]);
	const [loading, setLoading] = useState(true);
	const [addDialogOpen, setAddDialogOpen] = useState(false);
	const [verifyDialogOpen, setVerifyDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
	const [newDomain, setNewDomain] = useState("");
	const [addingDomain, setAddingDomain] = useState(false);
	const [verifying, setVerifying] = useState(false);
	const [deleting, setDeleting] = useState(false);
	const [verificationInstructions, setVerificationInstructions] =
		useState<VerificationInstructions | null>(null);

	const fetchDomains = useCallback(async () => {
		try {
			setLoading(true);
			const data = await getDomains();
			setDomains(data);
		} catch (_error) {
			toast.error("Failed to load domains");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchDomains();
	}, [fetchDomains]);

	const handleAddDomain = async () => {
		if (!newDomain.trim()) return;

		try {
			setAddingDomain(true);
			await addDomain({ domain: newDomain.trim() });
			toast.success("Domain added successfully");
			setNewDomain("");
			setAddDialogOpen(false);
			fetchDomains();
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Failed to add domain",
			);
		} finally {
			setAddingDomain(false);
		}
	};

	const handleVerifyClick = async (domain: Domain) => {
		setSelectedDomain(domain);
		try {
			const instructions = await getDomainVerificationInstructions(domain.id);
			setVerificationInstructions(instructions);
			setVerifyDialogOpen(true);
		} catch (_error) {
			toast.error("Failed to load verification instructions");
		}
	};

	const handleVerifyDomain = async () => {
		if (!selectedDomain) return;

		try {
			setVerifying(true);
			const result = await verifyDomain(selectedDomain.id);
			if (result.verified) {
				toast.success("Domain verified successfully!");
				setVerifyDialogOpen(false);
				fetchDomains();
			} else {
				toast.error(
					"DNS record not found. Please check your DNS settings and try again.",
				);
			}
		} catch (_error) {
			toast.error("Verification failed");
		} finally {
			setVerifying(false);
		}
	};

	const handleRefreshToken = async () => {
		if (!selectedDomain) return;

		try {
			const updated = await refreshDnsToken(selectedDomain.id);
			setVerificationInstructions((prev) =>
				prev
					? {
							...prev,
							dnsToken: updated.dnsToken,
							instructions: {
								...prev.instructions,
								value: `boostcart-verify=${updated.dnsToken}`,
							},
						}
					: null,
			);
			toast.success("Verification token refreshed");
		} catch (_error) {
			toast.error("Failed to refresh token");
		}
	};

	const handleSetPrimary = async (domain: Domain) => {
		try {
			await setPrimaryDomain(domain.id);
			toast.success("Primary domain updated");
			fetchDomains();
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Failed to set primary domain",
			);
		}
	};

	const handleDeleteClick = (domain: Domain) => {
		setSelectedDomain(domain);
		setDeleteDialogOpen(true);
	};

	const handleDeleteDomain = async () => {
		if (!selectedDomain) return;

		try {
			setDeleting(true);
			await removeDomain(selectedDomain.id);
			toast.success("Domain removed");
			setDeleteDialogOpen(false);
			fetchDomains();
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Failed to remove domain",
			);
		} finally {
			setDeleting(false);
		}
	};

	const copyToClipboard = (text: string, label: string) => {
		navigator.clipboard.writeText(text);
		toast.success(`${label} copied to clipboard`);
	};

	const getStatusBadge = (domain: Domain) => {
		if (!domain.dnsVerified) {
			return (
				<Badge variant="outline" className="text-amber-600 border-amber-300">
					<Clock className="h-3 w-3 mr-1" />
					Pending Verification
				</Badge>
			);
		}

		if (domain.sslStatus === "active") {
			return (
				<Badge variant="outline" className="text-green-600 border-green-300">
					<CheckCircle2 className="h-3 w-3 mr-1" />
					Active
				</Badge>
			);
		}

		if (domain.sslStatus === "provisioning") {
			return (
				<Badge variant="outline" className="text-blue-600 border-blue-300">
					<RefreshCw className="h-3 w-3 mr-1 animate-spin" />
					SSL Provisioning
				</Badge>
			);
		}

		return (
			<Badge variant="outline" className="text-red-600 border-red-300">
				<XCircle className="h-3 w-3 mr-1" />
				{domain.sslStatus}
			</Badge>
		);
	};

	if (loading) {
		return (
			<div className="flex items-center justify-center h-64">
				<Loader size="lg" />
			</div>
		);
	}

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Custom Domains</h1>
					<p className="text-muted-foreground mt-1">
						Connect your own domain to your store
					</p>
				</div>
				<PolarisButton onClick={() => setAddDialogOpen(true)}>
					<Plus className="h-4 w-4 mr-2" />
					Add Domain
				</PolarisButton>
			</div>

			{/* Info Card */}
			<Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
				<div className="flex gap-3">
					<AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
					<div className="text-sm">
						<p className="font-medium text-blue-900 dark:text-blue-100">
							How custom domains work
						</p>
						<p className="text-blue-700 dark:text-blue-300 mt-1">
							Add your domain, verify ownership via DNS TXT record, then point
							your domain to our servers. SSL certificates are automatically
							provisioned.
						</p>
					</div>
				</div>
			</Card>

			{/* Domains List */}
			{domains.length === 0 ? (
				<Card>
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<Globe className="h-8 w-8" />
							</EmptyMedia>
							<EmptyTitle>No custom domains</EmptyTitle>
							<EmptyDescription>
								Add a custom domain to give your store a professional look
							</EmptyDescription>
						</EmptyHeader>
						<EmptyContent>
							<PolarisButton onClick={() => setAddDialogOpen(true)}>
								<Plus className="h-4 w-4 mr-2" />
								Add Your First Domain
							</PolarisButton>
						</EmptyContent>
					</Empty>
				</Card>
			) : (
				<div className="space-y-3">
					{domains.map((domain) => (
						<Card key={domain.id} className="p-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className="p-2 rounded-lg bg-muted">
										<Globe className="h-5 w-5 text-muted-foreground" />
									</div>
									<div>
										<div className="flex items-center gap-2">
											<span className="font-medium">{domain.domain}</span>
											{domain.isPrimary && (
												<Badge
													variant="secondary"
													className="bg-primary/10 text-primary"
												>
													<Star className="h-3 w-3 mr-1" />
													Primary
												</Badge>
											)}
										</div>
										<div className="flex items-center gap-3 mt-1">
											{getStatusBadge(domain)}
											{domain.dnsVerified && (
												<span className="text-xs text-muted-foreground flex items-center gap-1">
													<Shield className="h-3 w-3" />
													SSL{" "}
													{domain.sslStatus === "active" ? "Active" : "Pending"}
												</span>
											)}
										</div>
									</div>
								</div>

								<div className="flex items-center gap-2">
									{!domain.dnsVerified && (
										<Button
											variant="outline"
											size="sm"
											onClick={() => handleVerifyClick(domain)}
										>
											Verify
										</Button>
									)}
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="ghost" size="icon">
												<MoreVertical className="h-4 w-4" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											{domain.dnsVerified && (
												<DropdownMenuItem
													onClick={() =>
														window.open(`https://${domain.domain}`, "_blank")
													}
												>
													<ExternalLink className="h-4 w-4 mr-2" />
													Visit Site
												</DropdownMenuItem>
											)}
											{domain.dnsVerified && !domain.isPrimary && (
												<DropdownMenuItem
													onClick={() => handleSetPrimary(domain)}
												>
													<Star className="h-4 w-4 mr-2" />
													Set as Primary
												</DropdownMenuItem>
											)}
											{!domain.dnsVerified && (
												<DropdownMenuItem
													onClick={() => handleVerifyClick(domain)}
												>
													<RefreshCw className="h-4 w-4 mr-2" />
													Verify Domain
												</DropdownMenuItem>
											)}
											<DropdownMenuSeparator />
											<DropdownMenuItem
												className="text-destructive"
												onClick={() => handleDeleteClick(domain)}
											>
												<Trash2 className="h-4 w-4 mr-2" />
												Remove Domain
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</div>
						</Card>
					))}
				</div>
			)}

			{/* Add Domain Dialog */}
			<Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Add Custom Domain</DialogTitle>
						<DialogDescription>
							Enter the domain you want to connect to your store. You&apos;ll
							need to verify ownership and update DNS records.
						</DialogDescription>
					</DialogHeader>
					<div className="space-y-4 py-4">
						<div className="space-y-2">
							<Label htmlFor="domain">Domain</Label>
							<Input
								id="domain"
								placeholder="store.example.com"
								value={newDomain}
								onChange={(e) => setNewDomain(e.target.value)}
							/>
							<p className="text-xs text-muted-foreground">
								Enter your domain without https:// or trailing slashes
							</p>
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => setAddDialogOpen(false)}>
							Cancel
						</Button>
						<PolarisButton
							onClick={handleAddDomain}
							loading={addingDomain}
							disabled={!newDomain.trim()}
						>
							Add Domain
						</PolarisButton>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Verify Domain Dialog */}
			<Dialog open={verifyDialogOpen} onOpenChange={setVerifyDialogOpen}>
				<DialogContent className="max-w-2xl">
					<DialogHeader>
						<DialogTitle>Verify Domain Ownership</DialogTitle>
						<DialogDescription>
							Add the following DNS records to verify ownership of{" "}
							<strong>{verificationInstructions?.domain}</strong>
						</DialogDescription>
					</DialogHeader>
					{verificationInstructions && (
						<div className="space-y-6 py-4">
							{/* Step 1: TXT Record */}
							<div className="space-y-3">
								<h4 className="font-medium flex items-center gap-2">
									<span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">
										1
									</span>
									Add TXT Record for Verification
								</h4>
								<Card className="p-4 space-y-3">
									<div className="grid grid-cols-[100px_1fr_auto] gap-2 items-center">
										<span className="text-sm text-muted-foreground">Type</span>
										<code className="text-sm bg-muted px-2 py-1 rounded">
											{verificationInstructions.instructions.type}
										</code>
										<div />
									</div>
									<div className="grid grid-cols-[100px_1fr_auto] gap-2 items-center">
										<span className="text-sm text-muted-foreground">Host</span>
										<code className="text-sm bg-muted px-2 py-1 rounded truncate">
											_boostcart-verification
										</code>
										<Button
											variant="ghost"
											size="icon"
											className="h-8 w-8"
											onClick={() =>
												copyToClipboard("_boostcart-verification", "Host")
											}
										>
											<Copy className="h-4 w-4" />
										</Button>
									</div>
									<div className="grid grid-cols-[100px_1fr_auto] gap-2 items-center">
										<span className="text-sm text-muted-foreground">Value</span>
										<code className="text-sm bg-muted px-2 py-1 rounded truncate">
											{verificationInstructions.instructions.value}
										</code>
										<Button
											variant="ghost"
											size="icon"
											className="h-8 w-8"
											onClick={() =>
												copyToClipboard(
													verificationInstructions.instructions.value,
													"Value",
												)
											}
										>
											<Copy className="h-4 w-4" />
										</Button>
									</div>
									<div className="grid grid-cols-[100px_1fr_auto] gap-2 items-center">
										<span className="text-sm text-muted-foreground">TTL</span>
										<code className="text-sm bg-muted px-2 py-1 rounded">
											{verificationInstructions.instructions.ttl} (or Auto)
										</code>
										<div />
									</div>
								</Card>
							</div>

							{/* Step 2: CNAME Record */}
							<div className="space-y-3">
								<h4 className="font-medium flex items-center gap-2">
									<span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">
										2
									</span>
									Add CNAME Record to Point to BoostCart
								</h4>
								<Card className="p-4 space-y-3">
									<div className="grid grid-cols-[100px_1fr_auto] gap-2 items-center">
										<span className="text-sm text-muted-foreground">Type</span>
										<code className="text-sm bg-muted px-2 py-1 rounded">
											CNAME
										</code>
										<div />
									</div>
									<div className="grid grid-cols-[100px_1fr_auto] gap-2 items-center">
										<span className="text-sm text-muted-foreground">Host</span>
										<code className="text-sm bg-muted px-2 py-1 rounded">
											@ or{" "}
											{verificationInstructions.instructions.cname.host.split(
												".",
											)[0] || "@"}
										</code>
										<Button
											variant="ghost"
											size="icon"
											className="h-8 w-8"
											onClick={() =>
												copyToClipboard(
													verificationInstructions.instructions.cname.host.split(
														".",
													)[0] || "@",
													"Host",
												)
											}
										>
											<Copy className="h-4 w-4" />
										</Button>
									</div>
									<div className="grid grid-cols-[100px_1fr_auto] gap-2 items-center">
										<span className="text-sm text-muted-foreground">Value</span>
										<code className="text-sm bg-muted px-2 py-1 rounded">
											{verificationInstructions.instructions.cname.value}
										</code>
										<Button
											variant="ghost"
											size="icon"
											className="h-8 w-8"
											onClick={() =>
												copyToClipboard(
													verificationInstructions.instructions.cname.value,
													"CNAME Value",
												)
											}
										>
											<Copy className="h-4 w-4" />
										</Button>
									</div>
								</Card>
							</div>

							<div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-800">
								<AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
								<div className="text-sm text-amber-800 dark:text-amber-200">
									<p className="font-medium">DNS changes can take time</p>
									<p className="mt-1">
										DNS records may take up to 48 hours to propagate, though
										most changes are visible within minutes.
									</p>
								</div>
							</div>
						</div>
					)}
					<DialogFooter className="gap-2">
						<Button variant="outline" onClick={handleRefreshToken} size="sm">
							<RefreshCw className="h-4 w-4 mr-2" />
							New Token
						</Button>
						<Button
							variant="outline"
							onClick={() => setVerifyDialogOpen(false)}
						>
							Close
						</Button>
						<PolarisButton onClick={handleVerifyDomain} loading={verifying}>
							Verify DNS
						</PolarisButton>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Delete Confirmation Dialog */}
			<Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Remove Domain</DialogTitle>
						<DialogDescription>
							Are you sure you want to remove{" "}
							<strong>{selectedDomain?.domain}</strong>? This action cannot be
							undone and will make the domain unavailable for your store.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setDeleteDialogOpen(false)}
						>
							Cancel
						</Button>
						<Button
							variant="destructive"
							onClick={handleDeleteDomain}
							disabled={deleting}
						>
							{deleting ? "Removing..." : "Remove Domain"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
