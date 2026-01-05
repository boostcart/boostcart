"use client";

import {
	AlertCircle,
	CheckCircle2,
	Download,
	FileSpreadsheet,
	Upload,
	X,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { PolarisButton } from "@/components/admin/polaris-button";
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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
	exportProducts,
	getProductImportTemplate,
	importProductsFromCSV,
	validateProductCSV,
} from "@/server/api/internal/product-import-export";

interface ImportExportDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onImportComplete?: () => void;
}

type Step = "choose" | "import" | "validate" | "importing" | "result" | "export";

interface ImportResult {
	success: boolean;
	totalRows: number;
	imported: number;
	updated: number;
	skipped: number;
	errors: Array<{
		row: number;
		sku: string;
		error: string;
	}>;
}

interface ValidationResult {
	valid: boolean;
	totalRows: number;
	validRows: number;
	errors: Array<{ row: number; errors: string[] }>;
}

export function ProductImportExportDialog({
	open,
	onOpenChange,
	onImportComplete,
}: ImportExportDialogProps) {
	const [step, setStep] = useState<Step>("choose");
	const [csvContent, setCsvContent] = useState<string>("");
	const [fileName, setFileName] = useState<string>("");
	const [updateExisting, setUpdateExisting] = useState(true);
	const [validating, setValidating] = useState(false);
	const [_importing, setImporting] = useState(false);
	const [exporting, setExporting] = useState(false);
	const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
	const [importResult, setImportResult] = useState<ImportResult | null>(null);
	const [exportFormat, setExportFormat] = useState<"csv" | "json">("csv");
	const [includeDrafts, setIncludeDrafts] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const resetState = useCallback(() => {
		setStep("choose");
		setCsvContent("");
		setFileName("");
		setValidationResult(null);
		setImportResult(null);
	}, []);

	const handleClose = useCallback(() => {
		resetState();
		onOpenChange(false);
	}, [onOpenChange, resetState]);

	const handleFileSelect = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files?.[0];
			if (!file) return;

			if (!file.name.endsWith(".csv")) {
				toast.error("Please select a CSV file");
				return;
			}

			const reader = new FileReader();
			reader.onload = (e) => {
				const content = e.target?.result as string;
				setCsvContent(content);
				setFileName(file.name);
				setStep("import");
			};
			reader.onerror = () => {
				toast.error("Failed to read file");
			};
			reader.readAsText(file);

			// Reset input so same file can be selected again
			event.target.value = "";
		},
		[]
	);

	const handleValidate = useCallback(async () => {
		if (!csvContent) return;

		setValidating(true);
		try {
			const result = await validateProductCSV(csvContent);
			setValidationResult(result);
			setStep("validate");
		} catch (_error) {
			toast.error("Validation failed");
		} finally {
			setValidating(false);
		}
	}, [csvContent]);

	const handleImport = useCallback(async () => {
		if (!csvContent) return;

		setImporting(true);
		setStep("importing");
		try {
			const result = await importProductsFromCSV(csvContent, { updateExisting });
			setImportResult(result);
			setStep("result");
			if (result.success) {
				onImportComplete?.();
			}
		} catch (_error) {
			toast.error("Import failed");
			setStep("import");
		} finally {
			setImporting(false);
		}
	}, [csvContent, updateExisting, onImportComplete]);

	const handleExport = useCallback(async () => {
		setExporting(true);
		try {
			const content = await exportProducts({
				format: exportFormat,
				includeDrafts,
			});

			// Download file
			const blob = new Blob([content], {
				type: exportFormat === "csv" ? "text/csv" : "application/json",
			});
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `products-export-${new Date().toISOString().split("T")[0]}.${exportFormat}`;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);

			toast.success("Export completed");
			handleClose();
		} catch (_error) {
			toast.error("Export failed");
		} finally {
			setExporting(false);
		}
	}, [exportFormat, includeDrafts, handleClose]);

	const handleDownloadTemplate = useCallback(async () => {
		try {
			const template = await getProductImportTemplate();
			const blob = new Blob([template], { type: "text/csv" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = "product-import-template.csv";
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		} catch (_error) {
			toast.error("Failed to download template");
		}
	}, []);

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent className="max-w-lg">
				{/* Choose Step */}
				{step === "choose" && (
					<>
						<DialogHeader>
							<DialogTitle>Import / Export Products</DialogTitle>
							<DialogDescription>
								Bulk import products from CSV or export your catalog
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<Card
								className="p-4 cursor-pointer hover:border-primary transition-colors"
								onClick={() => fileInputRef.current?.click()}
							>
								<div className="flex items-center gap-4">
									<div className="p-3 rounded-lg bg-green-100 dark:bg-green-900">
										<Upload className="h-6 w-6 text-green-600 dark:text-green-300" />
									</div>
									<div>
										<h3 className="font-medium">Import Products</h3>
										<p className="text-sm text-muted-foreground">
											Upload a CSV file to add or update products
										</p>
									</div>
								</div>
							</Card>
							<Card
								className="p-4 cursor-pointer hover:border-primary transition-colors"
								onClick={() => setStep("export")}
							>
								<div className="flex items-center gap-4">
									<div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900">
										<Download className="h-6 w-6 text-blue-600 dark:text-blue-300" />
									</div>
									<div>
										<h3 className="font-medium">Export Products</h3>
										<p className="text-sm text-muted-foreground">
											Download your product catalog as CSV or JSON
										</p>
									</div>
								</div>
							</Card>
						</div>
						<DialogFooter>
							<Button variant="outline" onClick={handleDownloadTemplate}>
								<FileSpreadsheet className="h-4 w-4 mr-2" />
								Download Template
							</Button>
						</DialogFooter>
					</>
				)}

				{/* Import Step */}
				{step === "import" && (
					<>
						<DialogHeader>
							<DialogTitle>Import Products</DialogTitle>
							<DialogDescription>
								Review your file and import settings
							</DialogDescription>
						</DialogHeader>
						<div className="space-y-4 py-4">
							<Card className="p-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<FileSpreadsheet className="h-8 w-8 text-muted-foreground" />
										<div>
											<p className="font-medium">{fileName}</p>
											<p className="text-sm text-muted-foreground">
												CSV file selected
											</p>
										</div>
									</div>
									<Button
										variant="ghost"
										size="icon"
										onClick={() => {
											setCsvContent("");
											setFileName("");
											setStep("choose");
										}}
									>
										<X className="h-4 w-4" />
									</Button>
								</div>
							</Card>

							<div className="flex items-center justify-between">
								<div>
									<Label htmlFor="update-existing">Update existing products</Label>
									<p className="text-sm text-muted-foreground">
										Products with matching SKU will be updated
									</p>
								</div>
								<Switch
									id="update-existing"
									checked={updateExisting}
									onCheckedChange={setUpdateExisting}
								/>
							</div>
						</div>
						<DialogFooter className="gap-2">
							<Button variant="outline" onClick={() => setStep("choose")}>
								Back
							</Button>
							<PolarisButton onClick={handleValidate} loading={validating}>
								Validate & Preview
							</PolarisButton>
						</DialogFooter>
					</>
				)}

				{/* Validate Step */}
				{step === "validate" && validationResult && (
					<>
						<DialogHeader>
							<DialogTitle>Validation Results</DialogTitle>
							<DialogDescription>
								{validationResult.valid
									? "Your file is ready to import"
									: "Some rows have errors"}
							</DialogDescription>
						</DialogHeader>
						<div className="space-y-4 py-4">
							<div className="grid grid-cols-2 gap-4">
								<Card className="p-4 text-center">
									<p className="text-2xl font-bold">{validationResult.totalRows}</p>
									<p className="text-sm text-muted-foreground">Total Rows</p>
								</Card>
								<Card className="p-4 text-center">
									<p className="text-2xl font-bold text-green-600">
										{validationResult.validRows}
									</p>
									<p className="text-sm text-muted-foreground">Valid Rows</p>
								</Card>
							</div>

							{validationResult.errors.length > 0 && (
								<div className="space-y-2">
									<p className="text-sm font-medium text-destructive">
										Errors ({validationResult.errors.length})
									</p>
									<div className="max-h-40 overflow-y-auto space-y-2">
										{validationResult.errors.slice(0, 10).map((err) => (
											<div
												key={`row-${err.row}`}
												className="text-sm p-2 bg-destructive/10 rounded"
											>
												<span className="font-medium">Row {err.row}:</span>{" "}
												{err.errors.join(", ")}
											</div>
										))}
										{validationResult.errors.length > 10 && (
											<p className="text-sm text-muted-foreground">
												...and {validationResult.errors.length - 10} more errors
											</p>
										)}
									</div>
								</div>
							)}
						</div>
						<DialogFooter className="gap-2">
							<Button variant="outline" onClick={() => setStep("import")}>
								Back
							</Button>
							<PolarisButton
								onClick={handleImport}
								disabled={validationResult.validRows === 0}
							>
								Import {validationResult.validRows} Products
							</PolarisButton>
						</DialogFooter>
					</>
				)}

				{/* Importing Step */}
				{step === "importing" && (
					<>
						<DialogHeader>
							<DialogTitle>Importing Products</DialogTitle>
							<DialogDescription>
								Please wait while we process your file
							</DialogDescription>
						</DialogHeader>
						<div className="flex flex-col items-center justify-center py-12">
							<Loader size="lg" />
							<p className="mt-4 text-sm text-muted-foreground">
								This may take a few moments...
							</p>
						</div>
					</>
				)}

				{/* Result Step */}
				{step === "result" && importResult && (
					<>
						<DialogHeader>
							<DialogTitle>
								{importResult.success ? "Import Complete" : "Import Complete with Errors"}
							</DialogTitle>
							<DialogDescription>
								{importResult.success
									? "All products were processed successfully"
									: "Some products could not be imported"}
							</DialogDescription>
						</DialogHeader>
						<div className="space-y-4 py-4">
							<div className="grid grid-cols-3 gap-4">
								<Card className="p-4 text-center">
									<p className="text-2xl font-bold text-green-600">
										{importResult.imported}
									</p>
									<p className="text-sm text-muted-foreground">Created</p>
								</Card>
								<Card className="p-4 text-center">
									<p className="text-2xl font-bold text-blue-600">
										{importResult.updated}
									</p>
									<p className="text-sm text-muted-foreground">Updated</p>
								</Card>
								<Card className="p-4 text-center">
									<p className="text-2xl font-bold text-amber-600">
										{importResult.skipped}
									</p>
									<p className="text-sm text-muted-foreground">Skipped</p>
								</Card>
							</div>

							{importResult.errors.length > 0 && (
								<div className="space-y-2">
									<p className="text-sm font-medium text-destructive flex items-center gap-2">
										<AlertCircle className="h-4 w-4" />
										Errors ({importResult.errors.length})
									</p>
									<div className="max-h-40 overflow-y-auto space-y-2">
										{importResult.errors.slice(0, 10).map((err) => (
											<div
												key={`row-${err.row}-${err.sku}`}
												className="text-sm p-2 bg-destructive/10 rounded"
											>
												<span className="font-medium">
													Row {err.row} (SKU: {err.sku || "N/A"}):
												</span>{" "}
												{err.error}
											</div>
										))}
									</div>
								</div>
							)}

							{importResult.success && (
								<div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
									<CheckCircle2 className="h-5 w-5 text-green-600" />
									<span className="text-sm text-green-800 dark:text-green-200">
										All products were imported successfully!
									</span>
								</div>
							)}
						</div>
						<DialogFooter>
							<PolarisButton onClick={handleClose}>Done</PolarisButton>
						</DialogFooter>
					</>
				)}

				{/* Export Step */}
				{step === "export" && (
					<>
						<DialogHeader>
							<DialogTitle>Export Products</DialogTitle>
							<DialogDescription>
								Choose your export format and options
							</DialogDescription>
						</DialogHeader>
						<div className="space-y-4 py-4">
							<div className="grid grid-cols-2 gap-4">
								<Card
									className={`p-4 cursor-pointer transition-colors ${
										exportFormat === "csv"
											? "border-primary bg-primary/5"
											: "hover:border-muted-foreground"
									}`}
									onClick={() => setExportFormat("csv")}
								>
									<div className="text-center">
										<FileSpreadsheet className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
										<p className="font-medium">CSV</p>
										<p className="text-xs text-muted-foreground">
											For spreadsheets
										</p>
									</div>
								</Card>
								<Card
									className={`p-4 cursor-pointer transition-colors ${
										exportFormat === "json"
											? "border-primary bg-primary/5"
											: "hover:border-muted-foreground"
									}`}
									onClick={() => setExportFormat("json")}
								>
									<div className="text-center">
										<FileSpreadsheet className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
										<p className="font-medium">JSON</p>
										<p className="text-xs text-muted-foreground">
											For developers
										</p>
									</div>
								</Card>
							</div>

							<div className="flex items-center justify-between">
								<div>
									<Label htmlFor="include-drafts">Include draft products</Label>
									<p className="text-sm text-muted-foreground">
										Export products that are not yet published
									</p>
								</div>
								<Switch
									id="include-drafts"
									checked={includeDrafts}
									onCheckedChange={setIncludeDrafts}
								/>
							</div>
						</div>
						<DialogFooter className="gap-2">
							<Button variant="outline" onClick={() => setStep("choose")}>
								Back
							</Button>
							<PolarisButton onClick={handleExport} loading={exporting}>
								<Download className="h-4 w-4 mr-2" />
								Export Products
							</PolarisButton>
						</DialogFooter>
					</>
				)}

				{/* Hidden file input */}
				<input
					ref={fileInputRef}
					type="file"
					accept=".csv"
					onChange={handleFileSelect}
					className="hidden"
				/>
			</DialogContent>
		</Dialog>
	);
}
