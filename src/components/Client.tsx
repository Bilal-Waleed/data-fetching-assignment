"use client";

import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Image from "next/image";

export interface Client {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Client() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Client[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-8">
      <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-12">
        Explore Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-10">
        {products.map((item) => {
          const { image, id, title, price, description, category, rating } = item;

          return (
            <div
              key={id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 p-6 flex flex-col items-center space-y-6"
            >
              <img
                src={image}
                alt={title}
                className="object-contain mb-4 rounded-xl transition-transform duration-300 hover:scale-110"
              />
              <h2 className="text-xl font-semibold text-gray-900 text-center">{title}</h2>
              <p className="text-sm text-gray-600 font-light text-center">{description}</p>
              <div className="flex flex-col items-center space-y-1">
                <span className="text-xl font-bold text-blue-600">${price}</span>
                <span className="text-sm text-gray-700 font-medium">{category}</span>
              </div>
              <div className="flex items-center text-yellow-500">
                ⭐ {rating.rate} ({rating.count} reviews)
              </div>
              <button className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                Buy Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
