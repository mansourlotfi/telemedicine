import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "_redux/hooks";
import { signIn, signOut } from "_redux/slices/AuthenticationSlice";
import { setProfile } from "_redux/slices/ProfileSlice";

const style = {
  normal: {
    fontSize: 16,
    letterSpacing: 0,
    color: "#00c3ff",
    fontWeight: 400,
    border: "1px solid #00c3ff",
    borderRadius: 30,
    padding: "10px 25px",
  },
  hover: {
    backgroundColor: "#00c3ff",
    color: "#fff",
  },
};
function Navbar() {
  const [hover, setHover] = useState(false);
  const { isSignedIn } = useAppSelector((state) => state.Authentication);
  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  const toggleMenuHandler = () => {
    document.getElementById("isToggle")?.classList.toggle("open");
    var isOpen = document.getElementById("navigation");
    if (isOpen?.style.display === "block") {
      isOpen.style.display = "none";
    } else if (isOpen) {
      isOpen.style.display = "block";
    }
  };

  const toggleSubMenuHandler = () => {
    if (document.getElementById("navigation")) {
      var elements = document
        ?.getElementById("navigation")
        ?.getElementsByTagName("a");
      if (elements) {
        for (var i = 0, len = elements.length; i < len; i++) {
          elements[i].onclick = function (elem: any) {
            var submenu = elem.target.nextElementSibling?.nextElementSibling;
            submenu.classList.toggle("open");
          };
        }
      }
    }
  };

  const signOutHandler = () => {
    localStorage.removeItem("phone");
    dispatch(signOut());
    return navigate("/login");
  };

  let phone = localStorage.getItem("phone");

  useEffect(() => {
    if (phone?.length === 11) {
      dispatch(signIn());
      dispatch(setProfile({ phone: phone }));
    }
  }, []);

  return (
    <header id="topnav" className="defaultscroll sticky">
      <div className="container">
        <Link className="logo" to="/">
          <img
            src="../../assets/images/logo/dr ali tabibi logo.png"
            height="40"
            className="logo-light-mode"
            alt=""
          />
          <img
            src="../.../assets/images/dr ali tabibi logo.png"
            height="24"
            className="logo-dark-mode"
            alt=""
          />
        </Link>

        <div className="menu-extras" style={{ marginLeft: 20 }}>
          <div className="menu-item">
            <a
              className="navbar-toggle"
              id="isToggle"
              onClick={toggleMenuHandler}
            >
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
            <li onClick={toggleMenuHandler}>
              <Link to="/">خانه</Link>
              <span className="menu-arrow"></span>
            </li>

            {isSignedIn ? (
              <li className="has-submenu parent-menu-item">
                <a href="javascript:void(0)" onClick={toggleSubMenuHandler}>
                  کاربران
                </a>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li onClick={toggleMenuHandler}>
                    <Link to="/patientProfile" className="sub-menu-item">
                      پروفایل
                    </Link>
                  </li>
                  <li onClick={toggleMenuHandler}>
                    <Link to="/bookingAppointment" className="sub-menu-item">
                      رزرو نوبت
                    </Link>
                  </li>
                  <li>
                    <Button
                      style={{
                        font: "inherit",
                        fontSize: 12,
                        color: "black",
                      }}
                      onClick={signOutHandler}
                    >
                      خروج
                    </Button>
                  </li>
                </ul>
              </li>
            ) : (
              <li onClick={toggleMenuHandler}>
                <Link to="/login" className="sub-menu-item">
                  ورود
                </Link>
              </li>
            )}

            <li onClick={toggleMenuHandler}>
              <Link to="/aboutUs" className="sub-menu-item">
                درباره ما
              </Link>
            </li>

            <li onClick={toggleMenuHandler}>
              <Link to="/faqs" className="sub-menu-item">
                سوالات متدوال
              </Link>
            </li>

            <li onClick={toggleMenuHandler}>
              <Link to="/blogs" className="sub-menu-item">
                مقالات آموزشی
              </Link>
            </li>

            <li onClick={toggleMenuHandler}>
              <Link to="/privacy" className="sub-menu-item">
                حفظ حریم شخصی
              </Link>
            </li>

            <li onClick={toggleMenuHandler}>
              <Link to="/contactUs" className="sub-menu-item">
                ارتباط با ما
              </Link>
            </li>
            <li onClick={toggleMenuHandler}>
              <div
                style={{
                  marginTop: 25,
                }}
              >
                <Link
                  to="/bookingAppointment"
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  style={{
                    ...style.normal,
                    ...(hover ? style.hover : null),
                  }}
                >
                  دریافت نوبت
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
