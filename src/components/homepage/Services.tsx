import React from "react";

interface Win {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
}

const winsData: Win[] = [
  {
    id: 1,
    imageSrc: "/images/easy-wins.png",
    title: "Easy Wins",
    description: "Get your best looking smile now!",
  },
  {
    id: 2,
    imageSrc: "/images/concrete.png",
    title: "Quick Wins",
    description: "Achieve your goals effortlessly!",
  },
  {
    id: 3,
    imageSrc: "/images/hack-growth.png",
    title: "Smart Wins",
    description: "Work smarter, not harder!",
  },
];

const Services: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-6 md:px-24 md:py-12 mx-auto">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="font-montserrat text-xl font-normal leading-7 text-gray-500">
          Featured Products
        </h2>
        <h2 className="font-montserrat text-2xl font-bold leading-8 text-gray-900">
          THE BEST SERVICES
        </h2>
        <p className="font-montserrat text-sm font-normal leading-5 text-gray-500">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-col md:flex-row  items-center justify-between ">
        {winsData.map((win) => (
          <div
            key={win.id}
            className="flex flex-col items-center gap-5 p-9"
            style={{ padding: "auto" }}
          >
            <img
              src={win.imageSrc}
              alt={win.title}
              className="w-18 h-18 object-cover"
            />
            <h2 className="font-montserrat text-2xl font-bold leading-8 text-gray-900 text-center">
              {win.title}
            </h2>
            <p className="font-montserrat text-sm font-normal leading-5 text-gray-500 text-center">
              {win.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
