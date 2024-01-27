import Link from "next/link";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import hambergur from "../assets/Hamburger.png";
import favIcon from "../assets/favicon.png";
import NavLinks from "./NavLinks";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="pt-[53px] absolute w-full ">
      <div className="container mx-auto">
        <div className="hidden lg:flex justify-between gap-4 items-center">
          <Link href="/">
            <img src={logo.src} alt="logo" />
          </Link>
          <NavLinks />
        </div>

        <div className="lg:hidden">
          <div className="flex items-center gap-4 justify-between px-7">
            <Link href="/">
              <img src={favIcon.src} alt="" />
            </Link>

            <button onClick={() => setShow(!show)}>
              <img src={hambergur.src} alt="" />
            </button>
          </div>
          {show && <NavLinks />}
        </div>
      </div>
    </header>
  );
};

export default Header;
