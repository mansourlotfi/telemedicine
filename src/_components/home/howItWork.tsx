import React from "react";

function HowItWork() {
  return (
    <div className="container mt-100 mt-60">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <div className="me-lg-5">
            <img
              src="../assets/images/svg/vaccine-development-amico.svg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>

        <div className="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item border rounded">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button border-0 bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  چگونه کار می کند؟
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse border-0 collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-muted">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </div>
              </div>
            </div>

            <div className="accordion-item border rounded mt-2">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button border-0 bg-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  آیا برای استفاده از داکتریس به طراح نیاز دارم؟
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse border-0 collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-muted">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </div>
              </div>
            </div>

            <div className="accordion-item border rounded mt-2">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button border-0 bg-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  برای شروع فروش چه کاری باید انجام دهم؟
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse border-0 collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-muted">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </div>
              </div>
            </div>

            <div className="accordion-item border rounded mt-2">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button border-0 bg-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  با دریافت سفارش چه اتفاقی می افتد؟
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse border-0 collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-muted">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4 pt-2 justify-content-center">
        <div className="col-12 text-center">
          <div className="section-title">
            <h4 className="title mb-4">سوالی دارید؟ تماس بگیرید</h4>
            <p className="text-muted para-desc mx-auto">
              پزشکانی عالی، اگر برای خود یا خانواده تان به دنبال یک کمک موثر در
              موارد بیماری و اضطراری یا حتی مشاوره ای ساده نیاز دارید؛ همینجا
              باشید
            </p>
            <a href="contact.html" className="btn btn-primary mt-4">
              <i className="mdi mdi-phone"></i> ارتباط بگیرید
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
