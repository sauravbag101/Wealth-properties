import React, { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { PiWhatsappLogoLight } from "react-icons/pi";
const PropertyCard = ({ property }) => {
  return (
    <div className="w-80 border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all ">
      <div className="relative">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        {property.featured && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
            FEATURED
          </div>
        )}
        {property.forSale && (
          <div
            className={`absolute top-2 right-2 bg-${property.forSaleColor}-700 text-white text-xs font-semibold px-2 py-1 rounded`}
          >
            FOR SALE &nbsp; {property.forSaleTag}
          </div>
        )}
      </div>
      <div className="p-2 ml-2">
        <div>
        <p className="text-xs font-semibold">{property.title}</p>
        <p className=" text-gray-800 font-semibold"> ₹{property.description} <span className="mt-2 pl-2 text-xs  font-medium">{property.price}</span></p>
        </div>
        <p className="text-sm text-gray-800 font-semibold">{property.tag}</p>
        <p className="text-xs text-gray-500">{property.address}</p>
        <p className="mt-2 text-sm font-semibold text-gray-800">{property.size}</p>
        <div>
          <hr />
          <div className="flex space-x-4 gap-2">
          <button className="group flex items-center justify-center px-4 py-2 rounded border-2 border-green-600 hover:bg-green-600 transition">
    <LuPhoneCall  className="mr-2 text-xl text-green-600 group-hover:text-white hover:text-white" />
    <span className="text-sm text-green-600 group-hover:text-white hover:text-white">Call</span>
</button>

  <button className="group flex items-center justify-center px-4 py-2 rounded border-2 border-green-600 hover:bg-green-600 transition">
    <HiOutlineMail className="mr-2 text-xl text-green-600 group-hover:text-white hover:text-white" />
    <span className="text-sm text-green-600 group-hover:text-white hover:text-white">Email</span>
  </button>

  <button className="group flex items-center justify-center px-3 py-2  rounded border-2 border-green-600 rounded-md hover:bg-green-600 transition">
    <PiWhatsappLogoLight className=" text-xl text-green-600 group-hover:text-white hover:text-white" />
    
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

const PropertyList = ({ selectedFilter }) => {
  const properties = [
    {
      imageUrl: "https://farmlandindia.com/wp-content/uploads/2020/04/0026-584x438.jpg",
      title: "AGRICULTURAL LAND",
      description: "63 Lacs Per Bigha",
      price: "63 Lacs",
      address: "Delhi - Dehradun Expressway",
      size: "75 Bigha",
      tag: "The Perfect Parcel",
      featured: true,
      forSale: true,
      forSaleColor: "red",
      forSaleTag: "HOT",
    },
    {
      imageUrl:
        "https://farmlandindia.com/wp-content/uploads/2020/04/0010-584x438.jpg",
      title: "RESIDENTIAL LAND",
      description: "21.25 lakh",
      price: "21.25 lakh",
      address: "Miami, FL",
      size: "98 Acres",
      tag: "The Perfect Parcel",
      featured: false,
      forSale: true,
      forSaleColor: "gray",
      forSaleTag: "",
    },
    {
      imageUrl:
        "https://farmlandindia.com/wp-content/uploads/2020/04/0002-584x438.jpg",
      title: "AGRICULTURAL LAND",
      description: "28.76 lakh",
      price: "28.76 lakh",
      address: "Miami, FL",
      size: "Large Acreage",
      tag: "The Perfect Parcel",
      featured: false,
      forSale: true,
      forSaleColor: "gray",
      forSaleTag: "fff",
    },
  ];

  const filteredProperties =
    selectedFilter === "ALL"
      ? properties
      : properties.filter((p) => p.title.includes(selectedFilter));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  p-4 px-5 justify-center">
      {filteredProperties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
  );
};

const PropertyFilter = ({ selectedFilter, setSelectedFilter }) => {
  const filters = [
    "ALL",
    "AGRICULTURAL LAND",
    "RESIDENTIAL LAND",
    "COMMERCIAL LAND",
    "HIGHWAY FRONT LAND",
    "DELHI-MUMBAI EXPRESS",
    "DELHI - DEHRADUN EXPRESSWAY",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-1 p-4 font-bold text-[14px] border-b border-gray-200 text-center"> {/* ✅ Adjusted flex alignment */}
  {filters.map((filter, index) => (
    <button
      key={index}
      className={`px-4 py-2 rounded-full justify-center ${
        selectedFilter === filter
          ? "border-b-2 border-green-600 text-black"
          : "border-gray-300 hover:bg-gray-200"
      }`}
      onClick={() => setSelectedFilter(filter)}
    >
      {filter}
    </button>
  ))}
</div>

  );
};

const PropertyPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  return (
    <div >
      <PropertyFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <PropertyList selectedFilter={selectedFilter} />
    </div>
  );
};

export default PropertyPage;
