interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  location: string;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-lg transition">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold">{property.title}</h2>
      <p className="text-gray-500">{property.location}</p>
      <p className="text-sm mt-2">{property.description}</p>
      <p className="font-bold mt-2">${property.price}/night</p>
    </div>
  );
}
