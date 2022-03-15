import React, { useState } from "react";
import { Link } from "react-router-dom";


const style = {
  normal:{
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
    color: "#fff"
  }
}
function Navbar() {

  const [hover, setHover] = useState(false);


  const toggleMenuHandler = ()=>{
    document.getElementById('isToggle')?.classList.toggle('open');
    var isOpen = document.getElementById('navigation')
    if (isOpen?.style.display === "block") {
        isOpen.style.display = "none";
    } else if(isOpen) {
        isOpen.style.display = "block";
    }
  }
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

        <div className="menu-extras" style={{marginLeft:20}}>
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle" onClick={toggleMenuHandler}>
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
            <li>
            <div style={{
              marginTop:25
            }}>
            <Link to="/bookingAppointment"
          
            onMouseEnter={()=>{
              setHover(true);
            
            }}
            onMouseLeave={()=>{
              setHover(false);
            }}
            style={{
              ...style.normal,
              ...(hover ? style.hover : null)
            }}>دریافت نوبت</Link>
                </div>

           
            </li>
          </ul>
        </div>
      </div>
    
    </header>
  );
}

export default Navbar;
