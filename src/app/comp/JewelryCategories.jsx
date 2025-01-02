import Image from "next/image";
import Link from "next/link";

const JewelryCategories = () => {
  const categories = [
    {
      title: "Promise Rings",
      bgColor: "bg-white",
      image: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/12_DEC/others/Tile/01/Desktop_1.jpg",
      href: "/categories/promise-rings"
    },
    {
      title: "Latest Studs & Hoops",
      bgColor: "bg-purple-800",
      image: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/12_DEC/others/Tile/01/Desktop_3.jpg",
      href: "/categories/studs-hoops"
    },
    {
      title: "Wedding Necklaces", 
      bgColor: "bg-teal-600",
      image: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/12_DEC/others/Tile/01/Desktop_6.jpg",
      href: "/categories/wedding-necklaces"
    },
    {
      title: "Mangalsutra Bracelets",
      bgColor: "bg-red-700",
      image: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/12_DEC/others/Tile/01/Desktop_2.jpg",
      href: "/categories/mangalsutra-bracelets"
    },
    {
      title: "Solitaire Engagement Rings",
      bgColor: "bg-blue-900",
      image: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/12_DEC/others/Tile/01/Desktop_5.jpg",
      href: "/categories/engagement-rings"
    },
    {
      title: "Kids Partywear",
      bgColor: "bg-purple-900",
      image: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/12_DEC/others/Tile/01/Desktop_4.jpg",
      href: "/categories/kids-partywear"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link href={category.href} key={index}>
            <div
              className={`relative h-28 rounded-lg overflow-hidden bg-white
                transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="opacity-70 transition-opacity hover:opacity-85"
                priority={index < 3}
              />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-xl font-bold tracking-wide text-center px-4">
                  {category.title}
                </h2>
              </div> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JewelryCategories;
