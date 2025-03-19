import Link from "next/link";
import { Wine } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/about" className="text-gray-500 hover:text-gray-600">
            À propos
          </Link>
          <Link href="/contact" className="text-gray-500 hover:text-gray-600">
            Contact
          </Link>
          <Link href="/confidentialite" className="text-gray-500 hover:text-gray-600">
            Confidentialité
          </Link>
          <Link href="/conditions" className="text-gray-500 hover:text-gray-600">
            Conditions
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center space-x-2">
            <Wine className="h-6 w-6 text-primary" />
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} VinVoyage. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
