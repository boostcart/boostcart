"use client";

import { useTranslations } from 'next-intl';
import { signIn } from 'next-auth/react';
import { Button } from './ui/button';

import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa6';

const AuthProviders = () => {
	const t = useTranslations();

	return (
		<div className="flex flex-col items-center w-full space-y-2 lg:max-w-xl">
			<Button
				variant="google"
				onClick={() => signIn("google")}
				className="w-full h-10 px-4 py-2 text-sm rounded-md md:px-8 md:h-11 text-md"
			>
				<FcGoogle style={{ width: "24px", height: "24px" }} />
				<span>{t("auth.general.continueWith")} Google</span>
			</Button>

			<Button
				variant="facebook"
				onClick={() => signIn("facebook")}
				className="w-full h-10 px-4 py-2 text-sm rounded-md md:px-8 md:h-11 text-md"
			>
				<FaFacebook style={{ width: "24px", height: "24px" }} />
				<span>{t("auth.general.continueWith")} Facebook</span>
			</Button>

			<Button
				variant="apple"
				onClick={() => signIn("apple")}
				className="w-full h-10 px-4 py-2 text-sm rounded-md md:px-8 md:h-11 text-md"
			>
				<FaApple style={{ width: "24px", height: "24px" }} />
				<span>{t("auth.general.continueWith")} Apple</span>
			</Button>
		</div>
	)
}

export default AuthProviders;