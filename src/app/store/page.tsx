import Category, { Icategory } from "@/Components/Category";
import Container from "@/Components/Container";
import React from "react";

async function Store() {
  const results = await fetch("http://localhost:3001/products");
  const category = (await results.json()) as Icategory[];

  return (
    <div>
      <Container>
      <div className="grid grid-cols-4 gap-3">
        {category.map((items) => (
          <Category key={items.id} {...items} />
        ))}
      </div>
      </Container>
    </div>
  );
}

export default Store;
