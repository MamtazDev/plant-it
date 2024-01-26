import Banner from "@/Components/TeamAndCareers/Banner";
import Teams from "@/Components/TeamAndCareers/Teams";
import React from "react";

const About = () => {
  return (
    <section className="our_team">
      <div className="container mx-auto">
        <Banner />
        <Teams />
      </div>
    </section>
  );
};

export default About;
