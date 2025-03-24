import React from "react";
import Category, { Icategory } from "./Category";
import Container from "./Container";
import Link from "next/link";

async function Categorys() {

  const cfetch = await fetch("http://localhost:3001/products")
  const category = await cfetch.json() as Icategory[];
  const idforhome = [1 , 2 , 3 , 4 , 7 , 6];

  return (
    <Container>
      <div className="my-20">
        <div className="flex justify-between items-center px-2 mb-5">
          <h1 className="text-3xl font-semibold">Category</h1>
          <Link href={""} className="text-base">Show all</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 lg:grid-cols-3 px-4 mt-12">
          {category.map((item) => (
            idforhome.find(id => id == item.id) &&
            <Category key={item.id} {...item}  />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Categorys;
