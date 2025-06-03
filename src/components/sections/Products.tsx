"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/Card";
import Button from "../ui/Button";
import { FiHeadphones } from "react-icons/fi";
import {
  LuBaby,
  LuBrainCircuit,
  LuFileText,
  LuMessageSquare,
} from "react-icons/lu";
import { TbDeviceGamepad } from "react-icons/tb";
import { RiShoppingBag3Line } from "react-icons/ri";
import Image from "next/image";

interface Product {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    icon: <FiHeadphones className="h-6 w-6" />,
    title: "IVR Platform",
    description:
      "Voice-based user engagement for contests, content, and subscriptions.",
    link: "#",
    color: "from-blue-500 to-indigo-600",
    imageUrl:
      "https://images.pexels.com/photos/6893825/pexels-photo-6893825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <LuMessageSquare className="h-6 w-6" />,
    title: "A2P SMS Gateway",
    description:
      "Reliable, secure messaging for alerts, OTPs, and transactions.",
    link: "#",
    color: "from-green-500 to-emerald-600",
    imageUrl:
      "https://images.pexels.com/photos/4047333/pexels-photo-4047333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <LuBrainCircuit className="h-6 w-6" />,
    title: "QuizMuiz",
    description: "AI-powered quiz platform — fun, fast, and monetized via DCB.",
    link: "#",
    color: "from-purple-500 to-pink-600",
    imageUrl:
      "https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <LuBaby className="h-6 w-6" />,
    title: "mKiddo",
    description:
      "A bilingual learning app for kids — games, stories, and early education.",
    link: "#",
    color: "from-yellow-500 to-orange-600",
    imageUrl:
      "https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <TbDeviceGamepad className="h-6 w-6" />,
    title: "XoshPlay",
    description: "Instant-access feature phone games — no install needed.",
    link: "#",
    color: "from-red-500 to-rose-600",
    imageUrl:
      "https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <LuFileText className="h-6 w-6" />,
    title: "Jante Chai",
    description: "AI-generated Bangla content — news, facts, and more.",
    link: "#",
    color: "from-sky-500 to-cyan-600",
    imageUrl:
      "https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <RiShoppingBag3Line className="h-6 w-6" />,
    title: "Hullor",
    description:
      "Telco-powered digital marketplace for content and micro-products.",
    link: "#",
    color: "from-fuchsia-500 to-violet-600",
    imageUrl:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Products: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Our Flagship Products
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Innovative digital solutions designed for the Bangladesh market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`overflow-hidden group transition-all duration-300 ${
                activeProduct === index
                  ? "ring-2 ring-indigo-500 shadow-xl"
                  : "hover:shadow-lg"
              }`}
              onMouseEnter={() => setActiveProduct(index)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity">
                  <div className="absolute bottom-0 left-0 p-4">
                    <span
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${product.color} text-white shadow-lg`}
                    >
                      {product.icon}
                    </span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <h3 className="text-xl pt-5 font-semibold text-slate-900 dark:text-white">
                  {product.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  {product.description}
                </p>
              </CardContent>

              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
