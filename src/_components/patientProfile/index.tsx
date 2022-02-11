function Index() {
  return (
    <section className="bg-hero">
      <div className="container">
        <div className="row mt-lg-5">
          <div className="col-md-6 col-lg-4">
            <div className="rounded shadow overflow-hidden sticky-bar">
              <div className="card border-0">
                <img
                  src="../assets/images/bg/bg-profile.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
                <img
                  src="../assets/images/client/09.jpg"
                  className="rounded-circle shadow-md avatar avatar-md-md"
                  alt=""
                />
                <h5 className="mt-3 mb-1">کریستوفر بورلر</h5>
                <p className="text-muted mb-0">25 سال</p>
              </div>

              <div className="list-unstyled p-4">
                <div className="progress-box mb-4">
                  <h6 className="title">تکمیل پروفایل کاربری</h6>
                  <div className="progress">
                    <div
                      className="progress-bar position-relative bg-primary"
                      style={{ width: "89%" }}
                    >
                      <div className="progress-value d-block text-muted h6">
                        89%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-user align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">جنسیت</h6>
                  <p className="text-muted mb-0 me-2">زن</p>
                </div>

                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-envelope align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">تاریخ تولد</h6>
                  <p className="text-muted mb-0 me-2">19 مهر 1371</p>
                </div>

                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-book-open align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">شماره تماس</h6>
                  <p className="text-muted mb-0 me-2">+(125) 458-8547</p>
                </div>

                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-italic align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">آدرس</h6>
                  <p className="text-muted mb-0 me-2">سیدنی، استرالیا</p>
                </div>

                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-medical-drip align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">گروه خونی</h6>
                  <p className="text-muted mb-0 me-2">B +</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="card border-0 shadow overflow-hidden">
              <ul
                className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link rounded-0 active"
                    id="overview-tab"
                    data-bs-toggle="pill"
                    href="#pills-overview"
                    role="tab"
                    aria-controls="pills-overview"
                    aria-selected="false"
                  >
                    <div className="text-center pt-1 pb-1">
                      <h4 className="title fw-normal mb-0">پروفایل</h4>
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link rounded-0"
                    id="experience-tab"
                    data-bs-toggle="pill"
                    href="#pills-experience"
                    role="tab"
                    aria-controls="pills-experience"
                    aria-selected="false"
                  >
                    <div className="text-center pt-1 pb-1">
                      <h4 className="title fw-normal mb-0">تنظیمات پروفایل</h4>
                    </div>
                  </a>
                </li>
              </ul>

              <div className="tab-content p-4" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-overview"
                  role="tabpanel"
                  aria-labelledby="overview-tab"
                >
                  <h5 className="mb-0">معرفی:</h5>

                  <p className="text-muted mt-4 mb-0">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد
                  </p>

                  <div className="row">
                    <div className="col-lg-6 col-12 mt-4">
                      <h5>لیست نوبت ها</h5>

                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <i className="ri-heart-pulse-line h3 fw-normal text-primary mb-0"></i>
                        <div className="flex-1 overflow-hidden me-2">
                          <h6 className="mb-0"> قلب و عروق </h6>
                          <p className="text-muted mb-0 text-truncate small">
                            پزشک. کلوین کارلو
                          </p>
                        </div>
                        <span className="mb-0">10 مهر</span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <i className="ri-stethoscope-line h3 fw-normal text-success mb-0"></i>
                        <div className="flex-1 overflow-hidden me-2">
                          <h6 className="mb-0"> چک آپ </h6>
                          <p className="text-muted mb-0 text-truncate small">
                            پزشک. کریستین مورفی
                          </p>
                        </div>
                        <span className="mb-0">12 مهر</span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <i className="ri-virus-line h3 fw-normal text-warning mb-0"></i>
                        <div className="flex-1 overflow-hidden me-2">
                          <h6 className="mb-0"> تست کووید </h6>
                          <p className="text-muted mb-0 text-truncate small">
                            پزشک. آیا ردی
                          </p>
                        </div>
                        <span className="mb-0">13 مهر</span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <i className="ri-dossier-line h3 fw-normal text-secondary mb-0"></i>
                        <div className="flex-1 overflow-hidden me-2">
                          <h6 className="mb-0"> دندانپزشک </h6>
                          <p className="text-muted mb-0 text-truncate small">
                            پزشک. تونی کوار
                          </p>
                        </div>
                        <span className="mb-0">15 مهر</span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <i className="ri-eye-2-line h3 fw-normal text-info mb-0"></i>
                        <div className="flex-1 overflow-hidden me-2">
                          <h6 className="mb-0"> تست بینایی</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            پزشک. جسیکار میکفرنس
                          </p>
                        </div>
                        <span className="mb-0">17 مهر</span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <i className="ri-microscope-line h3 fw-normal text-danger mb-0"></i>
                        <div className="flex-1 overflow-hidden me-2">
                          <h6 className="mb-0"> ارتوپدی </h6>
                          <p className="text-muted mb-0 text-truncate small">
                            پزشک. الیس شرمن
                          </p>
                        </div>
                        <span className="mb-0">18 مهر</span>
                      </div>
                    </div>

                    <div className="col-lg-6 col-12 mt-4">
                      <h5>لیست پرداخت ها</h5>

                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <div className="flex-1 overflow-hidden">
                          <h6 className="flex-1 mb-0"> قلب و عروق </h6>
                          <p className="text-muted mb-0 text-truncate small">
                            کل قبض پرداخت شده
                          </p>
                        </div>
                        <a
                          href="#"
                          className="btn btn-icon btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#view-invoice"
                        >
                          <i className="uil uil-clipboard-notes icons"></i>
                        </a>
                      </div>

                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <div className="flex-1 overflow-hidden">
                          <h6 className="flex-1 mb-0"> چک آپ </h6>
                          <p className="text-muted mb-0 text-truncate small">
                            کل قبض پرداخت شده
                          </p>
                        </div>
                        <a
                          href="#"
                          className="btn btn-icon btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#view-invoice"
                        >
                          <i className="uil uil-clipboard-notes icons"></i>
                        </a>
                      </div>

                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <div className="flex-1 overflow-hidden">
                          <h6 className="flex-1 mb-0"> تست کووید </h6>
                          <p className="text-muted mb-0 text-truncate small">
                            کل قبض پرداخت شده
                          </p>
                        </div>
                        <a
                          href="#"
                          className="btn btn-icon btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#view-invoice"
                        >
                          <i className="uil uil-clipboard-notes icons"></i>
                        </a>
                      </div>

                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <div className="flex-1 overflow-hidden">
                          <h6 className="flex-1 mb-0"> دندانپزشک </h6>
                          <p className="text-muted mb-0 text-truncate small">
                            کل قبض پرداخت شده
                          </p>
                        </div>
                        <a
                          href="#"
                          className="btn btn-icon btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#view-invoice"
                        >
                          <i className="uil uil-clipboard-notes icons"></i>
                        </a>
                      </div>

                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <div className="flex-1 overflow-hidden">
                          <h6 className="flex-1 mb-0"> تست بینایی</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            کل قبض پرداخت شده
                          </p>
                        </div>
                        <a
                          href="#"
                          className="btn btn-icon btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#view-invoice"
                        >
                          <i className="uil uil-clipboard-notes icons"></i>
                        </a>
                      </div>

                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <div className="flex-1 overflow-hidden">
                          <h6 className="flex-1 mb-0"> ارتوپدی </h6>
                          <p className="text-muted mb-0 text-truncate small">
                            کل قبض پرداخت شده
                          </p>
                        </div>
                        <a
                          href="#"
                          className="btn btn-icon btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#view-invoice"
                        >
                          <i className="uil uil-clipboard-notes icons"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-experience"
                  role="tabpanel"
                  aria-labelledby="experience-tab"
                >
                  <h5 className="mb-0"> اطلاعات شخصی: </h5>
                  <div className="row align-items-center mt-4">
                    <div className="col-lg-2 col-md-4">
                      <img
                        src="../assets/images/client/09.jpg"
                        className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
                        alt=""
                      />
                    </div>

                    <div className="col-lg-5 col-md-8 text-center text-md-end mt-4 mt-sm-0">
                      <h6 className=""> عکس خود را بارگذاری کنید </h6>
                      <p className="text-muted mb-0">
                        برای بهترین نتیجه ، از تصویری حداقل 256 پیکسل در 256
                        پیکسل در قالب .jpg یا .png استفاده کنید{" "}
                      </p>
                    </div>

                    <div className="col-lg-5 col-md-12 text-lg-right text-center mt-4 mt-lg-0">
                      <a href="#" className="btn btn-primary">
                        بارگذاری{" "}
                      </a>
                      <a href="#" className="btn btn-soft-primary me-2">
                        حذف{" "}
                      </a>
                    </div>
                  </div>

                  <form className="mt-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label"> نام</label>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="نام"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">نام خانوادگی</label>
                          <input
                            name="name"
                            id="name2"
                            type="text"
                            className="form-control"
                            placeholder="نام خانوادگی :"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">ایمیل شما </label>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="ایمیل شما"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">شماره تماس</label>
                          <input
                            name="number"
                            id="number"
                            type="text"
                            className="form-control"
                            placeholder="شماره تماس :"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">بیوگرافی شما</label>
                          <textarea
                            name="comments"
                            id="comments"
                            rows={4}
                            className="form-control"
                            placeholder="بیوگرافی "
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                          value="ذخیره تغییرات"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
