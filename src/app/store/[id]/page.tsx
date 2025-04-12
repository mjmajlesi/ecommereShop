import { Icategory } from "@/Components/Category";
import Container from "@/Components/Container";
import Image from "next/image";
import React from "react";

interface Iparams {
  params: { id: string };
  searchParams: object;
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
      <Container>
        <div className="w-full flex justify-between items-center">
          <div className="w-1/3 flex items-center justify-center py-8">
            <Image src={data.image} alt={data.name} width={200} height={200} unoptimized />
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
        <div className="flex items-center flex-col justify-center gap-5 my-8 pt-3 border-t-2 border-gray-500 ">
          <h2 className="text-2xl font-semibold">Related Products</h2>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {
              data.prodect.map((items, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-3 hover:scale-110 transition-all duration-300">
                  <Image src={items.image} alt={items.name} width={200} height={200} unoptimized />
                  <div className="">
                    <h2 className="font-semibold">{items.name}</h2>
                    <span className="text-gray-500 text-sm font-light">{items.price}$</span>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </Container>
    </div>
  );
}

export default page;
