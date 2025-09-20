import Link from "next/link";
import { BryzooLogo } from "./icons";
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
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
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/#booking" className="hover:text-primary">Book a Ride</Link></li>
              <li><Link href="/login" className="hover:text-primary">Login</Link></li>
              <li><Link href="/signup" className="hover:text-primary">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-headline">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+977 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@bryzoo.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>Birgunj, Nepal</span>
              </li>
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
