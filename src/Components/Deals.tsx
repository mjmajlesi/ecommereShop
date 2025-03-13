import React from "react";
import Off from "../../public/images/image-4.svg";
import Image from "next/image";
import DealsTimer from "./DealsTimer";
function Deals() {
  return (
    <div className="flex flex-row-reverse justify-around items-center p-4">
      <div className="w-1/4 border-4 border-[#ECECEC] rounded-2xl">
        <Image src={Off} alt="DealsImage" className="rounded-2xl" />
      </div>
      <div className="w-2/4 flex flex-col items-start justify-center gap-8">
        <h1 className="text-3xl font-semibold">Deals of the mounth</h1>
        <p>
          Incredible discounts on some site goods! Don't miss this incredible
          opportunity! To see discount products to fit the Christmas holidays to
          the link below
        </p>
        <DealsTimer />
        <button className="bg-[#272729] p-2 px-4 text-white rounded-lg">
          more
        </button>
      </div>
    </div>
  );
}

export default Deals;
