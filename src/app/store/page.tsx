import Category, { Icategory } from "@/Components/Category";
import Container from "@/Components/Container";
import Swipe from "@/Components/Swipe";
import React from "react";
import { imageBrands } from "../../../lib/image";
import Image from "next/image";

async function Store() {
  const results = await fetch("http://localhost:3001/products");
  const category = (await results.json()) as Icategory[];

  return (
    <div>
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 my-6">
          <Swipe />
          <div className="flex flex-col items-center justify-center my-8">
            <span className="font-semibold text-4xl p-3 mb-4 ">Brands</span>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {imageBrands.map((brand, index) => (
                <div className="transition-all duration-300 hover:scale-110" key={index}>
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    className="w-[140px]"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center my-8">
            <span className="font-semibold text-4xl p-3 mb-4 ">Category</span>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
              {category.map((items) => (
                <Category key={items.id} {...items} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Store;
