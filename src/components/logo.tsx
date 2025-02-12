import Image from "next/image";
import Link from "next/link";

interface LogoProps {
	variant?: "icon" | "logo" | "wordmark";
	color?: "white" | "black";
	size?: "sm" | "md" | "lg";
	width?: number;
	height?: number;
	href?: string;
	className?: string;
}

const Logo: React.FC<LogoProps> = ({
	variant = "icon",
	color = "white",
	size = "md",
	width,
	height,
	href,
	className
}) => {
	return (
		<>
			{href ? (
				<Link href={href}>
					<Image
						src={
							variant === "icon"
								? "/icon.png"
								: variant === "logo"
									? (color === "white" ? "/logo-white.png" : "/logo-black.png")
									: (color === "white" ? "/wordmark-white.png" : "/wordmark-black.png")
						}
						alt="BoostCart"
						width={width || 40}
						height={height || 40}
						className={`
							${size === "sm" && "size-8"}
							${size === "md" && "size-12"}
							${size === "lg" && "size-16"}
							h-auto ${className}
						`}
					/>
				</Link>
			) : (
				<Image
					src={
						variant === "icon"
							? "/icon.png"
							: variant === "logo"
								? (color === "white" ? "/logo-white.png" : "/logo-black.png")
								: (color === "white" ? "/wordmark-white.png" : "/wordmark-black.png")
					}
					alt="BoostCart"
					width={width || 40}
					height={height || 40}
					className={`
						${size === "sm" && "size-8"}
						${size === "md" && "size-12"}
						${size === "lg" && "size-16"}
						h-auto ${className}
					`}
				/>
			)}
		</>
	)
}

export default Logo;