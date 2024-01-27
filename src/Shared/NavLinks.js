import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLinks = () => {
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
    <div className="flex flex-col lg:flex-row items-center gap-[34px]">
      {navlinks.map((data, index) => (
        <Link
          className={`${
            pathname === data.path && "text-lemon font-semibold"
          }  nav_link text-offWhite font-light text-[21px] leading-[0.42px]`}
          href={data.path}
        >
          {data.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
