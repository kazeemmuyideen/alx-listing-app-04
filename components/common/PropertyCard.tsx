import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyProps> = ({
  name,
  address,
  rating,
  category,
  price,
  image,
  discount,
}) => {
  return (
    <div className="rounded shadow-md overflow-hidden bg-white">
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{`${address.city}, ${address.country}`}</p>
        <p className="text-yellow-500">⭐ {rating}</p>
        <p className="text-gray-800 font-bold">${price}/night</p>
        {discount && (
          <p className="text-red-500 text-sm">Discount: {discount}%</p>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
