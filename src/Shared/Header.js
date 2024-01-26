import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();
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
    <header className="pt-[53px] absolute w-full ">
      <div className="container mx-auto">
        <div className="flex justify-between gap-4 items-center">
          <Link href="/">
            <img src={logo.src} alt="logo" />
          </Link>

          <div className="flex items-center gap-[34px]">
            {navlinks.map((data, index) => (
              <Link
                className={`${
                  pathname === data.path && "text-[#EBF2BD] font-semibold"
                }  nav_link text-offWhite font-light text-[21px] leading-[0.42px]`}
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
