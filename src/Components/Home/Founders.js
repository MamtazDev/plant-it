import React from "react";
import founder from "../../assets/founders.png";

const Founders = () => {
  return (
    <div className="founders text-center pt-[170px] pb-[194px]">
      <div className="container mx-auto">
        <p className="subtitle  text-[#F7F4F0] mb-[130px]">
          Meet the <span>Founders</span>
        </p>
        <img className="mx-auto mb-[63px]" src={founder.src} alt="" />
        <div>
          <p className="text-[#B2DBBA] text-[44px] font-semibold ">
            Elliott Burrows{" "}
            <span className="text-[42px] font-normal font-libre italic ">
              and
            </span>{" "}
            Will Laing{" "}
          </p>
          <p className="text-[#F7F4F0] text-[20px] font-light max-w-[916px] mx-auto pb-[87px]">
            Lorem ipsum dolor sit amet consectetur. Ipsum morbi netus rhoncus
            parturient consectetur. Sed adipiscing mi mauris at blandit. Non
            libero sit ultrices sed. Sollicitudin eget massa nascetur egestas
            ultrices et purus risus morbi. Et turpis neque habitant lacus cursus
            fringilla neque. Vel eu tempor blandit etiam turpis purus integer et
            vitae. <br /> <br />
            Sapien ligula euismod dolor turpis id. Lectus orci eget ornare
            ullamcorper mi eget nisl at. Morbi leo sem adipiscing pellentesque
            tincidunt egestas eu. A eget blandit dis sed nullam vitae mauris
            duis massa. Elit eget ac at arcu rhoncus mauris nisl. Ullamcorper
            odio mattis pharetra id pellentesque vitae luctus porta. Tristique
            egestas donec sit pellentesque proin mauris aliquam. Ullamcorper
            sodales orci ultrices sit gravida in molestie at velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
