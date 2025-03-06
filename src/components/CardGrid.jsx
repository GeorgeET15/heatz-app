import React from "react";
import SmallCardComponent from "./SmallCardComponent";

import img1 from "../assets/h1.png";
import img2 from "../assets/hb7_1 2.png";
import img3 from "../assets/hb7_1 3.png";
import img4 from "../assets/hb9_1 1.png";

const cardData = [
  {
    image: img1,
    title: "Gaming Headset Pro",
    description: "Immersive sound with noise cancellation",
    price: 4999,
  },
  {
    image: img2,
    title: "Wireless Headset",
    description: "Comfortable fit with long battery life",
    price: 3999,
  },
  {
    image: img3,
    title: "Studio Headphones",
    description: "High-fidelity audio for music lovers",
    price: 5999,
  },
  {
    image: img4,
    title: "Sport Earbuds",
    description: "Sweat-resistant with secure fit",
    price: 2999,
  },
  {
    image: img2,
    title: "Pro Gamer X",
    description: "Crystal-clear mic and surround sound",
    price: 5499,
  },
  {
    image: img3,
    title: "Bluetooth Audio",
    description: "Portable with rich bass",
    price: 3499,
  },
  {
    image: img1,
    title: "Noise Canceller",
    description: "Blocks out distractions",
    price: 4599,
  },
  {
    image: img4,
    title: "Lightweight Buds",
    description: "Perfect for all-day wear",
    price: 2499,
  },
  {
    image: img3,
    title: "Elite Headset",
    description: "Premium sound quality",
    price: 6999,
  },
  {
    image: img4,
    title: "Travel Earphones",
    description: "Compact and durable",
    price: 1999,
  },
  {
    image: img1,
    title: "Bass Boosted",
    description: "Deep bass for immersive listening",
    price: 3999,
  },
  {
    image: img4,
    title: "Workout Pods",
    description: "Waterproof and wireless",
    price: 3299,
  },
  {
    image: img2,
    title: "Pro Audio Gear",
    description: "Designed for professionals",
    price: 5799,
  },
  {
    image: img1,
    title: "Gaming Headset Pro",
    description: "Immersive sound with noise cancellation",
    price: 4999,
  },
  {
    image: img2,
    title: "Wireless Headset",
    description: "Comfortable fit with long battery life",
    price: 3999,
  },
  {
    image: img3,
    title: "Studio Headphones",
    description: "High-fidelity audio for music lovers",
    price: 5999,
  },
  {
    image: img4,
    title: "Sport Earbuds",
    description: "Sweat-resistant with secure fit",
    price: 2999,
  },
  {
    image: img2,
    title: "Pro Audio Gear",
    description: "Designed for professionals",
    price: 5799,
  },
  {
    image: img1,
    title: "Gaming Headset Pro",
    description: "Immersive sound with noise cancellation",
    price: 4999,
  },
  {
    image: img2,
    title: "Wireless Headset",
    description: "Comfortable fit with long battery life",
    price: 3999,
  },
];

const CardGrid = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Headphones For You...!
        </h2>
        <div className="sm:grid sm:grid-cols-4 sm:gap-y-3 flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 sm:flex-shrink-none sm:w-auto"
            >
              <SmallCardComponent
                image={card.image}
                title={card.title}
                description={card.description}
                price={card.price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
