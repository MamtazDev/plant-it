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
    <footer className="bg-mint px-[30px] pt-[79px] pb-[90px] lg:pb-[142px]">
      <div className="container mx-auto">
        <div className="flex items-center gap-[34px] mb-[74px]">
          {navlinks.slice(0, 3).map((data, index) => (
            <Link
              className="text-[#132B51] text-sm lg:text-2xl font-normal"
              href={data.path}
            >
              {data.name}
            </Link>
          ))}
        </div>

        <div className="flex  flex-col-reverse lg:flex-row items-end justify-between gap-4">
          <div className="flex w-full items-center  gap-[10px] lg:gap-[27px]">
            <Link href="/">
              <img className="h-[33px]" src={logo.src} alt="" />
            </Link>
            <div className="h-[33px] lg:h-[70px] border-r border-[1.5px] border-deepBlue"></div>
            <p className=" text-base lg:text-[30px] font-normal">
              Recruitment{" "}
              <span className="font-libre italic text-base lg:text-3xl">
                {" "}
                specialists
              </span>{" "}
              <br /> with a{" "}
              <span className="font-libre italic  text-base lg:text-3xl">
                {" "}
                conscience{" "}
              </span>
            </p>
          </div>

          <div className="w-full">
            <div className="flex justify-between lg:items-end w-full lg:flex-col flex-row-reverse">
              <div className="flex items-center gap-[14px] mb-[18px]">
                {navlinks.slice(3, 6).map((data, index) => (
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
              <div className="lg:text-end">
                <Link
                  className="text-sm lg:text-2xl text-[#132B51] font-light mb-1"
                  target="_blank"
                  href="weareplanit.com "
                >
                  weareplanit.com
                </Link>
                <Link
                  className="text-sm lg:text-[22px] text-[#132B51] font-light font-libre italic"
                  target="_blank"
                  href="mailto:info@weareplanit.com"
                >
                  info@weareplanit.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
