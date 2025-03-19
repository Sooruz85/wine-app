"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contactez-nous</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">contact@grandsvins.fr</p>
            <p className="text-muted-foreground">Réponse sous 24-48h</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Téléphone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">+33 (0)1 23 45 67 89</p>
            <p className="text-muted-foreground">Du lundi au vendredi, 9h-18h</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Adresse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">123 Avenue des Vignes</p>
            <p className="text-lg">75008 Paris, France</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Horaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Lundi - Vendredi : 9h-18h</p>
            <p className="text-lg">Samedi : 10h-17h</p>
            <p className="text-muted-foreground">Fermé le dimanche</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-secondary/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Formulaire de contact</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom</label>
              <input
                type="text"
                className="w-full p-2 rounded-md border border-input bg-background"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded-md border border-input bg-background"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Sujet</label>
            <input
              type="text"
              className="w-full p-2 rounded-md border border-input bg-background"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              className="w-full p-2 rounded-md border border-input bg-background min-h-[150px]"
              required
            ></textarea>
          </div>
          <Button type="submit">
            Envoyer
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
