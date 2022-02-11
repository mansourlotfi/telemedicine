import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-4 mb-0 mb-md-4 pb-0 pb-md-2">
            <a href="#" className="logo-footer">
              <img src="../assets/images/logo-light.png" height="22" alt="" />
            </a>
            <p className="mt-4 me-xl-5">
              پزشکانی عالی، اگر برای خود یا خانواده تان به دنبال یک کمک موثر در
              موارد بیماری و اضطراری یا حتی مشاوره ای ساده نیاز دارید؛ همینجا
              باشید
            </p>
          </div>

          <div className="col-xl-7 col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="text-light footer-head">شرکت</h5>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <a href="aboutus.html" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>درباره ما
                    </a>
                  </li>
                  <li>
                    <a href="departments.html" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>خدمات
                    </a>
                  </li>
                  <li>
                    <a href="doctor-team-two.html" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>تیم
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>پروژه ها
                    </a>
                  </li>
                  <li>
                    <a href="blogs.html" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>بلاگ
                    </a>
                  </li>
                  <li>
                    <a href="login.html" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>ورود
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="text-light title-dark footer-head">
                  دپارتمان ها
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <a href="departments.html" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>مراقبت از چشم
                    </a>
                  </li>
                  <li>
                    <a href="departments.html" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>روان درمانی
                    </a>
                  </li>
                  <li>
                    <a href="departments.html" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>مراقبت از
                      دندان
                    </a>
                  </li>
                  <li>
                    <a href="departments.html" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i> ارتوپدی{" "}
                    </a>
                  </li>
                  <li>
                    <a href="departments.html" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i> قلب و عروق{" "}
                    </a>
                  </li>
                  <li>
                    <a href="departments.html" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i> زنان{" "}
                    </a>
                  </li>
                  <li>
                    <a href="departments.html" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i> مغز و اعصاب{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="text-light footer-head">ارتباط با ما </h5>
                <ul className="list-unstyled footer-list mt-4">
                  <li className="d-flex align-items-center">
                    <i
                      data-feather="mail"
                      className="fea icon-sm text-foot align-middle"
                    ></i>
                    <a
                      href="mailto:contact@example.com"
                      className="text-foot me-2"
                    >
                      contact@example.com
                    </a>
                  </li>

                  <li className="d-flex align-items-center">
                    <i
                      data-feather="phone"
                      className="fea icon-sm text-foot align-middle"
                    ></i>
                    <a href="tel:+152534-468-854" className="text-foot me-2">
                      +152 534-468-854
                    </a>
                  </li>

                  <li className="d-flex align-items-center">
                    <i
                      data-feather="map-pin"
                      className="fea icon-sm text-foot align-middle"
                    ></i>
                    <a
                      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                      className="video-play-icon text-foot me-2"
                    >
                      مشاهده لوکیشن ما
                    </a>
                  </li>
                </ul>

                <ul className="list-unstyled social-icon footer-social mb-0 mt-4">
                  <li className="list-inline-item">
                    <a href="#" className="rounded-pill">
                      <i
                        data-feather="facebook"
                        className="fea icon-sm fea-social"
                      ></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="rounded-pill">
                      <i
                        data-feather="instagram"
                        className="fea icon-sm fea-social"
                      ></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="rounded-pill">
                      <i
                        data-feather="twitter"
                        className="fea icon-sm fea-social"
                      ></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="rounded-pill">
                      <i
                        data-feather="linkedin"
                        className="fea icon-sm fea-social"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="pt-4 footer-bar">
          <div className="row align-items-center">
            <div className="col-sm-12 mt-4 mt-sm-0">
              <ul className="list-unstyled footer-list text-sm-end text-center mb-0">
                <li className="list-inline-item">
                  <Link to="/privacy" className="text-foot me-2">
                    حریم شخصی
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/aboutUs" className="text-foot me-2">
                    درباره ما
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/contactUs" className="text-foot me-2">
                    ارتباط با ما
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
