import React from "react";

const HeroText = () => {
  return (
    <div className="p-5">
      <h3 className=" leading-[1.4] sm:text-base md:text-lg text-sm lg:text-6xl font-bold mb-7">
        Prospective <br /> <span className="text-gray-600">Custumer</span>{" "}
        <br /> segmentation
      </h3>
      <p className="text-lg font-medium text-gray-600 ">
        Depending on customer satisfaction and access to banking products,
        protential target audience can be divided into three groups
      </p>
    </div>
  );
};

export default HeroText;
