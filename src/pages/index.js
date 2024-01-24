import Banner from "@/Components/Home/Banner";
import Community from "@/Components/Home/Community";
import Designation from "@/Components/Home/Designation";
import Founders from "@/Components/Home/Founders";
import LatestRole from "@/Components/Home/LatestRole";
import Mission from "@/Components/Home/Mission";
import Recruitment from "@/Components/Home/Recruitment";
import Footer from "@/Shared/Footer";
import Header from "@/Shared/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Recruitment />
      <Mission />
      <Designation />
      <LatestRole />
      <Founders />
      <Community />
      <Footer />
    </div>
  );
}
