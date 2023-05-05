import React from "react";
import Image from "next/image";
import aboutKevin from "../../../public/images/AboutKevin.svg";
const About = () => {
  return (
    <section className="blue flex-col-center container" id="about">
      <div className="code-image">
        <Image priority src={aboutKevin} fill={true} alt="AboutKevin" />
      </div>
    </section>
  );
};

export default About;
