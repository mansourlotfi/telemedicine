function Index() {
  return (
    <>
      <section className="bg-half-170 d-table w-100 bg-light">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title mb-4">رزرو نوبت</h3>
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
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow rounded overflow-hidden">
                <ul
                  className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link rounded-0 active"
                      id="clinic-booking"
                      data-bs-toggle="pill"
                      href="#pills-clinic"
                      role="tab"
                      aria-controls="pills-clinic"
                      aria-selected="false"
                    >
                      <div className="text-center pt-1 pb-1">
                        <h4 className="title fw-normal mb-0">
                          رزرو نوبت کلینیک
                        </h4>
                      </div>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link rounded-0"
                      id="online-booking"
                      data-bs-toggle="pill"
                      href="#pills-online"
                      role="tab"
                      aria-controls="pills-online"
                      aria-selected="false"
                    >
                      <div className="text-center pt-1 pb-1">
                        <h4 className="title fw-normal mb-0">
                          رزرو آنلاین نوبت{" "}
                        </h4>
                      </div>
                    </a>
                  </li>
                </ul>

                <div className="tab-content p-4" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-clinic"
                    role="tabpanel"
                    aria-labelledby="clinic-booking"
                  >
                    <form>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              نام بیمار<span className="text-danger">*</span>
                            </label>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-control"
                              placeholder="نام بیمار:"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">دپارتمان ها</label>
                            <select className="form-control department-name select2input">
                              <option value="EY"> مراقبت از چشم </option>
                              <option value="GY"> متخصص زنان </option>
                              <option value="PS"> روان درمانگر </option>
                              <option value="OR"> ارتوپدی </option>
                              <option value="DE"> دندانپزشک </option>
                              <option value="GA"> متخصص گوارش </option>
                              <option value="UR"> اورولوژیست </option>
                              <option value="NE"> متخصص مغز و اعصاب </option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">پزشک</label>
                            <select className="form-control doctor-name select2input">
                              <option value="CA">پزشک. کلوین کارلو</option>
                              <option value="CR">پزشک. کریستین مورفی</option>
                              <option value="AL">پزشک. آیا ردی</option>
                              <option value="TO">پزشک. تونی کوار</option>
                              <option value="JE">پزشک. جسیکار میکفرنس</option>
                              <option value="EL">پزشک. الیس شرمن</option>
                              <option value="BE">پزشک. برتا مارگز</option>
                              <option value="LO">پزشک. لوییس باتای</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              ایمیل شما <span className="text-danger">*</span>
                            </label>
                            <input
                              name="email"
                              id="email"
                              type="email"
                              className="form-control"
                              placeholder="ایمیل شما"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              شماره شما <span className="text-danger">*</span>
                            </label>
                            <input
                              name="phone"
                              id="phone"
                              type="tel"
                              className="form-control"
                              placeholder="شماره شما :"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              نظرات<span className="text-danger">*</span>
                            </label>
                            <textarea
                              name="comments"
                              id="comments"
                              rows={4}
                              className="form-control"
                              placeholder="پیام شما:"
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                              رزرو نوبت
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-online"
                    role="tabpanel"
                    aria-labelledby="online-booking"
                  >
                    <form>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              نام بیمار<span className="text-danger">*</span>
                            </label>
                            <input
                              name="name"
                              id="name2"
                              type="text"
                              className="form-control"
                              placeholder="نام بیمار:"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">دپارتمان ها</label>
                            <select className="form-control department-name select2input">
                              <option value="EY"> مراقبت از چشم </option>
                              <option value="GY"> متخصص زنان </option>
                              <option value="PS"> روان درمانگر </option>
                              <option value="OR"> ارتوپدی </option>
                              <option value="DE"> دندانپزشک </option>
                              <option value="GA"> متخصص گوارش </option>
                              <option value="UR"> اورولوژیست </option>
                              <option value="NE"> متخصص مغز و اعصاب </option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">پزشک</label>
                            <select className="form-control doctor-name select2input">
                              <option value="CA">پزشک. کلوین کارلو</option>
                              <option value="CR">پزشک. کریستین مورفی</option>
                              <option value="AL">پزشک. آیا ردی</option>
                              <option value="TO">پزشک. تونی کوار</option>
                              <option value="JE">پزشک. جسیکار میکفرنس</option>
                              <option value="EL">پزشک. الیس شرمن</option>
                              <option value="BE">پزشک. برتا مارگز</option>
                              <option value="LO">پزشک. لوییس باتای</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              ایمیل شما <span className="text-danger">*</span>
                            </label>
                            <input
                              name="email"
                              id="email2"
                              type="email"
                              className="form-control"
                              placeholder="ایمیل شما"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              شماره شما <span className="text-danger">*</span>
                            </label>
                            <input
                              name="phone"
                              id="phone2"
                              type="tel"
                              className="form-control"
                              placeholder="شماره شما :"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label"> تاریخ: </label>
                            <input
                              name="date"
                              type="text"
                              className="flatpickr flatpickr-input form-control"
                              id="checkin-date"
                              placeholder="1400-12-06"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">زمان : </label>
                            <input
                              name="time"
                              type="text"
                              className="form-control timepicker"
                              id="input-time"
                              placeholder="03:30 PM"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              نظرات<span className="text-danger">*</span>
                            </label>
                            <textarea
                              name="comments"
                              id="comments2"
                              rows={4}
                              className="form-control"
                              placeholder="پیام شما:"
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                              رزرو نوبت
                            </button>
                          </div>
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
    </>
  );
}

export default Index;
