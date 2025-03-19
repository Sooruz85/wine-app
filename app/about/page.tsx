"use client";

import Image from "next/image";
import { Wine, Award, Users, Globe, Shield, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const stats = [
  { icon: Wine, label: "Châteaux Partenaires", value: "50+" },
  { icon: Users, label: "Visiteurs Annuels", value: "10,000+" },
  { icon: Globe, label: "Pays Représentés", value: "15+" },
  { icon: Clock, label: "Années d'Expertise", value: "25+" },
];

const values = [
  {
    title: "Excellence",
    description: "Nous sélectionnons uniquement les domaines les plus prestigieux et les expériences les plus exceptionnelles.",
    image: "https://images.unsplash.com/photo-1506377585622-bedcbb5a8251?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Authenticité",
    description: "Chaque visite offre une immersion authentique dans l'histoire et le savoir-faire des grands domaines viticoles.",
    image: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Innovation",
    description: "Nous associons tradition séculaire et technologies modernes pour enrichir l'expérience de dégustation.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1920&q=80"
  }
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src="https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=1920&q=80"
          alt="Vignoble"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Notre Histoire</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Depuis 2000, nous connectons les amateurs de vins aux plus prestigieux domaines viticoles de France
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Rendre accessible l&aposexcellence des grands vins français en proposant des expériences uniques
          de dégustation et de découverte, tout en préservant l&aposauthenticité et le prestige de chaque domaine.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <stat.icon className="h-8 w-8 mx-auto text-primary" />
            </CardHeader>
            <CardContent>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-16" />

      {/* Core Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-secondary/30 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <span>Certification ISO 9001</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            <span>Label Excellence Tourisme</span>
          </div>
          <div className="flex items-center gap-3">
            <Wine className="h-6 w-6 text-primary" />
            <span>Partenaire Officiel des Grands Crus</span>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
        <p className="text-xl text-muted-foreground mb-4">
          Pour toute question ou demande spéciale, notre équipe est à votre disposition
        </p>
        <p className="text-lg">
          Email: <span className="font-semibold">contact@grandsvins.fr</span>
        </p>
        <p className="text-lg">
          Téléphone: <span className="font-semibold">+33 (0)1 23 45 67 89</span>
        </p>
      </div>
    </div>
  );
}
