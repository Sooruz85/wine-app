"use client";

import { useState } from "react";
import Image from "next/image";
import { Wine, Calendar, Clock, Users, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const experiences = [
  {
    id: 1,
    chateau: "Château Margaux",
    title: "Dégustation Prestige",
    description: "Une expérience exclusive incluant la dégustation de 3 millésimes prestigieux de Château Margaux.",
    image: "/images/chateau-margaux.png",    duration: "2h30",
    maxParticipants: 8,
    price: 350,
    type: "Dégustation",
    language: ["Français", "English"],
    availableDates: ["2025-02-15", "2025-02-22", "2025-03-01"]
  },
  {
    id: 2,
    chateau: "Domaine de la Romanée-Conti",
    title: "Visite des Grands Crus",
    description: "Découverte exceptionnelle des parcelles historiques suivie d'une dégustation de grands crus.",
    image: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?auto=format&fit=crop&w=1920&q=80",
    duration: "3h",
    maxParticipants: 6,
    price: 500,
    type: "Visite & Dégustation",
    language: ["Français", "English", "日本語"],
    availableDates: ["2025-02-20", "2025-03-15", "2025-04-10"]
  },
  {
    id: 3,
    chateau: "Château d'Yquem",
    title: "L'Art du Sauternes",
    description: "Immersion dans l'univers des vins liquoreux et dégustation verticale d'Yquem.",
    image: "/images/chateau-yquem.png",
    duration: "2h",
    maxParticipants: 10,
    price: 300,
    type: "Masterclass",
    language: ["Français", "English", "中文"],
    availableDates: ["2025-03-05", "2025-03-20", "2025-04-15"]
  },
  {
    id: 4,
    chateau: "Château de Beaucastel",
    title: "Secrets des Châteauneuf-du-Pape",
    description: "Découverte des 13 cépages et visite des caves historiques.",
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1920&q=80",
    duration: "2h30",
    maxParticipants: 12,
    price: 150,
    type: "Visite technique",
    language: ["Français", "English", "Deutsch"],
    availableDates: ["2025-02-25", "2025-03-10", "2025-03-25"]
  },
  {
    id: 5,
    chateau: "Domaine Trimbach",
    title: "L'Excellence Alsacienne",
    description: "Visite privée des caves et dégustation des cuvées prestigieuses Clos Sainte Hune.",
    image: "/images/trimbach.png",    duration: "2h",
    maxParticipants: 8,
    price: 200,
    type: "Visite & Dégustation",
    language: ["Français", "English", "Deutsch"],
    availableDates: ["2025-03-08", "2025-03-22", "2025-04-05"]
  },
  {
    id: 6,
    chateau: "Château Mouton Rothschild",
    title: "Collection d'Art & Vins",
    description: "Visite du musée des étiquettes et dégustation de grands millésimes.",
    image: "https://images.unsplash.com/photo-1560148218-1a83060f7b32?auto=format&fit=crop&w=1920&q=80",
    duration: "3h",
    maxParticipants: 10,
    price: 400,
    type: "Art & Vin",
    language: ["Français", "English"],
    availableDates: ["2025-02-18", "2025-03-12", "2025-04-08"]
  },
  {
    id: 7,
    chateau: "Château Palmer",
    title: "Biodynamie & Terroir",
    description: "Découverte de la viticulture biodynamique et dégustation comparative.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1920&q=80",
    duration: "2h30",
    maxParticipants: 8,
    price: 250,
    type: "Visite technique",
    language: ["Français", "English"],
    availableDates: ["2025-03-02", "2025-03-18", "2025-04-12"]
  },
  {
    id: 8,
    chateau: "Maison Krug",
    title: "L'Art du Champagne",
    description: "Visite des caves historiques et dégustation des différentes cuvées.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=80",
    duration: "2h",
    maxParticipants: 6,
    price: 450,
    type: "Prestige",
    language: ["Français", "English"],
    availableDates: ["2025-02-28", "2025-03-14", "2025-04-18"]
  },
  {
    id: 9,
    chateau: "Château Cheval Blanc",
    title: "Architecture & Vin",
    description: "Visite du chai contemporain et dégustation de grands millésimes.",
    image: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?auto=format&fit=crop&w=1920&q=80",
    duration: "2h30",
    maxParticipants: 10,
    price: 300,
    type: "Architecture & Vin",
    language: ["Français", "English", "中文"],
    availableDates: ["2025-03-07", "2025-03-28", "2025-04-15"]
  },
  {
    id: 10,
    chateau: "Château Pontet-Canet",
    title: "Innovation & Tradition",
    description: "Découverte du travail des chevaux dans les vignes et des dernières innovations.",
    image: "/images/chateau-pontetcanet.png",    duration: "3h",
    maxParticipants: 12,
    price: 180,
    type: "Visite technique",
    language: ["Français", "English"],
    availableDates: ["2025-02-22", "2025-03-16", "2025-04-20"]
  }
];

export default function Reservations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  const filteredExperiences = experiences.filter((exp) => {
    const matchesSearch = exp.chateau.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exp.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || exp.type === selectedType;
    const matchesLanguage = selectedLanguage === "all" || exp.language.includes(selectedLanguage);
    const matchesPriceRange = priceRange === "all" || (() => {
      switch (priceRange) {
        case "0-200": return exp.price <= 200;
        case "201-350": return exp.price > 200 && exp.price <= 350;
        case "351+": return exp.price > 350;
        default: return true;
      }
    })();

    return matchesSearch && matchesType && matchesLanguage && matchesPriceRange;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Calendar className="h-8 w-8" />
        <h1 className="text-4xl font-bold">Réservations & Expériences</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Input
          placeholder="Rechercher une expérience..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9"
        />
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger><SelectValue placeholder="Type d'expérience" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les types</SelectItem>
            <SelectItem value="Dégustation">Dégustation</SelectItem>
            <SelectItem value="Visite & Dégustation">Visite & Dégustation</SelectItem>
            <SelectItem value="Masterclass">Masterclass</SelectItem>
            <SelectItem value="Visite technique">Visite technique</SelectItem>
            <SelectItem value="Art & Vin">Art & Vin</SelectItem>
            <SelectItem value="Prestige">Prestige</SelectItem>
            <SelectItem value="Architecture & Vin">Architecture & Vin</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <SelectTrigger><SelectValue placeholder="Langue" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les langues</SelectItem>
            <SelectItem value="Français">Français</SelectItem>
            <SelectItem value="English">English</SelectItem>
            <SelectItem value="Deutsch">Deutsch</SelectItem>
            <SelectItem value="日本語">日本語</SelectItem>
            <SelectItem value="中文">中文</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger><SelectValue placeholder="Prix" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les prix</SelectItem>
            <SelectItem value="0-200">0€ - 200€</SelectItem>
            <SelectItem value="201-350">201€ - 350€</SelectItem>
            <SelectItem value="351+">351€ et plus</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredExperiences.map((experience) => (
          <Card key={experience.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{experience.title}</CardTitle>
                  <CardDescription className="text-lg mt-1">{experience.chateau}</CardDescription>
                </div>
                <Badge variant="secondary">{experience.type}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-64 w-full">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-muted-foreground">{experience.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>Max {experience.maxParticipants} pers.</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {experience.language.map((lang) => (
                  <Badge key={lang} variant="outline">{lang}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center bg-secondary/50 mt-4">
              <div className="flex items-center gap-2">
                <Euro className="h-5 w-5" />
                <span className="text-xl font-bold">{experience.price}€</span>
                <span className="text-muted-foreground">par personne</span>
              </div>
              <Button>Réserver</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
