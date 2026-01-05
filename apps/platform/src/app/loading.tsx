import Loader from "@/components/loader";

export default function Loading() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="flex flex-col items-center">
				<Loader />
				<p className="mt-4 text-muted-foreground">Loading...</p>
			</div>
		</div>
	);
}
