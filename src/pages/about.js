import Community from "@/Components/Home/Community";
import Banner from "@/Components/TeamAndCareers/Banner";
import Grow from "@/Components/TeamAndCareers/Grow";
import Teams from "@/Components/TeamAndCareers/Teams";
import React from "react";

const About = () => {
  return (
    <div>
      <section className="our_team pb-[185px]">
        <div className="container mx-auto">
          <Banner />
          <Teams />
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
