"use client";
import Image from "next/image";

const cars = [
  { id: 1, name: "Toyota Supra RZ", img: "/cars/supra.jpg" },
  { id: 2, name: "Nissan Skyline GT-R R34", img: "/cars/r34.jpg" },
  { id: 3, name: "Mitsubishi Lancer Evo VI", img: "/cars/evo6.jpg" },
  { id: 4, name: "Honda NSX", img: "/cars/nsx.jpg" },
  { id: 5, name: "Mazda RX-7 FD", img: "/cars/rx7.jpg" },
  { id: 6, name: "Isuzu Elf Truck", img: "/cars/elf.jpg" },
];

export default function TrendingCars() {
  return (
    <section className="py-20 rt-section-a">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--rt-primary)]">
          Trending Cars
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {cars.map((car) => (
            <div
              key={car.id}
              className="rt-card overflow-hidden hover:shadow-three transition"
            >
              <Image
                src={car.img}
                alt={car.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {car.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
