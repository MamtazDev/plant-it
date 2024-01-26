import React from "react";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import medium from "../assets/medium.png";
import logo from "../assets/footer-logo.png";
import Link from "next/link";

const Footer = () => {
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
    <footer className="bg-mint pt-[79px] pb-[142px]">
      <div className="container mx-auto">
        <div className="flex items-center gap-[34px] mb-[74px]">
          {navlinks.slice(0, 3).map((data, index) => (
            <Link
              className="text-[#132B51] text-2xl font-normal"
              href={data.path}
            >
              {data.name}
            </Link>
          ))}
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="flex items-center gap-[27px]">
            <Link href="/">
            <img  src={logo.src} alt="" />
            </Link>
            <div className="h-[70px] border-r border-[1.5px] border-deepBlue"></div>
            <p className=" text-[30px] font-normal">
              Recruitment{" "}
              <span className="font-libre italic  text-3xl"> specialists</span>{" "}
              <br /> with a{" "}
              <span className="font-libre italic  text-3xl"> conscience </span>
            </p>
          </div>

          <div>
            <div className="flex items-center gap-[14px] mb-[18px]">
              {navlinks.slice(3, 6).map((data, index) => (
                <div key={index}>
                  <Link target="_blank" href={data.path}>
                    <img src={data.pic.src} alt="" />
                  </Link>
                </div>
              ))}
            </div>
            <Link
              className="text-2xl text-[#132B51] font-light mb-1"
              target="_blank"
              href="weareplanit.com "
            >
              weareplanit.com
            </Link>
            <Link
              className="text-[22px] text-[#132B51] font-light font-libre italic"
              target="_blank"
              href="mailto:info@weareplanit.com"
            >
              info@weareplanit.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
