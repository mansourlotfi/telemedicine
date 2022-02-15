import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBlogPosts } from "_api";

function Index() {
  useEffect(() => {
    getAllBlogPosts().then((data) => console.log("data", data));
  }, []);

  return (
    <>
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: "url(../assets/images/bg/02.jpg)" }}
      >
        <div className="bg-overlay bg-overlay-dark"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title mb-4 text-white title-dark">
                  بلاگ و اخبار
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
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2">
              <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                <img
                  src="../assets/images/blog/01.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="card-body p-4">
                  <ul className="list-unstyled mb-2">
                    <li className="list-inline-item text-muted small me-3">
                      <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                      20 ام اسفند 1400
                    </li>
                  </ul>
                  <Link to="/blogPost" className="text-dark title h5">
                    به راحتی دکتر بیاید و درمان انجام دهید
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2">
              <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                <img
                  src="../assets/images/blog/02.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="card-body p-4">
                  <ul className="list-unstyled mb-2">
                    <li className="list-inline-item text-muted small me-3">
                      <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                      20 ام اسفند 1400
                    </li>
                  </ul>
                  <Link to="/blogPost" className="text-dark title h5">
                    قرنطینه شدن و مراقبت های پزشکی کمتر
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2">
              <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                <img
                  src="../assets/images/blog/03.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="card-body p-4">
                  <ul className="list-unstyled mb-2">
                    <li className="list-inline-item text-muted small me-3">
                      <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                      20 ام اسفند 1400
                    </li>
                  </ul>

                  <Link to="/blogPost" className="text-dark title h5">
                    دوره تحقیقات پزشکی برای پزشکان
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2">
              <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                <img
                  src="../assets/images/blog/04.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="card-body p-4">
                  <ul className="list-unstyled mb-2">
                    <li className="list-inline-item text-muted small me-3">
                      <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                      20 ام اسفند 1400
                    </li>
                  </ul>
                  <Link to="/blogPost" className="text-dark title h5">
                    مقایسه فریزرهای نیتروژن و مکانیکی
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2">
              <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                <img
                  src="../assets/images/blog/05.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="card-body p-4">
                  <ul className="list-unstyled mb-2">
                    <li className="list-inline-item text-muted small me-3">
                      <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                      20 ام اسفند 1400
                    </li>
                  </ul>
                  <Link to="/blogPost" className="text-dark title h5">
                    پوشیدن لباس مناسب بسیار مهم است
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-12">
              <ul className="pagination justify-content-center mb-0 list-unstyled">
                <li className="page-item">
                  <a
                    className="page-link"
                    href="javascript:void(0)"
                    aria-label="Previous"
                  >
                    قبلی
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="javascript:void(0)">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="javascript:void(0)">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="javascript:void(0)">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="javascript:void(0)"
                    aria-label="Next"
                  >
                    بعدی
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
