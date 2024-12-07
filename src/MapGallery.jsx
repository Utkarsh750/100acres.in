import React from "react";

const Page3 = () => {
  return (
    <>
      <div className="h-[70vh] w-full flex">
        <div className="w-1/2 bg-white text-[#003C5B] pl-8 pt-5 flex gap-8">
          <div className="pt-7 mt-20 w-1/3 flex flex-col text-lg font-semibold leading-7 pr-2">
            <p>
              Well-connected to NH-8, Dwarka Expressway, Golf Course Road and
              Badshapur via Southeren Peripheral Road
            </p>
          </div>
          <div className="pt-7 mt-20 w-1/3 flex flex-col text-lg font-semibold leading-7 pr-2">
            <p>
              20 km drive from HUDA City Centre metro station
              <br />
              <span>Rajiv Chowk</span>
            </p>
          </div>
          <div className="pt-7 mt-20 w-1/3 flex flex-col text-lg font-semibold leading-7 pr-2">
            <p>25 km drive from Indira Gandhi International Airport</p>
          </div>
        </div>

        <div className="w-1/2 overflow-hidden">
          <img
            src="https://www.signatureprojects.co.in/signature-deluxe-dxp/assets/images/plans/location.webp"
            alt=""
            className="h-[405px] w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Page3;
