"use client";
import Link from "next/link";
import { FaDigitalOcean } from "react-icons/fa";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";

function Navbar() {
  const navs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Store",
      href: "/store",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const pathname = usePathname();

  return (
    <div className="py-3 mx-2">
      <Container>
        <div className="flex justify-between items-center py-3 border-[#cacad0] border-b-2">
          <div className="max-md:hidden">
              <FaDigitalOcean size={30} />
          </div>
          <div>
            <ul className="flex items-center gap-4">
              {navs.map((nav) => (
                <li key={nav.name}>
                  <Link
                    href={nav.href}
                    className={`hover:text-gray-500 ${
                      pathname === nav.href && "text-[#b8b8b8]"
                    }`}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="bg-[#272729] text-white px-4 py-2 rounded-md">
              <Link href="/login">Login</Link>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
