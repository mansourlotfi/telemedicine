import React from "react";

function Index() {
  return (
    <>
      <section className="bg-half-150 d-table w-100 bg-light">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title mb-4">
                  قرنطینه شدن و مراقبت های پزشکی کمتر
                </h3>
                <p className="para-desc mx-auto text-muted">
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
            <div className="col-lg-12 col-lg-11">
              <img
                src="../assets/images/blog/single.jpg"
                className="img-fluid rounded shadow"
                alt=""
              />

              <ul className="list-unstyled mt-4">
                <li className="list-inline-item user text-muted me-2">
                  <i className="mdi mdi-account"></i> کلوین کارلو
                </li>
                <li className="list-inline-item date text-muted">
                  <i className="mdi mdi-calendar-check"></i> 1 بهمن 1400
                </li>
              </ul>

              <p className="text-muted mt-4">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد{" "}
              </p>
              <p className="text-muted">
                با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت
                می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
                شرایط سخت تایپ به پایان رسد{" "}
              </p>
              <p className="text-muted mb-0">
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
