import React from "react";
import { Dcategory } from "../Database/Category";
import Category from "./Category";
import Container from "./Container";
import Link from "next/link";
function Categorys() {
  return (
    <Container>
      <div className="my-20">
        <div className="flex justify-between items-center px-2 mb-5">
          <h1 className="text-3xl font-semibold">Category</h1>
          <Link href={""} className="text-base">Show all</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 lg:grid-cols-3 px-4">
          {Dcategory.map((item) => (
            <Category key={item.id} image={item.image} name={item.name} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Categorys;
