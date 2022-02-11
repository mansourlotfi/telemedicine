import Partners from "./partners";
import Categories from "./categories";
import RoadMap from "./roadMap";
import HowItWork from "./howItWork";
function Index() {
  return (
    <>
      <section
        className="bg-half-170 pb-0 d-table w-100"
        style={{
          backgroundImage: "url('../assets/images/bg/bg-lines-one.png')",
        }}
      >
        <div className="container">
          <div className="row mt-5 mt-sm-0 align-items-center">
            <div className="col-md-6">
              <div className="heading-title">
                <h4 className="heading mb-3"> بهترین پزشک را پیدا کنید </h4>
                <p className="para-desc text-muted mb-0">
                  {" "}
                  اگر به عضو خانواده خود برای دریافت کمک فوری ، درمان اضطراری یا
                  یک مشاوره ساده نیاز دارید ، پزشکان ما را ببینید.{" "}
                </p>
              </div>
            </div>

            <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <img
                src="../assets/images/hero.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Partners />
      <Categories />
      <RoadMap />
      <HowItWork />
    </>
  );
}

export default Index;
