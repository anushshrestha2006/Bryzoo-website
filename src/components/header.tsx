import Link from "next/link";
import { BryzooLogo } from "./icons";
import { Button } from "./ui/button";
import { User, UserPlus, Bell } from "lucide-react";
import { DarkModeToggle } from "./dark-mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";

export default function Header() {
  const navLinks = (
    <>
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
    </>
  );
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <BryzooLogo className="h-6 w-6" />
          <span className="font-bold font-headline">Bryzoo</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden items-center space-x-1 md:flex">
            <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                </Link>
            </Button>
            <DarkModeToggle />
            {navLinks}
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium pt-8">
                  <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                    <BryzooLogo className="h-6 w-6" />
                    <span>Bryzoo</span>
                  </Link>
                  <div className="flex flex-col gap-4">
                    {navLinks}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-4">
                     <Button variant="ghost" size="icon" asChild>
                        <Link href="#">
                            <Bell className="h-5 w-5" />
                            <span className="sr-only">Notifications</span>
                        </Link>
                    </Button>
                    <DarkModeToggle />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
