function Index() {
  return (
    <>
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: "url(../assets/images/bg/ali-back2.jpg)" }}
      >
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h2 className="sub-title text-white">سوالات متداول</h2>
              </div>
              <div className="subcribe-form text-center mt-4">
                <p className="text-white-50 mb-0 para-desc mx-auto mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto perspiciatis natus iure odit sint a odio excepturi
                  error. Deleniti pariatur quod adipisci odit animi iure nemo
                  deserunt esse modi laborum.
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

      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="mb-4">سوالات عمومی</h4>
              <p className="para-desc mx-auto text-muted mb-0">
                پزشکانی عالی، اگر برای خود یا خانواده تان به دنبال یک کمک موثر
                در موارد بیماری و اضطراری یا حتی مشاوره ای ساده نیاز دارید؛
                همینجا باشید
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9 mt-4 pt-2">
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
          </div>
        </div>
      </div>

      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="mb-4">هنوز سوالی دارید؟</h4>
              <p className="para-desc mx-auto text-muted mb-0">
                پزشکانی عالی، اگر برای خود یا خانواده تان به دنبال یک کمک موثر
                در موارد بیماری و اضطراری یا حتی مشاوره ای ساده نیاز دارید؛
                همینجا باشید
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-6 mt-4 pt-2">
                <div className="card border-0 text-center features feature-primary rounded">
                  <div className="icon text-center mx-auto rounded-md">
                    <i className="uil uil-phone h3 mb-0"></i>
                  </div>

                  <div className="card-body p-0 mt-4">
                    <h5>شماره تماس</h5>
                    <p className="text-muted">
                      پزشکانی عالی، اگر برای خود یا خانواده تان به دنبال یک کمک
                      موثر در موارد بیماری و اضطراری یا حتی مشاوره ای ساده نیاز
                      دارید؛ همینجا باشید
                    </p>
                    <a href="tel:02123021764" className="link">
                      02123021764
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4 pt-2">
                <div className="card border-0 text-center features feature-primary rounded">
                  <div className="icon text-center mx-auto rounded-md">
                    <i className="uil uil-envelope h3 mb-0"></i>
                  </div>

                  <div className="card-body p-0 mt-4">
                    <h5>ایمیل</h5>
                    <p className="text-muted">
                      پزشکانی عالی، اگر برای خود یا خانواده تان به دنبال یک کمک
                      موثر در موارد بیماری و اضطراری یا حتی مشاوره ای ساده نیاز
                      دارید؛ همینجا باشید
                    </p>
                    <a href="mailto:dr.alitabibi.ir@gmail.com" className="link">
                      dr.alitabibi.ir@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
