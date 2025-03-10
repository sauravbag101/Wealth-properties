import React from "react";

const BrandData = () => {
  return (
    <>
      {/* Partner Brands Section */}
      <div className="text-[16px] leading-[25px] py-10">
        <div className="flex flex-wrap justify-center items-center bg-white py-10 gap-12">
          {[
            "https://farmlandindia.com/wp-content/uploads/2016/03/partner-04-e1582734649458.jpg",
            "https://farmlandindia.com/wp-content/uploads/2016/03/partner-02-e1582734691936.jpg",
            "https://farmlandindia.com/wp-content/uploads/2016/03/partner-01-e1582734705113.jpg",
            "https://farmlandindia.com/wp-content/uploads/2016/03/partner-05-e1582734603812.jpg",
            "https://farmlandindia.com/wp-content/uploads/2016/03/partner-03-e1582734671602.jpg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Brand ${index + 1}`}
              className="w-40 h-auto"
            />
          ))}
        </div>
      </div>

      {/* Section Heading */}
      <div className="text-center py-20 px-4 ">
        <p className="text-[34px] leading-[1.5em] tracking-tight font-semibold text-black">
          Search Your Land By Type
        </p>
        <p className="mt-4  text-[18px] text-gray-500 max-w-[828px] mx-auto leading-[28px]">
          Let our land purchase advisors help you find the perfect spot for your
          next home. We can offer in-depth insights and assessments of the land
          that meet your needss.
        </p>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-[90%] mx-auto justify-center items-center gap-2">
  {/* 1 */}
  <div className="relative w-full max-w-[274px] h-[495px] group">
    <img
      src="https://farmlandindia.com/wp-content/uploads/2020/04/0057-900x600.jpg"
      alt="Image"
      className="w-full h-full object-cover grayscale-20 transition duration-300 group-hover:grayscale-0 group-hover:opacity-80"
    />
    <div className="absolute inset-0 flex justify-center pt-4 text-white text-xl font-bold">
      Your Text Here
    </div>
  </div>

  {/* 2 */}
  <div>
    <div className="relative w-full max-w-[274px] h-[213px] group">
      <img
        src="https://farmlandindia.com/wp-content/uploads/2020/04/0055-801x600.jpg"
        alt="Image"
        className="w-full h-full object-cover grayscale-20 transition duration-300 group-hover:grayscale-0 group-hover:opacity-80"
      />
      <div className="absolute inset-0 flex justify-center pt-4 text-white text-xl font-bold">
        Your Text Here
      </div>
    </div>

    <div className="relative w-full max-w-[274px] h-[274px] group mt-2">
      <img
        src="https://farmlandindia.com/wp-content/uploads/2020/04/0054-800x600.jpg"
        alt="Image"
        className="w-full h-full object-cover grayscale-20 transition duration-300 group-hover:grayscale-0 group-hover:opacity-80"
      />
      <div className="absolute inset-0 flex justify-center pt-4 text-white text-xl font-bold">
        Your Text Here
      </div>
    </div>
  </div>

  {/* 3 */}
  <div>
    <div className="relative w-full max-w-[274px] h-[274px] group">
      <img
        src="https://farmlandindia.com/wp-content/uploads/2020/04/0053-800x600.jpg"
        alt="Image"
        className="w-full h-full object-cover grayscale-20 transition duration-300 group-hover:grayscale-0 group-hover:opacity-80"
      />
      <div className="absolute inset-0 flex justify-center pt-4 text-white text-xl font-bold">
        Your Text Here
      </div>
    </div>

    <div className="relative w-full max-w-[274px] h-[213px] group mt-2">
      <img
        src="https://farmlandindia.com/wp-content/uploads/2020/04/0052-800x600.jpg"
        alt="Image"
        className="w-full h-full object-cover grayscale-20 transition duration-300 group-hover:grayscale-0 group-hover:opacity-80"
      />
      <div className="absolute inset-0 flex justify-center pt-4 text-white text-xl font-bold">
        Your Text Here
      </div>
    </div>
  </div>

  {/* 4 */}
  <div>
    <div className="relative w-full max-w-[274px] h-[213px] group">
      <img
        src="https://farmlandindia.com/wp-content/uploads/2020/04/0051-901x600.jpg"
        alt="Image"
        className="w-full h-full object-cover grayscale-20 transition duration-300 group-hover:grayscale-0 group-hover:opacity-80"
      />
      <div className="absolute inset-0 flex justify-center pt-4 text-white text-xl font-bold">
        Your Text Here
      </div>
    </div>

    <div className="relative w-full max-w-[274px] h-[274px] group mt-2">
      <img
        src="https://farmlandindia.com/wp-content/uploads/2020/04/0050-900x600.jpg"
        alt="Image"
        className="w-full h-full object-cover grayscale-20 transition duration-300 group-hover:grayscale-0 group-hover:opacity-80"
      />
      <div className="absolute inset-0 flex justify-center pt-4 text-white text-xl font-bold">
        Your Text Here
      </div>
    </div>
  </div>

  {/* 5 */}
  <div className="relative w-full max-w-[274px] h-[495px] group">
    <img
      src="https://farmlandindia.com/wp-content/uploads/2020/04/0059-900x600.jpg"
      alt="Image"
      className="w-full h-full object-cover grayscale-20 transition duration-300 group-hover:grayscale-0 group-hover:opacity-80"
    />
    <div className="absolute inset-0 flex justify-center pt-4 text-white text-xl font-bold">
      Your Text Here
    </div>
  </div>
</div>


      {/* Property Listing Section */}

      {/* Section Heading */}
      <div className="text-center py-30 px-4 ">
        <p className="text-[34px] leading-[1.5em] tracking-tight font-semibold text-black">
          Recently Added Properties for sale
        </p>
        <p className="mt-4  text-[18px] text-gray-500 max-w-[828px] mx-auto leading-[28px]">
          Search land for sale in your local area by price, amenities, or other
          features. We’ll show you the sales history and provide helpful advice.
        </p>
      </div>
    </>
  );
};

export default BrandData;
