import React from "react";
import header from "../../public/images/header.jpg";
import Container from "./Container";

function Header() {
  return (
    <div className="w-full my-6">
      <Container>
        <div
          className="bg-cover bg-center h-96 bg-no-repeat rounded-3xl"
          style={{ backgroundImage: `url(${header.src})` }}
        >
            <div className="flex flex-col justify-center items-start gap-2 mx-8 w-2/5 h-full text-[#272729]">
                <h1 className="text-4xl font-bold">
                    The joy of discovering new technologies
                </h1>
                <p className="text-lg mt-4 font-normal">
                    Explore a world of Cutting-Edge Technologies <br /> and Discover the Future Today!
                </p>
                <button className="bg-[#272729] text-white px-4 py-3 mt-4 rounded-md">
                    Learn More
                </button>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
