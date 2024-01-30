import Link from "next/link";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import hambergur from "../assets/Hamburger.png";
import favIcon from "../assets/favicon.png";
import close from "../assets/close.png";
import instagram from "../assets/insta-h.png";
import linkedin from "../assets/linkedin-h.png";
import medium from "../assets/medium-h.png";
import NavLinks from "./NavLinks";

const Header = () => {
  const [show, setShow] = useState(false);
  const socialMedia = [
    {
      pic: instagram,
      path: "https://www.instagram.com/",
    },
    {
      pic: linkedin,
      path: "https://www.linkedin.com/",
    },
    {
      pic: medium,
      path: "https://medium.com/",
    },
  ];
  return (
    <header
      className={`${show && "backdrop-blur-md"} pt-[53px] absolute w-full `}
    >
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
              <img src={show ? close.src : hambergur.src} alt="" />
            </button>
          </div>
          {show && (
            <div className="p-8 my-4 shadow">
              <NavLinks setShow={setShow} />
              <div className="flex items-center justify-end pt-[66px] gap-[17px] mb-[18px]">
                {socialMedia.map((data, index) => (
                  <div key={index}>
                    <Link target="_blank" href={data.path}>
                      <img
                        className="h-[30px] lg:h-auto"
                        src={data.pic.src}
                        alt=""
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
