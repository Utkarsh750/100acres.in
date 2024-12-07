import React from "react";
import { Building, DollarSign, Gift, Phone, MapPin } from "lucide-react";

const Page1 = () => {
  return (
    <>
      <div className="min-h-screen w-full flex overflow-hidden">
        <div className="h-screen w-1/2 bg-white text-black text-[17px] px-20 py-20 relative">
          <h1 className="text-[20px] text-[#003C5B] font-[550]">
            Signature Deluxe DXP - Sector 37D Gurgaon
          </h1>
          <div className="mt-5 leading-[29px] w-full font-medium text-justify">
            Signature Deluxe DXP Sector 37D Gurgaon is an upcoming luxurious
            residential project developed by the most reputed real estate
            developer in India, Signature Global. The project offers extensive
            amenities with marvellous location benefits. Their prime location
            bang on Dwarka Expressway is in Gurgaon, India, which is rapidly
            growing in the upper stages of real estate. The Dwarka Expressway is
            a major arterial road that connects Gurgaon with Delhi.
          </div>
          <div className="mt-4 w-full leading-[29px] text-justify font-medium">
            Signature Deluxe DXP is spread over 17.5 acres of land. Signature
            New Launch Highrise Sector 37D residential projects are very lavish
            and provide you with a great opportunity to live a delightful
            lifestyle. The project aims to provide massive amenities with a
            spacious, comfortable interior as well as a high-quality immoderate
            area.
          </div>
        </div>

        {/* Right div */}
        <div className="h-screen w-1/2 bg-[#111335] grid grid-cols-2 gap-4 px-6 py-10 overflow-y-auto">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <Building className="h-[20px] w-[20px] text-white" />
              <span className="text-white font-semibold">Property Type</span>
            </div>
            <span className="text-white font-normal text-sm pl-6">
              Residential Apartments
            </span>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <MapPin className="h-[20px] w-[20px] text-white" />
              <span className="text-white font-semibold">Location</span>
            </div>
            <span className="text-white font-normal text-sm pl-6">
              Sector 37D, Gurgaon
            </span>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <DollarSign className="h-[20px] w-[20px] text-white" />
              <span className="text-white font-semibold">Highlights</span>
            </div>
            <span className="text-white font-normal text-sm pl-6">
              3 & 4 BHK Flats
            </span>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <Building className="h-[20px] w-[20px] text-white" />
              <span className="text-white font-semibold">Price</span>
            </div>
            <span className="text-white font-normal text-sm pl-6">
              Call for Price
            </span>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <Gift className="h-[20px] w-[20px] text-white" />
              <span className="text-white font-semibold">Unit Type</span>
            </div>
            <span className="text-white font-normal text-sm pl-6">
              1800 - 2800 SQ.FT
            </span>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <Building className="h-[20px] w-[20px] text-white" />
              <span className="text-white font-semibold">Status</span>
            </div>
            <span className="text-white font-normal text-sm pl-6">
              Booking Open
            </span>
          </div>

          <div className="flex items-center gap-2 col-span-2">
            <Phone className="h-[20px] w-[20px] text-white" />
            <h2 className="text-white text-lg">Book A Site Visit</h2>
          </div>

          <div className="flex flex-wrap gap-4 col-span-2">
            <input
              className="bg-white h-[40px] w-[220px] border-none px-3"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-white h-[40px] w-[220px] border-none px-3"
              type="text"
              placeholder="Mobile No"
            />
            <input
              className="bg-white h-[40px] w-[220px] border-none px-3"
              type="text"
              placeholder="Email Id"
            />
            <button className="bg-[#E52C58] text-white h-[40px] w-[220px]">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
