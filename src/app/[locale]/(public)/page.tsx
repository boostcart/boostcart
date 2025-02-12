import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCurrentUser } from "@/lib/actions";
import { signOut } from "@/auth";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div>
      Home

      {currentUser ? (
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
