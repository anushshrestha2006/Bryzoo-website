import Link from "next/link";
import { BryzooLogo } from "./icons";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <BryzooLogo className="h-6 w-6" />
              <span className="font-bold font-headline text-lg text-foreground">Bryzoo</span>
            </Link>
            <p className="text-sm">
              Your trusted partner for comfortable and reliable rides between Birgunj and Kathmandu.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/#booking" className="hover:text-primary">Book a Ride</Link></li>
              <li><Link href="/login" className="hover:text-primary">Login</Link></li>
              <li><Link href="/signup" className="hover:text-primary">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-headline">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bryzoo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
