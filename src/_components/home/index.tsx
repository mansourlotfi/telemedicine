import Partners from "./partners";
import Categories from "./categories";
import RoadMap from "./roadMap";
import HowItWork from "./howItWork";
import FindDr from "./findDr";
import Interested from "./interested";
function Index() {
  return (
    <>
      <FindDr />
      <Partners />
      <Categories />
      <HowItWork />
      <RoadMap />
      <Interested/>
    </>
  );
}

export default Index;
