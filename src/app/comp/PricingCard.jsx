import Image from "next/image";

const PricingCard = ({data}) => {
  // console.log(data.img);
  return (
    <div className="max-w-sm rounded-lg border shadow-md p-4 bg-white">
      {/* Product Image */}
      <div className="flex justify-center">
        <Image
          src={data.img}
          alt="Tapo Smart Plug"
          layout="responsive"
          width={16}
          height={9}
          className="object-cover w-full"
          priority
        />
      </div>

      {/* Product Title */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800">
       {data.name}
      </h3>

      {/* Pricing Details */}
      <div className="mt-2 flex items-center space-x-2">
        <span className="text-xl font-bold text-green-600">₹{data.price}</span>
        <span className="text-sm text-gray-500 line-through">₹{data.price}</span>
      </div>

      {/* Add to Cart Button */}
      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default PricingCard;
