import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header id="topnav" className="defaultscroll sticky">
      <div className="container">
        <Link className="logo" to="index.html">
          <img
            src="../../assets/images/logo-dark.png"
            height="24"
            className="logo-light-mode"
            alt=""
          />
          <img
            src="../.../assets/images/logo-light.png"
            height="24"
            className="logo-dark-mode"
            alt=""
          />
        </Link>

        <div className="menu-extras">
          <div className="menu-item">
            {/* <a className="navbar-toggle" id="isToggle" onClick={"toggleMenu()"}> */}
            <a className="navbar-toggle" id="isToggle">
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <ul className="dropdowns list-inline mb-0">
          <li className="list-inline-item mb-0">
            <a
              href="javascript:void(0)"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <div className="btn btn-icon btn-pills btn-primary">
                <i data-feather="settings" className="fea icon-sm"></i>
              </div>
            </a>
          </li>

          <li className="list-inline-item mb-0 me-1">
            <a
              href="javascript:void(0)"
              className="btn btn-icon btn-pills btn-primary"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <i className="uil uil-search"></i>
            </a>
          </li>

          <li className="list-inline-item mb-0 me-1">
            <div className="dropdown dropdown-primary">
              <button
                type="button"
                className="btn btn-pills btn-soft-primary dropdown-toggle p-0"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="../../assets/images/doctors/01.jpg"
                  className="avatar avatar-ex-small rounded-circle"
                  alt=""
                />
              </button>
              <div
                className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3"
                style={{ minWidth: 200 }}
              >
                <a
                  className="dropdown-item d-flex align-items-center text-dark"
                  href="doctor-profile.html"
                >
                  <img
                    src="../../assets/images/doctors/01.jpg"
                    className="avatar avatar-md-sm rounded-circle border shadow"
                    alt=""
                  />
                  <div className="flex-1 ms-2">
                    <span className="d-block mb-1">کلوین کارلو</span>
                    <small className="text-muted"> ارتوپدی </small>
                  </div>
                </a>
                <a
                  className="dropdown-item text-dark"
                  href="doctor-dashboard.html"
                >
                  <span className="mb-0 d-inline-block me-1">
                    <i className="uil uil-dashboard align-middle h6"></i>
                  </span>
                  داشبرد
                </a>
                <a
                  className="dropdown-item text-dark"
                  href="doctor-profile-setting.html"
                >
                  <span className="mb-0 d-inline-block me-1">
                    <i className="uil uil-setting align-middle h6"></i>
                  </span>
                  تنظیمات پروفایل
                </a>
                <div className="dropdown-divider border-top"></div>
                <a className="dropdown-item text-dark" href="login.html">
                  <span className="mb-0 d-inline-block me-1">
                    <i className="uil uil-sign-out-alt align-middle h6"></i>
                  </span>
                  خروج
                </a>
              </div>
            </div>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu nav-left">
            <li className="has-submenu parent-menu-item">
              <a href="javascript:void(0)">خانه</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="index.html" className="sub-menu-item">
                    خانه یک
                  </a>
                </li>
                <li>
                  <a href="index-two.html" className="sub-menu-item">
                    خانه دو
                  </a>
                </li>
                <li>
                  <a href="index-three.html" className="sub-menu-item">
                    خانه سه
                  </a>
                </li>
              </ul>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">پزشکان</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)" className="menu-item">
                    داشبرد
                  </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="doctor-dashboard.html" className="sub-menu-item">
                        داشبرد
                      </a>
                    </li>
                    <li>
                      <a
                        href="doctor-appointment.html"
                        className="sub-menu-item"
                      >
                        نوبت دهی
                      </a>
                    </li>
                    <li>
                      <a href="patient-list.html" className="sub-menu-item">
                        بیماران
                      </a>
                    </li>
                    <li>
                      <a href="doctor-schedule.html" className="sub-menu-item">
                        زمانبندی برنامه
                      </a>
                    </li>
                    <li>
                      <a href="invoices.html" className="sub-menu-item">
                        فاکتورها
                      </a>
                    </li>
                    <li>
                      <a href="patient-review.html" className="sub-menu-item">
                        نظرات
                      </a>
                    </li>
                    <li>
                      <a href="doctor-messages.html" className="sub-menu-item">
                        پیام ها
                      </a>
                    </li>
                    <li>
                      <a href="doctor-profile.html" className="sub-menu-item">
                        پروفایل
                      </a>
                    </li>
                    <li>
                      <a
                        href="doctor-profile-setting.html"
                        className="sub-menu-item"
                      >
                        تنظیمات پروفایل
                      </a>
                    </li>
                    <li>
                      <a href="doctor-chat.html" className="sub-menu-item">
                        چت
                      </a>
                    </li>
                    <li>
                      <a href="login.html" className="sub-menu-item">
                        ورود
                      </a>
                    </li>
                    <li>
                      <a href="signup.html" className="sub-menu-item">
                        ثبت‌نام
                      </a>
                    </li>
                    <li>
                      <a href="forgot-password.html" className="sub-menu-item">
                        فراموشی رمزعبور
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="doctor-team-one.html" className="sub-menu-item">
                    پزشکان یک
                  </a>
                </li>
                <li>
                  <a href="doctor-team-two.html" className="sub-menu-item">
                    پزشکان دو
                  </a>
                </li>
                <li>
                  <a href="doctor-team-three.html" className="sub-menu-item">
                    پزشکان سه
                  </a>
                </li>
              </ul>
            </li>

            <li className="has-submenu parent-menu-item">
              <a href="javascript:void(0)">بیماران</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="patient-dashboard.html" className="sub-menu-item">
                    داشبرد
                  </a>
                </li>
                <li>
                  <a href="patient-profile.html" className="sub-menu-item">
                    پروفایل
                  </a>
                </li>
                <li>
                  <a href="booking-appointment.html" className="sub-menu-item">
                    رزرو نوبت
                  </a>
                </li>
                <li>
                  <a href="patient-invoice.html" className="sub-menu-item">
                    فاکتور
                  </a>
                </li>
              </ul>
            </li>

            <li className="has-submenu parent-menu-item">
              <a href="javascript:void(0)">داروخانه</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="pharmacy.html" className="sub-menu-item">
                    داروخانه
                  </a>
                </li>
                <li>
                  <a href="pharmacy-shop.html" className="sub-menu-item">
                    فروشگاه
                  </a>
                </li>
                <li>
                  <a
                    href="pharmacy-product-detail.html"
                    className="sub-menu-item"
                  >
                    جزییات دارو
                  </a>
                </li>
                <li>
                  <a href="pharmacy-shop-cart.html" className="sub-menu-item">
                    سبد خرید
                  </a>
                </li>
                <li>
                  <a href="pharmacy-checkout.html" className="sub-menu-item">
                    ادامه خرید
                  </a>
                </li>
                <li>
                  <a href="pharmacy-account.html" className="sub-menu-item">
                    اکانت
                  </a>
                </li>
              </ul>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">صفحات</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="aboutus.html" className="sub-menu-item">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="departments.html" className="sub-menu-item">
                    دپارتمان ها
                  </a>
                </li>
                <li>
                  <a href="faqs.html" className="sub-menu-item">
                    سوالات متدوال
                  </a>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)" className="menu-item">
                    بلاگ
                  </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="blogs.html" className="sub-menu-item">
                        بلاگ
                      </a>
                    </li>
                    <li>
                      <a href="blog-detail.html" className="sub-menu-item">
                        جزییات بلاگ
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="terms.html" className="sub-menu-item">
                    مقررات و سیاست‌ها
                  </a>
                </li>
                <li>
                  <a href="privacy.html" className="sub-menu-item">
                    حفظ حریم شخصی
                  </a>
                </li>
                <li>
                  <a href="error.html" className="sub-menu-item">
                    404 !
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="sub-menu-item">
                    ارتباط با ما
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="../admin/index.html"
                className="sub-menu-item"
                target="_blank"
              >
                ادمین
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
