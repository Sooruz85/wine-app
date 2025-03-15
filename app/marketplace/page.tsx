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
        case "0-200": return wine.price <= 200;
        case "201-500": return wine.price > 200 && wine.price <= 500;
        case "501+": return wine.price > 500;
        default: return true;
      }
    });
    return matchesSearch && matchesRegion && matchesType && matchesPriceRange;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Marketplace des Grands Vins</h1>
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
          </SelectContent>
        </Select>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger><SelectValue placeholder="Type de vin" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les types</SelectItem>
            <SelectItem value="Rouge">Rouge</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger><SelectValue placeholder="Prix" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les prix</SelectItem>
            <SelectItem value="0-200">0€ - 200€</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-12">
        {filteredChateaux.map((chateau) => (
          <Card key={chateau.id}>
            <CardHeader>
              <CardTitle>{chateau.name}</CardTitle>
              <Badge>{chateau.region}</Badge>
            </CardHeader>
            <CardContent>
              <Image src={chateau.image} alt={chateau.name} width={600} height={400} className="rounded" />
              <p className="text-gray-600 mt-4">{chateau.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
