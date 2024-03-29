import Banner from "@/Components/Home/Banner";
import Community from "@/Components/Home/Community";
import Designation from "@/Components/Home/Designation";
import Founders from "@/Components/Home/Founders";
import Job from "@/Components/Home/Job";
import LatestRole from "@/Components/Home/LatestRole";
import Mission from "@/Components/Home/Mission";
import MissionSlider from "@/Components/Home/MissionSlider";
import Recruitment from "@/Components/Home/Recruitment";

export default function Home() {
  return (
    <div>
      <Banner />
      <Recruitment />
      <div className="hidden lg:block">
        <Mission />
      </div>
      <div className="lg:hidden">
        <MissionSlider />
      </div>
      <Designation />
      <LatestRole />
      <Job />
      <Founders />
      <Community />
    </div>
  );
}
