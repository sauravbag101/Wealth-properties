import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaRegUserCircle } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css"; // Import CoreUI styles

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Added missing state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setNavbarShadow(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  
  const menuItems = [
    { title: "Home", href: "#", active: false },
    {
      title: "Properties",
      href: "#",
      active: false,
      dropdown: ["Residential", "Commercial", "Luxury Homes"],
    },
    {
      title: "Property",
      href: "#",
      active: false,
      dropdown: ["For Sale", "For Rent", "Investment Deals"],
    },
    { title: "Realtor", href: "#", active: false },
    { title: "Others", href: "#", active: false },
  ];

  return (
    <>
      {/* Navbar (Transparent & Above Carousel) */}
      <nav
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
          navbarShadow ? "bg-black/60 shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between border-b border-gray-200">
          {/* Logo */}
          <div className=" text-xl font-bold w-40 h-auto">
          <img src="https://farmlandindia.com/wp-content/uploads/2025/01/farmland_india__website_logo_white.png" alt="" />

          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 ">
            {menuItems.map((item, index) => (
              <p
                key={index}
                href={item.href}
                className={`text-md text-white no-underline pt-4 ${
                  item.active ? "font-semibold text-blue-300" : "hover:text-blue-300"
                }`}
              >
                {item.title}
              </p>
            ))}
          </div>

          {/* Sign In & Dashboard */}
          <div className="hidden lg:flex items-center space-x-6">
            <LuPhoneCall className="text-[24px] text-white" />
            <div className="text-sm text-white cursor-pointer text-[16px] font-semibold">+91 874775743856</div>
            <FaRegUserCircle className="text-[24px] text-white" />
            <p className="bg-white/30 text-white border-1 border-white rounded-lg px-4 py-2 mt-3 hover:bg-green-600 hover:border-none transition">
              Creating a Listing
            </p>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white p-2 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 top-20 bg-black/90 transition-all duration-500 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center pt-10 space-y-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`text-white text-xl uppercase px-3 py-2 transition ${
                    item.active ? "text-blue-300" : "hover:text-blue-300"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

       {/* Carousel (Navbar is on top of it) */}
       <div className="relative w-full h-screen">
        <CCarousel controls indicators dark className="absolute inset-0 w-full h-full">
          <CCarouselItem>
            <CImage
              className="w-full h-screen object-cover"
              src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg"
              alt="Slide 1"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="w-full h-screen object-cover"
              src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"
              alt="Slide 2"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="w-full h-screen object-cover"
              src="https://static.vecteezy.com/system/resources/thumbnails/024/692/112/small_2x/ai-generated-ai-generative-beautiful-rhododendron-flowers-over-sunset-mountains-field-landscape-graphic-art-photo.jpg"
              alt="Slide 3"
            />
          </CCarouselItem>
        </CCarousel>
        
        {/* Search Bar Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 ">
          <h2 className="text-6xl font-bold text-white mb-4">Land and Farm for Sale</h2>
          <p className="text-lg text-white mb-6">Find your perfect piece of land by searching by location, price, and features.</p>
          <div className="bg-white/90 backdrop-blur-md shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4 rounded-md lg:rounded-full w-full max-w-3xl">
          {/* Search Input */}
          <input
              type="text"
              placeholder="Search keyword"
              className="px-4 py-2 rounded-full border-none focus:outline-none focus:ring-1 bg-white w-full"
            />
            <select className="px-4 py-2 rounded-full border-none focus:outline-none focus:ring-1 bg-white w-full">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Land</option>
            </select>
      {/* Cities Dropdown */}
      <select className="px-4 py-2 rounded-full border-none focus:outline-none focus:ring-1 bg-white/90 w-full md:w-auto">
        <option>All Cities</option>
        <option>New York</option>
        <option>London</option>
        <option>Tokyo</option>
      </select>

      {/* Search Button */}
      <div className="bg-green-500 rounded-full hover:bg-green-600 text-white font-semibold py-2 px-4 w-full md:w-auto">
        Search
      </div>
          </div>
        </div>
      </div>


     
    </>
  );
};

export default Home;
