// components/CategoryListing.js
'use client';
import React, { useState } from "react";
import PricingCard from "./PricingCard";

const CategoryListing = () => {
  const [activeCategory, setActiveCategory] = useState(1); // Tracks the active category
  const [activeSubcategory, setActiveSubcategory] = useState(1); // Tracks the active subcategory

  // Sample data for categories, subcategories, and images
  const data =[
    {
      "category": "Necklaces",
      "subcategories": [
        {
          "name": "Gold Necklaces",
          "items": [
            {
              "name": "18K Gold Necklace",
              "img": "https://via.placeholder.com/150/ffcc00",
              "price": "120"
            },
            {
              "name": "Silver-Plated Necklace",
              "img": "https://via.placeholder.com/150/cccccc",
              "price": "90"
            },
            {
              "name": "Vintage Diamond Necklace",
              "img": "https://via.placeholder.com/150/999999",
              "price": "600"
            }
          ]
        },
        {
          "name": "Gemstone Necklaces",
          "items": [
            {
              "name": "Ruby Necklace",
              "img": "https://via.placeholder.com/150/ff0000",
              "price": "150"
            },
            {
              "name": "Emerald Necklace",
              "img": "https://via.placeholder.com/150/00cc00",
              "price": "180"
            },
            {
              "name": "Sapphire Necklace",
              "img": "https://via.placeholder.com/150/0000ff",
              "price": "200"
            }
          ]
        },
        {
          "name": "Fashion Necklaces",
          "items": [
            {
              "name": "Choker Necklace",
              "img": "https://via.placeholder.com/150/ff66cc",
              "price": "50"
            },
            {
              "name": "Beaded Necklace",
              "img": "https://via.placeholder.com/150/00bbee",
              "price": "35"
            },
            {
              "name": "Layered Necklace",
              "img": "https://via.placeholder.com/150/aa77bb",
              "price": "70"
            }
          ]
        }
      ]
    },
    {
      "category": "Bangles",
      "subcategories": [
        {
          "name": "Gold Bangles",
          "items": [
            {
              "name": "Polished Gold Bangle",
              "img": "https://via.placeholder.com/150/ffcc00",
              "price": "180"
            },
            {
              "name": "Textured Gold Bangle",
              "img": "https://via.placeholder.com/150/ffd700",
              "price": "220"
            },
            {
              "name": "Diamond-Studded Bangle",
              "img": "https://via.placeholder.com/150/cc99ff",
              "price": "800"
            }
          ]
        },
        {
          "name": "Silver Bangles",
          "items": [
            {
              "name": "Sterling Silver Bangle",
              "img": "https://via.placeholder.com/150/cccccc",
              "price": "120"
            },
            {
              "name": "Twisted Silver Bangle",
              "img": "https://via.placeholder.com/150/ccccff",
              "price": "150"
            },
            {
              "name": "Silver with Gemstone Bangle",
              "img": "https://via.placeholder.com/150/80bfff",
              "price": "250"
            }
          ]
        },
        {
          "name": "Fashion Bangles",
          "items": [
            {
              "name": "Colorful Beaded Bangle",
              "img": "https://via.placeholder.com/150/ff9966",
              "price": "30"
            },
            {
              "name": "Leather Wrapped Bangle",
              "img": "https://via.placeholder.com/150/804000",
              "price": "40"
            },
            {
              "name": "Charm Bangle",
              "img": "https://via.placeholder.com/150/99cc66",
              "price": "60"
            }
          ]
        }
      ]
    },
    {
      "category": "Earrings",
      "subcategories": [
        {
          "name": "Gold Earrings",
          "items": [
            {
              "name": "Gold Hoops",
              "img": "https://via.placeholder.com/150/ffcc00",
              "price": "100"
            },
            {
              "name": "Gold Stud Earrings",
              "img": "https://via.placeholder.com/150/ffd700",
              "price": "120"
            },
            {
              "name": "Gold Drop Earrings",
              "img": "https://via.placeholder.com/150/ccffcc",
              "price": "150"
            }
          ]
        },
        {
          "name": "Silver Earrings",
          "items": [
            {
              "name": "Sterling Silver Hoops",
              "img": "https://via.placeholder.com/150/c0c0c0",
              "price": "80"
            },
            {
              "name": "Silver Stud Earrings",
              "img": "https://via.placeholder.com/150/b0b0b0",
              "price": "60"
            },
            {
              "name": "Silver Chandelier Earrings",
              "img": "https://via.placeholder.com/150/a0a0a0",
              "price": "200"
            }
          ]
        },
        {
          "name": "Diamond Earrings",
          "items": [
            {
              "name": "Round Diamond Studs",
              "img": "https://via.placeholder.com/150/ffffff",
              "price": "300"
            },
            {
              "name": "Diamond Hoops",
              "img": "https://via.placeholder.com/150/eeeeee",
              "price": "450"
            },
            {
              "name": "Diamond Drop Earrings",
              "img": "https://via.placeholder.com/150/cccccc",
              "price": "600"
            }
          ]
        }
      ]
    }
  ]
  ;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Categories */}
      <div className="flex space-x-6  pb-4">
        {data.map((cat, catIndex) => (
          <div
            key={catIndex}
            className={`px-4 py-2 text-center cursor-pointer rounded-md ${
              activeCategory === catIndex + 1
                ? "bg-[#7c3aed] text-white font-semibold shadow-lg"
                : "bg-white text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => {
              setActiveCategory(catIndex + 1);
              setActiveSubcategory(1); // Reset to the first subcategory when a new category is selected
            }}
          >
            <h2>{cat.category}</h2>
          </div>
        ))}
      </div>
      <div className="border-b border-gray-300" />

      {/* Subcategories */}
      <div className="flex space-x-6 mt-6">
        {data[activeCategory - 1]?.subcategories.map((subcat, subcatIndex) => (
          <div
            key={subcatIndex}
            className={`px-4 py-2 text-center cursor-pointer rounded-md ${
              activeSubcategory === subcatIndex + 1
                ? "bg-[#a78bfa] text-white font-semibold shadow-lg"
                : "bg-white text-gray-700 hover:bg-green-100"
            }`}
            onClick={() => setActiveSubcategory(subcatIndex + 1)}
          >
            <p>{subcat.name}</p>
          </div>
        ))}
      </div>

      {/* Images */}
      <div className="grid grid-cols-5 gap-6 mt-8 mx-auto">
        {data[activeCategory - 1]?.subcategories[activeSubcategory - 1]?.items.map(
          (items, imageIndex) => (
            <PricingCard data={items}  key={imageIndex} />
          )
        )}
      </div>
    </div>
  );
};

export default CategoryListing;
