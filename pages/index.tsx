import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import PropertyCard from "@/components/common/PropertyCard";
import Pill from "@/components/common/Pill";

const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Beachfront",
  "Private Pool",
  "Free Parking",
  "Pet Friendly",
];

const Home: React.FC = () => {
  return (
    <>
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://example.com/hero.jpg')" }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Find your favorite place here!
          </h1>
          <p className="text-xl mt-4">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      <section className="p-6">
        <div className="flex flex-wrap gap-3 mb-6">
          {FILTERS.map((filter) => (
            <Pill key={filter} label={filter} />
          ))}
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <PropertyCard key={property.name} {...property} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
