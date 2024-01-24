import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

const Header = () => {
  const navlinks = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Latest Roles",
      path: "/latest-roles",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];
  return (
    <header className="pt-[53px] fixed top-0 left-0 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between gap-4 items-center">
          <Link href="/">
            <img src={logo.src} alt="logo" />
          </Link>

          <div className="flex items-center gap-[34px]">
            {navlinks.map((data, index) => (
              <Link
                className="text-[#F7F4F0] font-light text-[21px] leading-[0.42px]"
                href={data.path}
              >
                {data.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
