import React from "react";

function About() {
  return (
    <>
      <section
        className="bg-half-170 d-table w-100"
        style={{
          backgroundImage: "url(../assets/images/bg/ali.jpg)",
          backgroundPosition: "unset",
        }}
      >
        <div className="bg-overlay bg-overlay-dark"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title mb-4 text-white title-dark">
                  درباره ما
                </h3>
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
              <div
                className="position-relative"
                style={{
                  backgroundImage: "url(" + "../assets/images/drAli.png" + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  minHeight: 500,
                  boxShadow: "8px 8px 8px 14px white inset",
                }}
              ></div>
            </div>

            <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
              <div className="ms-lg-4">
                <div className="section-title me-lg-5">
                  <span
                    className="badge badge-pill badge-soft-primary"
                    style={{ fontSize: 16 }}
                  >
                    دکتر علی طبیبی
                  </span>
                  <h4 className="title mt-3 mb-4">
                    استاد گروه اورولوژی دانشگاه علوم پزشکی شهید بهشتی
                  </h4>

                  <ul
                    className="para-desc text-muted"
                    style={{ textAlign: "right", listStyle: "none" }}
                  >
                    <li>
                      ۱۳۶۲-۱۳۷۰ دوره پزشکی عمومی دانشگاه علوم پزشکی شهید بهشتی
                    </li>
                    <li>
                      ۱۳۷۳-۱۳۷۸ دستیاری ارولوژی دانشگاه علوم پزشکی شهید بهشتی
                    </li>
                    <li>
                      ۱۳۷۸ تا کنون هیئت علمی ارولوژی دانشگاه علوم پزشکی شهید
                      بهشتی
                    </li>

                    <h6>مشاغل و سمت ها</h6>
                    <li>
                      ۱۳۷۸-۱۳۸۹ معاون آموزشی بخش ارولوژی بیمارستان شهید لبافی
                      نژاد
                    </li>
                    <li>
                      ۱۳۸۹-۱۳۹۶ معاون آموزشی دانشکده پزشکی دانشگاه علوم پزشکی
                      شهید بهشتی
                    </li>
                    <li>
                      ۱۳۹۶-۱۳۹۹ رئیس دانشکده پزشکی دانشگاه علوم پزشکی شهید بهشتی
                    </li>
                    <li>
                      ۱۳۸۰-۱۳۸۳ معاون آموزشی مرکز تحقیقات ارولوژی-نفرولوژی
                      دانشگاه علوم پزشکی شهید بهشتی
                    </li>
                    <li>
                      ۱۳۷۹-۱۳۹۰ طراح سوالات امتحان جامع پیش کارورزی و پذیرش
                      دستیار وزارت بهداشت-درمان و آموزش پزشکی
                    </li>
                    <li>۱۳۸۳ تا کنون داور مجله “Urology Journal”</li>
                    <li>۱۳۷۸ تا کنون عضو مرکز نخبگان ایران</li>
                    <li>
                      ۱۳۸۰ تا کنون عضوهیئت علمی مرکز تحقیقات ارولوژی-نفرولوژی
                      دانشگاه علوم پزشکی شهید بهشتی
                    </li>
                    <li>
                      ۱۳۹۸ تا کنون عضو هيئت برد ارولوژی وزارت بهداشت-درمان و
                      آموزش پزشکی
                    </li>
                    <li>
                      ۱۳۹۸ تا کنون دبیر انجمن اندویورولوژی و یورولاپاراسکوپی
                      ایران
                    </li>
                    <li>
                      ۱۳۹۸ تا کنون نماینده انجمن اندویورولوژی بین المللی در
                      ایران
                    </li>
                    <li>
                      ۱۳۹۹ تا کنون مدیر گروه ارولوژی دانشگاه علوم پزشکی شهید
                      بهشتی
                    </li>
                    <h6>جوایز</h6>
                    <li>
                      رتبه اول امتحانات پره بورد و بورد ارولوژی کشوری ۱۳۷۸
                    </li>
                    <li>
                      انتخاب به عنوان عضو هیئت علمی برگزیده آموزشی در سه دوره
                      جشنواره آموزشی دانشگاه علوم پزشکی شهید بهشتی
                    </li>
                    <li>
                      پژوهشگر برگزیده گروه بالینی در چهاردهمین جشنواره پزشکی
                      رازی
                    </li>
                    <li>
                      پژوهشگر برگزیده در زمینه ارولوژیست جوان در پنجمین جشنواره
                      ابوعلی سینا (مرکز تحقیقات ارولوٓژی-نفرولوژي)
                    </li>
                    <h6>عضویت درمجامع علمی</h6>
                  </ul>
                  <ul
                    className="para-desc text-muted"
                    style={{ textAlign: "left", listStyle: "none" }}
                  >
                    <li>Societe Intenational d, Urology (SIU)</li>
                    <li>
                      Middle East Society of Organ Transplantation (MESOT)
                    </li>
                    <li>European Association of Urology (EAU)</li>
                    <li>Endourology Society (International)</li>
                    <li>Iranian Urological Society </li>
                    <li>Iranian Endourolog and Urolaparascopy Society</li>
                  </ul>
                  <ul
                    className="para-desc text-muted"
                    style={{ textAlign: "right", listStyle: "none" }}
                  >
                    <h6>انتشارات</h6>
                    <li>نویسنده و همکار ۷۲ مقاله انگلیسی بین المللی</li>
                    <li>
                      تالیف فصل اورژانس های ارولوژی در چهار چاپ کتاب جامع
                      ارولوژی ایران (رفرانس امتحانات ارتقاء – پره بورد و بورد
                      تخصصی ارولوژی) و کتاب ارولوژی عمومی (رفرانس امتحانات جامع
                      پیش کارورزی و پذیرش دستیاری)
                    </li>
                  </ul>
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
