import React from "react";

function About() {
  return (
    <>
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: "url(../assets/images/bg/about.jpg)" }}
      >
        <div className="bg-overlay bg-overlay-dark"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title mb-4 text-white title-dark">
                  درباره ما
                </h3>
                <p className="para-desc mx-auto text-white-50">
                  پزشکانی عالی، اگر برای خود یا خانواده تان به دنبال یک کمک موثر
                  در موارد بیماری و اضطراری یا حتی مشاوره ای ساده نیاز دارید؛
                  همینجا باشید
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="position-relative">
                <img
                  src="../assets/images/about/about-2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
              <div className="ms-lg-4">
                <div className="section-title me-lg-5">
                  <span className="badge badge-pill badge-soft-primary">
                    درباره داکتریس
                  </span>
                  <h4 className="title mt-3 mb-4">
                    با خدمات خوب و بهتر
                    <br /> سلامتی شما توسط متخصصین ما{" "}
                  </h4>
                  <p className="para-desc text-muted">
                    پزشکانی عالی، اگر برای خود یا خانواده تان به دنبال یک کمک
                    موثر در موارد بیماری و اضطراری یا حتی مشاوره ای ساده نیاز
                    دارید؛ همینجا باشید
                  </p>
                  <p className="para-desc text-muted">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
