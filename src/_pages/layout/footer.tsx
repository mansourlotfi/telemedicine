import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

function Footer() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-4 mb-0 mb-md-4 pb-0 pb-md-2">
            <a href="#" className="logo-footer">
              <img
                src="../assets/images/logo/dr ali tabibi logo.png"
                height="50"
                alt=""
              />
            </a>
          </div>

          <div className="col-xl-7 col-lg-8 col-md-12">
            <div className="row">
              <div
                className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
                style={{ textAlign: "right" }}
              >
                {/* <h5 className="text-light footer-head">وبسایت</h5> */}
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <Link to="/" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i> خانه
                    </Link>
                  </li>
                  <li>
                    <Link to="/patientProfile" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>پروفایل
                    </Link>
                  </li>
                  <li>
                    <Link to="/bookingAppointment" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>رزرو نوبت
                    </Link>
                  </li>
                  <li>
                    <Link to="/aboutUs" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>درباره ما
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
                style={{ textAlign: "right" }}
              >
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <Link to="/faqs" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i> سوالات
                      متداول
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogs" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>مقالات آموزشی
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>حفظ حریم شخصی
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactUs" className="text-foot">
                      <i className="mdi mdi-chevron-left ms-1"></i>ارتباط با ما
                    </Link>
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
                      href="mailto:dr.alitabibi.ir@gmail.com"
                      className="text-foot me-2"
                    >
                      dr.alitabibi.ir@gmail.com
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i
                      data-feather="phone"
                      className="fea icon-sm text-foot align-middle"
                    ></i>
                    {/* <a href="tel:02142603000" className="text-foot me-2">
                      02142603000
                    </a> */}
                    <a href="tel:02188195459" className="text-foot me-2">
                      98-21-8819-5459+
                    </a>
                  </li>
                  {/* <li className="d-flex align-items-center">
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
                  </li> */}
                </ul>

                <ul className="list-unstyled social-icon footer-social mb-0 mt-4">
                  <li className="list-inline-item">
                    <IconButton>
                      <FacebookIcon color="primary" />
                    </IconButton>
                  </li>
                  <li className="list-inline-item">
                    <IconButton>
                      <InstagramIcon color="error" />
                    </IconButton>
                  </li>
                  <li className="list-inline-item">
                    <IconButton>
                      <TwitterIcon color="primary" />
                    </IconButton>
                  </li>
                  <li className="list-inline-item">
                    <IconButton>
                      <LinkedInIcon color="primary" />
                    </IconButton>
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
