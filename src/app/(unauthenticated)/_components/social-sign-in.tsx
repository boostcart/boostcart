"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";

export const SocialSignIn = () => {
	return (
		<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
			<Button
				size={"lg"}
				onClick={() => signIn.social({ provider: "google", callbackURL: "/" })}
				className="w-full"
				variant="outline"
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-label="Google logo"
					className="size-5"
				>
					<title>Google logo</title>
					<path
						d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
						fill="#4285F4"
					/>
					<path
						d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"
						fill="#34A853"
					/>
					<path
						d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z"
						fill="#FBBC05"
					/>
					<path
						d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z"
						fill="#EB4335"
					/>
				</svg>

				<span>Sign in with Google</span>
			</Button>
			<Button
				size={"lg"}
				onClick={() => signIn.social({ provider: "google", callbackURL: "/" })}
				className="w-full"
				variant="outline"
			>
				<svg
					version="1.1"
					id="svg9"
					width="666.66669"
					height="666.66718"
					viewBox="0 0 666.66668 666.66717"
					xmlns="http://www.w3.org/2000/svg"
					aria-label="Facebook logo"
					className="size-5"
				>
					<title>Facebook logo</title>
					<defs id="defs13">
						<clipPath clipPathUnits="userSpaceOnUse" id="clipPath25">
							<path d="M 0,700 H 700 V 0 H 0 Z" id="path23" />
						</clipPath>
					</defs>
					<g
						id="g17"
						transform="matrix(1.3333333,0,0,-1.3333333,-133.33333,799.99999)"
					>
						<g id="g19">
							<g id="g21" clipPath="url(#clipPath25)">
								<g id="g27" transform="translate(600,350)">
									<path
										d="m 0,0 c 0,138.071 -111.929,250 -250,250 -138.071,0 -250,-111.929 -250,-250 0,-117.245 80.715,-215.622 189.606,-242.638 v 166.242 h -51.552 V 0 h 51.552 v 32.919 c 0,85.092 38.508,124.532 122.048,124.532 15.838,0 43.167,-3.105 54.347,-6.211 V 81.986 c -5.901,0.621 -16.149,0.932 -28.882,0.932 -40.993,0 -56.832,-15.528 -56.832,-55.9 V 0 h 81.659 l -14.028,-76.396 h -67.631 V -248.169 C -95.927,-233.218 0,-127.818 0,0"
										style={{
											fill: "#0866ff",
											fillOpacity: 1,
											fillRule: "nonzero",
											stroke: "none",
										}}
										id="path29"
									/>
								</g>
								<g id="g31" transform="translate(447.9175,273.6036)">
									<path
										d="M 0,0 14.029,76.396 H -67.63 v 27.019 c 0,40.372 15.838,55.899 56.831,55.899 12.733,0 22.981,-0.31 28.882,-0.931 v 69.253 c -11.18,3.106 -38.509,6.212 -54.347,6.212 -83.539,0 -122.048,-39.441 -122.048,-124.533 V 76.396 h -51.552 V 0 h 51.552 v -166.242 c 19.343,-4.798 39.568,-7.362 60.394,-7.362 10.254,0 20.358,0.632 30.288,1.831 L -67.63,0 Z"
										style={{
											fill: "#ffffff",
											fillOpacity: 1,
											fillRule: "nonzero",
											stroke: "none",
										}}
										id="path33"
									/>
								</g>
							</g>
						</g>
					</g>
				</svg>

				<span>Sign in with Facebook</span>
			</Button>
		</div>
	);
};
