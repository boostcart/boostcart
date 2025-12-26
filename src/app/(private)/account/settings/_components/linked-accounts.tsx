"use client";

import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { unlinkAccount } from "@/server/api/private/auth";

type AccountItem = {
	id: string;
	providerId: string;
	accountId: string;
};

interface LinkedAccountsProps {
	accounts: AccountItem[];
	hasPassword: boolean;
	availableProviders?: { id: string; name: string }[];
}

export function LinkedAccounts({
	accounts,
	hasPassword,
	availableProviders,
}: LinkedAccountsProps) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const oauthProviders = useMemo(() => {
		if (availableProviders && availableProviders.length > 0) {
			return availableProviders;
		}
		// Default to Google as configured provider
		return [{ id: "google", name: "Google" }];
	}, [availableProviders]);

	const linkedMap = useMemo(() => {
		const map = new Map<string, AccountItem>();
		accounts.forEach((a) => map.set(a.providerId, a));
		return map;
	}, [accounts]);

	const handleLink = (providerId: string) => {
		// Initiate OAuth flow to link account
		signIn.social({
			provider: providerId as "google",
			callbackURL: "/account/settings",
		});
	};

	const handleUnlink = (providerId: string) => {
		startTransition(() => {
			unlinkAccount({ provider: providerId }).then(
				(res: { success?: boolean; error?: string }) => {
					if (res?.success) {
						toast.success("Account unlinked.");
						router.refresh();
					} else {
						toast.error(res?.error || "Unable to unlink account.");
					}
				},
			);
		});
	};

	return (
		<section className="flex flex-col w-full max-w-lg my-6 space-y-4">
			<h2 className="font-medium">Linked accounts</h2>
			<p className="text-sm text-muted-foreground">
				Connect or remove social accounts you use to sign in.
			</p>

			<div className="flex flex-col divide-y rounded-md border">
				{oauthProviders.length === 0 && (
					<div className="p-4 text-sm text-muted-foreground">
						No social providers are configured.
					</div>
				)}

				{oauthProviders.map((p) => {
					const linked = linkedMap.has(p.id);
					const acc = linked ? (linkedMap.get(p.id) ?? null) : null;
					const isOnlyMethod = !hasPassword && linked && accounts.length === 1;
					return (
						<div key={p.id} className="flex items-center justify-between p-4">
							<div className="flex flex-col">
								<span className="font-medium">{p.name}</span>
								<span className="text-sm text-muted-foreground">
									{linked ? "Linked" : "Not linked"}
								</span>
								{linked && acc ? (
									<div className="mt-1 space-y-0.5 text-xs text-muted-foreground">
										<div className="font-mono break-all">
											Provider account ID: {acc.accountId}
										</div>
										<div className="font-mono break-all">
											Internal account ID: {acc.id}
										</div>
									</div>
								) : null}
							</div>
							{linked ? (
								<Button
									variant="destructive"
									disabled={isPending || isOnlyMethod}
									onClick={() => handleUnlink(p.id)}
								>
									{isPending && <Loader className="mr-2 size-4 animate-spin" />}
									{isOnlyMethod ? "Cannot unlink last method" : "Unlink"}
								</Button>
							) : (
								<Button
									variant="outline"
									disabled={isPending}
									onClick={() => handleLink(p.id)}
								>
									{isPending && <Loader className="mr-2 size-4 animate-spin" />}
									Link
								</Button>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
}
