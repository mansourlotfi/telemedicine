import { Link } from "react-router-dom";

function RoadMap() {
  return (
    <section
      className="section roudMap"
      style={{
        backgroundImage: "url(../assets/images/drtabib4.jpg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundColor: "#cee1e8",
      }}
    >
      <div className="bg-overlay" style={{ opacity: 0.3 }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-7 col-md-7 offset-md-5">
            <Link
              to="#"
              className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden"
            >
              <i className="uil uil-briefcase icons h2 mb-0 text-primary"></i>
              <div className="me-3">
                <h5 className="titles">سوال از متخصص ارولوژی</h5>
                <p className="text-muted para mb-0">
                  براي مشاهده سوالات متداول در زمینه ارولوژی می توانید از قسمت
                  سوالات متداول از یکی از بهترین ارولوژیست های کشور بازدید
                  فرمایید
                </p>
              </div>
              <div className="big-icon">
                <i className="uil uil-briefcase"></i>
              </div>
            </Link>

            <Link
              to="#"
              className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden mt-4"
            >
              <i className="uil uil-airplay icons h2 mb-0 text-primary"></i>
              <div className="me-3">
                <h5 className="titles">ویزیت آنلاین ارولوژی</h5>
                <p className="text-muted para mb-0">
                  شما میتوانید به صورت آنلاین و در هرکجایی که هستید توسط پزشک
                  متخصص ارولوژی ویزیت شوید و نسخه خود یا نوبت جراحی را دریافت
                  نمایید.
                </p>
              </div>
              <div className="big-icon">
                <i className="uil uil-airplay"></i>
              </div>
            </Link>

            <Link
              to="#"
              className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden mt-4"
            >
              <i className="uil uil-flip-v icons h2 mb-0 text-primary"></i>
              <div className="me-3">
                <h5 className="titles">دکتر علی طبیبی</h5>
                <p className="text-muted para mb-0">
                  دکتر علی طبیبی متخصص ارولوژی و هیئت علمی دانشگاه علوم پزشکی
                  شهید بهشتی و متخصص فعال در بیمارستان شهید لبافی نژاد(قطب
                  ارولوژی ایران)
                </p>
              </div>
              <div className="big-icon">
                <i className="uil uil-flip-v"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
