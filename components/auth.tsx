"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/lib/supabase";

export default function Auth({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // États des formulaires
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ email: "", password: "", confirmPassword: "", name: "" });

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) onClose(); // Ferme le pop-up si l'utilisateur est déjà connecté
    };

    checkUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) onClose(); // Ferme la modale après connexion
    });

    return () => listener?.subscription.unsubscribe();
  }, [onClose]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      });

      if (error) throw error;

      router.refresh();
    } catch (error: any) {
      setError(error.message || "Une erreur est survenue lors de la connexion");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (registerData.password !== registerData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: registerData.email,
        password: registerData.password,
      });

      if (error) throw error;

      router.refresh();
    } catch (error: any) {
      setError(error.message || "Une erreur est survenue lors de l'inscription");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Card className="w-full max-w-md bg-white shadow-lg p-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Connexion</CardTitle>
          <CardDescription>Entrez vos identifiants pour continuer</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Connexion</TabsTrigger>
              <TabsTrigger value="register">Inscription</TabsTrigger>
            </TabsList>

            {/* ✅ FORMULAIRE LOGIN */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="exemple@email.com"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
                <Label>Mot de passe</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Connexion..." : "Se connecter"}
                </Button>
              </form>
            </TabsContent>

            {/* ✅ FORMULAIRE INSCRIPTION */}
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <Label>Nom</Label>
                <Input
                  type="text"
                  placeholder="Votre nom"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                  required
                />
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="exemple@email.com"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  required
                />
                <Label>Mot de passe</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  required
                />
                <Label>Confirmer le mot de passe</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  required
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Inscription..." : "S'inscrire"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          <Button onClick={onClose} variant="outline" className="w-full mt-2">
            Annuler
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
