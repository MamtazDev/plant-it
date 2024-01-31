import Image from "next/image";
import compnayimg2 from "../../assets/birdie.png";
import compnayimg3 from "../../assets/dhl.png";
import compnayimg6 from "../../assets/inflow.png";
import compnayimg4 from "../../assets/laka.png";
import compnayimg1 from "../../assets/pvo.png";
import compnayimg5 from "../../assets/wagastream.png";

const ServiceMarquee = () => {
  return (
    <div className="flex items-center justify-between gap-16">
      <div className="company_item">
        <Image
          className="h-[17px] lg:h-auto"
          src={compnayimg1}
          alt="compnay_img"
        />
      </div>
      <div className="company_item">
        <Image
          className="h-[17px] lg:h-auto"
          src={compnayimg2}
          alt="compnay_img"
        />
      </div>
      <div className="company_item">
        <Image
          className="h-[17px] lg:h-auto"
          src={compnayimg3}
          alt="compnay_img"
        />
      </div>
      <div className="company_item">
        <Image
          className="h-[17px] lg:h-auto"
          src={compnayimg4}
          alt="compnay_img"
        />
      </div>
      <div className="company_item">
        <Image
          className="h-[17px] lg:h-auto"
          src={compnayimg5}
          alt="compnay_img"
        />
      </div>
      <div className="company_item">
        <Image
          className="h-[17px] lg:h-auto"
          src={compnayimg6}
          alt="compnay_img"
        />
      </div>
    </div>
  );
};

export default ServiceMarquee;
