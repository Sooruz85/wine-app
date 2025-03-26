"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Wine, User, ShoppingCart, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { supabase } from "@/lib/supabase";
import Auth from "@/components/auth";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateQuantity = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    const item = cartItems.find((i) => i.id === itemId);
    if (!item) return;

    const unitPrice = item.total_price / item.quantity;
    const newTotalPrice = unitPrice * newQuantity;

    try {
      const { error } = await supabase
        .from("cart_items")
        .update({
          quantity: newQuantity,
          total_price: newTotalPrice,
        })
        .eq("id", itemId);

      if (error) throw error;
      await fetchCart();
    } catch (err) {
      console.error("Erreur lors de la mise à jour :", err);
    }
  };

  const fetchCart = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("cart_items")
        .select(`
          id,
          date,
          quantity,
          total_price,
          reservation_id,
          reservations (
            id,
            title,
            chateau,
            price,
            image
          )
        `)
        .eq("user_id", user.id);

      if (error) throw error;

      setCartItems(data || []);
      const total = (data || []).reduce((sum, item) => sum + (item.total_price || 0), 0);
      setTotalPrice(total);
    } catch (error) {
      console.error("Erreur lors de la récupération du panier:", error);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    checkUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  const removeFromCart = async (itemId: string) => {
    try {
      const { error } = await supabase
        .from("cart_items")
        .delete()
        .eq("id", itemId);

      if (error) throw error;
      await fetchCart();
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setCartItems([]);
    setTotalPrice(0);
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
          <Sheet open={isCartOpen} onOpenChange={(open) => {
            setIsCartOpen(open);
            if (open && user) fetchCart();
          }}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[540px]">
              <h2 className="text-2xl font-bold mb-4">Votre Panier</h2>

              {cartItems.length === 0 ? (
                <p className="text-gray-500">Votre panier est vide.</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                      <div className="relative w-24 h-24">
                        {item.reservations?.image && (
                          <Image
                            src={item.reservations.image}
                            alt={item.reservations.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.reservations?.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.reservations?.chateau}</p>
                        <p className="text-sm">Date: {new Date(item.date).toLocaleDateString('fr-FR')}</p>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              −
                            </Button>
                            <span className="font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                          <p className="font-semibold">{item.total_price}€</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total</span>
                      <span className="text-xl font-bold">{totalPrice}€</span>
                    </div>
                    <Button className="w-full">
                      Finaliser la réservation
                    </Button>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>

          {user ? (
            <Button variant="outline" onClick={handleLogout}>
              <User className="mr-2 h-4 w-4" />
              Déconnexion
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
