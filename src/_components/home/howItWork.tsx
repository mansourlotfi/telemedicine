import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function HowItWork() {
  return (
    <div className="container">
      <div className="row align-items-center" style={{ paddingBottom: 10 }}>
        <Grid container>
          <Grid item container md={6} xs={12} justifyContent="center">
            <div
              className="col-md-6 col-12"
              style={{
                backgroundImage:
                  "url(" + "../assets/images/alitabibi.jpg" + ")",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "100%",
                boxShadow: "8px 8px 8px 14px white inset",
              }}
            ></div>
          </Grid>
          <Grid item md={6} xs={12}>
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
                    چجوری می تونم آنلاین توسط آقای دکتر ویزیت بشم؟
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse border-0 collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-muted">
                    از قسمت رزور نوبت اقدام کنید به تعیین تاریخ و ساعت مدنظرتون
                    و سپس اگر مدارکی از قبیل آزمایش یا تصویربرداری مرتبط با مشکل
                    ارولوژی خود دارید در قسمت مربوطه بارگزاری کنید. در زمان مشخص
                    شده برای شما لینکی پیامک خواهد شد که با کلیک بر روی اون تماس
                    تصویری شما با دکتر طبیبی برقرار میشه و ویزیت خواهید شد. به
                    ویدئو آموزشی ابتدای پیج مراجعه کنید.
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
                    قبلا توسط پزشک دیگری ویزیت شدم و الان نظر آقای دکتر رو
                    میخوام بدونم
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse border-0 collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-muted">
                    از قسمت رزرو نوبت گزینه مشاوره رو انتخاب کنید و سوالتون رو
                    بپرسید. پاسخ سوال به شماره موبایل شما پیامک خواهد شد.
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
                    چجوری می تونم دکتر طبیبی رو حضوری ببینم؟
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse border-0 collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-muted">
                    در صفحه اصلی وب سایت در پایین ترین قسمت صفحه ، راه های ویزیت
                    حضوری ، ساعت و محل اون قرار داده شده است.
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HowItWork;
