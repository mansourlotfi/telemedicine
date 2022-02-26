import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header id="topnav" className="defaultscroll sticky">
      <div className="container">
        <Link className="logo" to="/">
          <img
            src="../../assets/images/drLogo.png"
            height="24"
            className="logo-light-mode"
            alt=""
          />
          <img
            src="../.../assets/images/drLogo.png"
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

        <div id="navigation">
          <ul className="navigation-menu nav-left">
            <li>
              <Link to="/">خانه</Link>
              <span className="menu-arrow"></span>
            </li>

            <li className="has-submenu parent-menu-item">
              <a href="javascript:void(0)">کاربران</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <Link to="/patientProfile" className="sub-menu-item">
                    پروفایل
                  </Link>
                </li>
                <li>
                  <Link to="/bookingAppointment" className="sub-menu-item">
                    رزرو نوبت
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/aboutUs" className="sub-menu-item">
                درباره ما
              </Link>
            </li>

            <li>
              <Link to="/faqs" className="sub-menu-item">
                سوالات متدوال
              </Link>
            </li>

            <li>
              <Link to="/blogs" className="sub-menu-item">
                مقالات آموزشی
              </Link>
            </li>

            <li>
              <Link to="/privacy" className="sub-menu-item">
                حفظ حریم شخصی
              </Link>
            </li>

            <li>
              <Link to="/contactUs" className="sub-menu-item">
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
