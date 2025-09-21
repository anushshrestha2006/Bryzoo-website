import Link from "next/link";
import { BryzooLogo } from "./icons";
import { Button } from "./ui/button";
import { User, UserPlus, Bell } from "lucide-react";
import { DarkModeToggle } from "./dark-mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <BryzooLogo className="h-6 w-6" />
          <span className="font-bold font-headline">Bryzoo</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                </Link>
            </Button>
            <DarkModeToggle />
            <Button variant="ghost" asChild>
              <Link href="/login">
                <User className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>
            <Button asChild>
              <Link href="/signup">
                <UserPlus className="mr-2 h-4 w-4" />
                Signup
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
