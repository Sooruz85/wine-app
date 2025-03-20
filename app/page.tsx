"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wine, Calendar, ShoppingBag, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const chateaux = [
  {
    id: 1,
    name: "Château Margaux",
    image: "/images/chateau-margaux.png",
    region: "Bordeaux",
  },
  {
    id: 2,
    name: "Château Trimbach",
    image: "/images/trimbach.png",
    region: "Bordeaux",
  },
  {
    id: 3,
    name: "Château d'Yquem",
    image: "/images/chateau-yquem.png",
    region: "Sauternes",
  },
  {
    id: 4,
    name: "Château Mouton Rothschild",
    image: "https://images.unsplash.com/photo-1619266465172-02a857c3556d?auto=format&fit=crop&w=1920&q=80",
    region: "Bordeaux",
  },
  {
    id: 5,
    name: "Château Pontet-Canet",
    image: "/images/chateau-pontetcanet.png",
    region: "Bordeaux",
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with Carousel */}
      <div className="relative">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {chateaux.map((chateau) => (
              <CarouselItem key={chateau.id}>
                <div className="relative h-[600px] w-full">
                  <Image
                    src={chateau.image}
                    alt={chateau.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                    <h2 className="text-4xl font-bold mb-2">{chateau.name}</h2>
                    <p className="text-xl">{chateau.region}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Découvrez l&apos;excellence des vins français
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
            Réservez des expériences œnologiques uniques et explorez notre sélection de vins d&apos;exception directement des producteurs.
          </p>
          <div className="mt-10 flex gap-x-6">
            <Link href="/reservations">
              <Button size="lg" className="text-lg">
                Réserver une visite
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button variant="outline" size="lg" className="text-lg">
                Explorer les vins
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">L&apos;expérience VinVoyage</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tout ce dont vous avez besoin pour votre voyage œnologique
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  icon: Calendar,
                  name: "Réservations simplifiées",
                  description: "Réservez vos visites de vignobles et hébergements en quelques clics."
                },
                {
                  icon: Star,
                  name: "Expériences exclusives",
                  description: "Accédez à des dégustations privées et des visites guidées personnalisées."
                },
                {
                  icon: ShoppingBag,
                  name: "Marketplace dédiée",
                  description: "Achetez directement les vins que vous avez dégustés lors de vos visites."
                }
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
