import { SocialModal } from "@/components/modals/Social";
import { ThemeToggler } from "@/components/Theme";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="shadow-md sticky top-0 inset-x-0 bg-white dark:bg-zinc-950 dark:text-white text-black dark:shadow-white/10 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-semibold cursor-pointer text-xl tracking-wide"
        >
          Ismail
        </Link>
        <div className="flex gap-3">
          <Link href="/">Home</Link>
          <SocialModal />
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};
