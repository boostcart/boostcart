import { auth, signOut } from "@/auth";

import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/language-switcher";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      Home

      <LanguageSwitcher />

      {user ? (
        <form action={async () => {
          "use server";
          await signOut();
        }}>
          <Button>
            Logout
          </Button>
        </form>
      ) : (
        <Button asChild>
          <Link href={"/login"}>
            Login
          </Link>
        </Button>
      )}
    </div>
  );
}
