"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wine, User, ShoppingCart, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Château Margaux 2015", price: 850, quantity: 1 },
    { id: 2, name: "Pavillon Rouge 2018", price: 280, quantity: 2 },
  ]);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Réservations", href: "/reservations" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "À propos", href: "/about" },
  ];

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <Wine className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold">VinVoyage</span>
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <Sheet open={cartOpen} onOpenChange={setCartOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <h2 className="text-lg font-bold mb-4">Panier</h2>
              {cartItems.length > 0 ? (
                <ul className="space-y-4">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex justify-between border-b pb-2">
                      <span>{item.name} (x{item.quantity})</span>
                      <span>{item.price * item.quantity}€</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Votre panier est vide.</p>
              )}
              <div className="mt-6 flex justify-between">
                <Button onClick={() => setCartOpen(false)}>Fermer</Button>
                <Link href="/checkout">
                  <Button variant="default">Commander</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/login">
            <Button>
              <User className="mr-2 h-4 w-4" />
              Se connecter
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
