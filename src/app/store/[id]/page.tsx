import { Icategory } from "@/Components/Category";
import Image from "next/image";
import React from "react";

interface Iparams {
  params: Promise<{ id: string }>;
  searchParams: Promise<object>;
}

async function page({ params }: Iparams) {
  const { id } = await params;
  const result = await fetch(`http://localhost:3001/products/${id}`);
  if (!result.ok) {
    throw new Error(
      `OH! This not show page because: ${result.status} - ${result.statusText}`
    );
  }
  const data = (await result.json()) as Icategory;

  return (
    <div>
      <div className="bg-gray-500 w-full flex justify-between items-center">
        <div className="w-1/3 flex items-center justify-center py-8">
          <Image src={data.image} alt={data.name} width={200} height={200} />
        </div>
        <div className=" w-2/3 flex flex-col items-start justify-center border-l-4 px-8 border-l-gray-700 ">
          <h2 className="font-semibold text-2xl">{data.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            asperiores, necessitatibus amet tempora veniam sed aperiam tenetur
            cupiditate exercitationem molestias quod harum. Omnis exercitationem
            commodi, repellat quod non quas aspernatur!
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
