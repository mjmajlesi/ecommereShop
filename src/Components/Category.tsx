import React from "react";
import Image from "next/image";

interface Icategory {
    image : string,
    name : string
}

function Category({image , name } : Icategory) {
  return (
    <div className="p-3 bg-[#ececec] flex flex-col justify-center gap-4 items-center rounded-lg">
      <div className="my-4">
        <Image src={image} alt={name} width={110} height={110} className="hover:scale-110 hover:transition-all" />
      </div>
      <div className="w-full mt-6">
        <button className="w-full bg-white font-medium rounded-lg py-5 px-2 cursor-pointer ">{name}</button>
      </div>
    </div>
  );
}

export default Category;
