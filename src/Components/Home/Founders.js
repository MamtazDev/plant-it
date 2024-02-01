import React from "react";
import founder from "../../assets/founders.png";

const Founders = () => {
  return (
    <div className="founders lg:text-center px-[30px] pt-[82px] lg:pt-[170px] pb-[90px] lg:pb-[194px]">
      <p className="subtitle   text-offWhite mb-6 lg:mb-[130px]">
        Meet the <span>Founders</span>
      </p>
      <div className="px-[30px] container mx-auto">
        <img
          className="w-[80%] lg:w-auto mx-auto mb-6 lg:mb-[63px]"
          src={founder.src}
          alt=""
        />
        <div>
          <p className="text-mint text-2xl lg:text-[44px] font-fieldworkGeoBold font-semibold mb-[25px] lg:mb-[46px]">
            Elliott Burrows{" "}
            <span className="text-2xl lg:text-[42px] font-normal font-libre italic ">
              and
            </span>{" "}
            Will Laing{" "}
          </p>
          <p className="text-offWhite text-sm lg:text-[20px] font-fieldworkGeoLight font-light max-w-[916px] mx-auto pb-[44px] lg:pb-[87px] leading-[160%]">
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
