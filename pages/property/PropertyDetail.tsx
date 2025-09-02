import ReviewSection from "../../components/property/ReviewSection"

interface PropertyDetailProps {
  property: {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    image: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600 mt-2">{property.description}</p>
      <p className="text-lg font-semibold mt-4">${property.price}</p>
      <p className="text-gray-500">{property.location}</p>

      <PropertyDetail property={property} />
      <ReviewSection propertyId={property.id} />
    </div>
  );
}
