import { useEffect, useState } from "react";

export function useIsAppleDevice() {
	const [isApple, setIsApple] = useState(false);

	useEffect(() => {
		const userAgent = window.navigator.userAgent.toLowerCase();
		const platform = window.navigator.platform.toLowerCase();

		const isAppleDevice =
			/mac|iphone|ipad|ipod/.test(userAgent) ||
			/mac|iphone|ipad|ipod/.test(platform) ||
			platform === "macintel" ||
			platform === "macppc" ||
			platform === "mac68k";

		setIsApple(isAppleDevice);
	}, []);

	return isApple;
}
