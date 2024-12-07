import React from "react";

const Banner = () => {
  return (
    <>
      <div className="h-[30vh] w-full bg-white text-[#003C5B] flex flex-col justify-center">
        <div className="flex justify-center font-medium">
          <h2>Signature Global Deluxe DXP</h2>
        </div>
        <div className="flex justify-between px-24 py-1 font-medium text-[#444444]">
          <h2>RERA NO</h2>
          <h2>Project Status</h2>
          <h2>About Project</h2>
          <h2>Land Area</h2>
          <h2>Specification</h2>
        </div>
        <div className="flex justify-between px-28 py-1 font-medium text-[#444444]">
          <h3 className="font-light">Applied</h3>
          <h3 className="font-light">Booking Open</h3>
          <h3 className="font-light">10 Tower/900 Units</h3>
          <h3 className="font-light">17.50 Acres</h3>
          <h3 className="font-light">Fully Loaded</h3>
        </div>
      </div>
    </>
  );
};

export default Banner;
