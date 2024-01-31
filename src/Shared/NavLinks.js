import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLinks = ({ setShow }) => {
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
    <div className="flex flex-col lg:flex-row items-end lg:items-center  gap-10 lg:gap-[34px]">
      {navlinks.map((data, index) => (
        <div key={index}>
          <Link
            onClick={() => setShow(false)}
            className={`${
              pathname === data.path ? "text-lemon font-semibold":"text-offWhite font-light"
            } inline-block nav_link  text-[21px] leading-[0.42px]`}
            href={data?.path}
          >
            {data.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
