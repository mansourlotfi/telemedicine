function Index() {
  return (
    <>
      <section
        className="bg-half-150 d-table w-100 bg-light"
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
                <h3 className="sub-title mb-4" style={{ color: "white" }}>
                  حفظ حریم شخصی و مقررات
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
          <div className="row justify-content-center">
            <div className="col-lg-9" style={{ textAlign: "right" }}>
              <div className="card shadow rounded border-0">
                <div className="card-body">
                  <ul>
                    <li>
                      شرایط پوشش در هنگام ویزیت آنلاین مشابه ویزیت حضوری با
                      رعایت کامل اصول اخلاق پزشکی می باشد
                    </li>
                    <li>
                      وقت رزرو شده در محدوده اعلام شده است لذا ساعاتی قبل از
                      تماس آنلاین ، حدود زمانی به شما از طریق پیامک همراه با
                      لینک تماس اطلاع داده خواهد شد لذا نیازی به اقدامی پس از
                      رزرو از طرف شما نمی باشد.
                    </li>
                    <li>
                      نسخه نوشته شده با مهر پزشک برای شما ارسال می شود که می
                      توانید با ارائه آن به داروخانه ها دارو را دریافت نمایید.
                      گواهی مبلغ ویزیت دریافت شده نیز از همین طریق قابل ارسال
                      است.
                    </li>
                    <li>
                      همچنین امکان ثبت نسخه الکترونیک نیز وجود دارد و بیماران
                      تحت پوشش بیمه تامین اجتماعی یا بیمه سلامت می توانند با
                      درخواست از پزشک حین ویزیت ، داروهای خود را به صورت بیمه ای
                      مستقیما از داروخانه دریافت کنند.
                    </li>
                    <li>
                      چنانچه اینترنت مطلوبی در دسترس شما نبود به ایمیل وبسایت
                      (dr.alitabibi.ir@gmail.com) اطلاع دهید تا هماهنگی لازم با
                      شما انجام شود.
                    </li>
                    <li>
                      در صورتی که نوبت ها تکمیل باشند ، با توجه به احتمال کنسل
                      شدن برخی نوبت ها ، می توانید 48 ساعت قبل از آن ساعت مورد
                      نظر، مجددا سایت را بررسی نمایید.
                    </li>
                    <li>
                      در صورتی که در زمان ویزیت آنلاین ، حضور نداشته باشید نوبت
                      و هزینه آن قابل عودت و یا انتقال به زمان دیگر نمی باشد.
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

export default Index;
