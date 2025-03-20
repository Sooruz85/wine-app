"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wine, User, ShoppingCart, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { supabase } from "@/lib/supabase";
import Auth from "@/components/auth";



export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchCart = async () => {
      const { data, error } = await supabase
        .from("cart_items")
        .select("id, quantity, total_price, reservations(title, chateau)");

      if (error) console.error("Error fetching cart:", error);
      else setCartItems(data);
    };

    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchCart();
    checkUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <Wine className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold">VinVoyage</span>
          </Link>
        </div>

        {/* Menu desktop */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary">
            Accueil
          </Link>
          <Link href="/reservations" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary">
            Réservations
          </Link>
          <Link href="/marketplace" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary">
            Marketplace
          </Link>
          <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary">
            À propos
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          {/* Panier */}
          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <h2 className="text-2xl font-bold mb-4">Votre Panier</h2>

              {cartItems.length === 0 ? (
                <p className="text-gray-500">Votre panier est vide.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="border p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-bold">{item.reservations.title}</h3>
                    <p className="text-muted-foreground">{item.reservations.chateau}</p>
                    <p>Quantité : {item.quantity}</p>
                    <p className="font-bold">Total : {item.total_price}€</p>
                  </div>
                ))
              )}

              <Button className="mt-4 w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Finaliser la réservation
              </Button>
            </SheetContent>
          </Sheet>

          {/* Connexion / Déconnexion */}
          {user ? (
            <Button variant="outline" onClick={handleLogout}>
              <User className="mr-2 h-4 w-4" />
              Se déconnecter
            </Button>
          ) : (
            <Button onClick={() => setShowAuth(true)}>
              <User className="mr-2 h-4 w-4" />
              Se connecter
            </Button>
          )}
        </div>
      </nav>

      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </header>
  );
}
