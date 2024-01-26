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
    </div>
  );
};

export default About;
