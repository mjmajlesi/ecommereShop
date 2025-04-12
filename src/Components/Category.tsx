import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Iprodect {
  id: number;
  image: string;
  name: string;
  price : number;
}

export interface Icategory {
  id: number;
  image: string;
  name: string;
  prodect : Iprodect[];
}

function Category({ image, name , id }: Icategory) {
  return (
    <div className="p-3 bg-[#ececec] flex flex-col justify-center gap-4 items-center rounded-lg">
      <div className="my-4">
        <Image
          src={image}
          alt={name}
          width={110}
          height={110}
          className="hover:scale-110 hover:transition-all"
        />
      </div>
      <div className="w-full mt-6">
        <Link href={`/store/${id}`}>
          <button className="w-full bg-white font-medium rounded-lg py-5 px-2 cursor-pointer ">
            {name}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Category;
