"use client";
import React from "react";

interface Product {
  name: string;
  price: number;
}

interface CardProps {
  img: string;
  description: string;
  url: string;
  product: Product;
}

export const Card: React.FC<CardProps> = ({ img, description, url, product }) => {
  return (
    <div className="bg-gray-800 text-gray-100 shadow-2xl rounded-xl overflow-hidden flex flex-col border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-[1.02]">
      <div className="h-48 w-full bg-gray-700">
        <img
          src={url || ""}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5 flex flex-col gap-3 flex-grow">
        <h3
          className="text-xl font-bold text-white truncate"
          title={product.name}
        >
          {product.name}
        </h3>

        <p className="text-2xl font-extrabold text-blue-400">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
