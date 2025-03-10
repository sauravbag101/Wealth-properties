import React from "react";
import Slider from "react-slick";
import { FaRulerCombined, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Properties = () => {
  const properties = [
    {
      imageUrl: "https://farmlandindia.com/wp-content/uploads/2020/04/0006-584x438.jpg", // Replace with actual image URL
      title: "Commercial Lot",
      price: "₹5.9 lakh",
      size: "3410 sqft",
      featured: true,
      forSale: true,
    },
    {
      imageUrl: "https://farmlandindia.com/wp-content/uploads/2020/04/0026-584x438.jpg", // Replace with actual image URL
      title: "Commercial Area",
      price: "₹36 lakh",
      size: "29 acres",
      featured: true,
      forSale: true,
    },
    {
      imageUrl: "https://farmlandindia.com/wp-content/uploads/2020/04/0010-584x438.jpg", // Replace with actual image URL
      title: "Commercial Lot",
      price: "₹5.9 lakh",
      size: "3410 sqft",
      featured: true,
      forSale: true,
    },
    {
      imageUrl: "https://farmlandindia.com/wp-content/uploads/2020/04/0002-584x438.jpg", // Replace with actual image URL
      title: "Commercial Area",
      price: "₹36 lakh",
      size: "29 acres",
      featured: true,
      forSale: true,
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Tim Bennett",
      designation: "Manager, Company Inc.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 2,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Kenya Soval",
      designation: "Realtor, Company Inc.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
        id: 3,
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Kenya Soval",
        designation: "Realtor, Company Inc.",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
      
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white p-6 rounded-lg   border border-gray-200">
      <div className="text-4xl font-serif text-gray-600">&ldquo;66&rdquo;</div>
      <p className="text-gray-700 text-md mt-2">{testimonial.quote}</p>
      <div className="flex  mt-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-15 h-15 rounded-full mr-3"
        />
        <div>
          <p className="font-sm text-gray-900">{testimonial.name}</p>
          <p className="text-gray-500 text-sm">{testimonial.designation}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Section Heading */}
      <div className="text-center pt-30 pb-1 mt-20  bg-gray-50 px-4  ">
        <h2 className="text-[34px] leading-[1.5em] tracking-tight text-black font-semibold">
        Featured Properties
        </h2>
        <p className="pt-4  text-[18px] text-gray-500 max-w-[828px] mx-auto leading-[28px]">
        Search land for sale in your local area by price, amenities, or other features. We’ll show you the sales history and provide helpful advice.
        </p>
      </div>

      {/* Slider Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Slider {...settings}>
            {properties.map((property, index) => (
              <div key={index} className="p-4">
                <div className="border rounded-lg  overflow-hidden bg-white hover:shadow-xl transition-all">
                  <div className="relative">
                    <img
                      src={property.imageUrl}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />

                    {/* FEATURED Badge */}
                    {property.featured && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-semibold px-2 py-1">
                        FEATURED
                      </div>
                    )}

                    {/* FOR SALE Badge */}
                    {property.forSale && (
                      <div className="absolute top-2 right-2 bg-gray-900 text-white text-[10px] font-semibold px-2 py-1">
                        FOR SALE
                      </div>
                    )}
                  </div>

                  <div className="p-4 text-black">
                    <p className="text-md font-semibold">{property.title}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-green-600 text-lg font-semibold">
                        {property.price}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FaRulerCombined className="mr-1" />
                        {property.size}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Testimonial Section */}
      <div className="text-center py-10 bg-gray-50">
        <p className="text-yellow-500 text-2xl flex justify-center items-center gap-1 pt-4">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
        <p className="text-[34px] leading-[1.5em] tracking-tight font-semibold text-black mt-4">
          What customers are saying
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Properties;
