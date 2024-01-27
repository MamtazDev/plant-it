import Community from "@/Components/Home/Community";
import Banner from "@/Components/TeamAndCareers/Banner";
import Grow from "@/Components/TeamAndCareers/Grow";
import Teams from "@/Components/TeamAndCareers/Teams";
import teamBg from "../assets/termsandcareers-banner-img.png";
import React from "react";
import TeamSlider from "@/Components/TeamAndCareers/TeamSlider";

const About = () => {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${teamBg.src})` }}
        className="our_team pt-[198px] lg:pt-[248px] pb-[76px] lg:pb-[185px] px-[30px]"
      >
        <div className="container mx-auto">
          <Banner />

          <div className="hidden lg:block">
            <Teams />
          </div>
          <div className="lg:hidden">
            <TeamSlider />
          </div>
        </div>
      </section>
      <Grow />
      <div style={{ backgroundColor: "rgba(247, 244, 240, 0.60)" }}>
        <Community />
      </div>
    </div>
  );
};

export default About;
