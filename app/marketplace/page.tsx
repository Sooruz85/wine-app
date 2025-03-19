"use client";

import { useState } from "react";
import Image from "next/image";
import { Wine, Search } from "lucide-react";
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

const chateaux = [
  {
    id: 1,
    name: "Château Margaux",
    region: "Bordeaux",
    description: "Premier Grand Cru Classé en 1855, Château Margaux est l'un des domaines viticoles les plus prestigieux au monde.",
    image: "https://images.unsplash.com/photo-1583803804313-cf4b9ecd674c?auto=format&fit=crop&w=1920&q=80",
    wines: [
      { id: 1, name: "Château Margaux 2015", price: 850, type: "Rouge", rating: 98, stock: 12 },
      { id: 2, name: "Pavillon Rouge 2018", price: 280, type: "Rouge", rating: 94, stock: 24 },
      { id: 3, name: "Pavillon Blanc 2019", price: 195, type: "Blanc", rating: 93, stock: 18 }
    ]
  },
  {
    id: 2,
    name: "Domaine de la Romanée-Conti",
    region: "Bourgogne",
    description: "Le domaine le plus prestigieux de Bourgogne, produisant des vins d'une finesse incomparable.",
    image: "https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?auto=format&fit=crop&w=1920&q=80",
    wines: [
      { id: 4, name: "La Tâche 2017", price: 4500, type: "Rouge", rating: 99, stock: 6 },
      { id: 5, name: "Montrachet 2018", price: 8000, type: "Blanc", rating: 98, stock: 3 },
      { id: 6, name: "Romanée-Conti 2016", price: 15000, type: "Rouge", rating: 100, stock: 2 }
    ]
  },
  {
    id: 3,
    name: "Domaine Trimbach",
    region: "Alsace",
    description: "Maison historique d'Alsace, réputée pour ses Rieslings d'exception.",
    image: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?auto=format&fit=crop&w=1920&q=80",
    wines: [
      { id: 7, name: "Clos Sainte Hune 2015", price: 280, type: "Blanc", rating: 96, stock: 15 },
      { id: 8, name: "Gewurztraminer Vendanges Tardives 2018", price: 120, type: "Blanc", rating: 92, stock: 28 },
      { id: 9, name: "Pinot Gris Réserve 2019", price: 45, type: "Blanc", rating: 90, stock: 40 }
    ]
  },
  {
    id: 4,
    name: "Château de Beaucastel",
    region: "Rhône",
    description: "Domaine emblématique de Châteauneuf-du-Pape, connu pour ses assemblages complexes.",
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1920&q=80",
    wines: [
      { id: 10, name: "Châteauneuf-du-Pape Rouge 2016", price: 120, type: "Rouge", rating: 97, stock: 24 },
      { id: 11, name: "Châteauneuf-du-Pape Blanc 2018", price: 95, type: "Blanc", rating: 94, stock: 18 },
      { id: 12, name: "Hommage à Jacques Perrin 2015", price: 550, type: "Rouge", rating: 99, stock: 6 }
    ]
  },
  {
    id: 5,
    name: "Château d'Yquem",
    region: "Bordeaux",
    description: "Le plus prestigieux des vins liquoreux, unique Premier Cru Supérieur de Sauternes.",
    image: "/images/chateau-yquem.png",
        wines: [
      { id: 13, name: "Château d'Yquem 2015", price: 450, type: "Liquoreux", rating: 98, stock: 10 },
      { id: 14, name: "Y d'Yquem 2018", price: 180, type: "Blanc Sec", rating: 95, stock: 20 },
      { id: 15, name: "Château d'Yquem 2010", price: 800, type: "Liquoreux", rating: 100, stock: 5 }
    ]
  }
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const filteredChateaux = chateaux.filter((chateau) => {
    const matchesSearch = chateau.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "all" || chateau.region === selectedRegion;
    const matchesType = selectedType === "all" || chateau.wines.some(wine => wine.type === selectedType);
    const matchesPriceRange = priceRange === "all" || chateau.wines.some(wine => {
      switch (priceRange) {
        case "0-100": return wine.price <= 100;
        case "101-500": return wine.price > 100 && wine.price <= 500;
        case "501-1000": return wine.price > 500 && wine.price <= 1000;
        case "1001+": return wine.price > 1000;
        default: return true;
      }
    });
    return matchesSearch && matchesRegion && matchesType && matchesPriceRange;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Wine className="h-8 w-8" />
        <h1 className="text-4xl font-bold">Marketplace des Grands Vins</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Input
          placeholder="Rechercher un vin..."
          className="pl-9"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger><SelectValue placeholder="Région" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les régions</SelectItem>
            <SelectItem value="Bordeaux">Bordeaux</SelectItem>
            <SelectItem value="Bourgogne">Bourgogne</SelectItem>
            <SelectItem value="Alsace">Alsace</SelectItem>
            <SelectItem value="Rhône">Rhône</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger><SelectValue placeholder="Type de vin" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les types</SelectItem>
            <SelectItem value="Rouge">Rouge</SelectItem>
            <SelectItem value="Blanc">Blanc</SelectItem>
            <SelectItem value="Blanc Sec">Blanc Sec</SelectItem>
            <SelectItem value="Liquoreux">Liquoreux</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger><SelectValue placeholder="Prix" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les prix</SelectItem>
            <SelectItem value="0-100">0€ - 100€</SelectItem>
            <SelectItem value="101-500">101€ - 500€</SelectItem>
            <SelectItem value="501-1000">501€ - 1000€</SelectItem>
            <SelectItem value="1001+">1001€ et plus</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredChateaux.map((chateau) => (
          <Card key={chateau.id} className="overflow-hidden">
            <CardHeader className="space-y-1">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{chateau.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2">{chateau.region}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-64 w-full">
                <Image
                  src={chateau.image}
                  alt={chateau.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-muted-foreground">{chateau.description}</p>
              <div className="space-y-2">
                {chateau.wines.map((wine) => (
                  <div key={wine.id} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <p className="font-medium">{wine.name}</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline">{wine.type}</Badge>
                        <Badge variant="outline">Note: {wine.rating}/100</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{wine.price}€</p>
                      <p className="text-sm text-muted-foreground">Stock: {wine.stock}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
