function Index() {
  return (
    <>
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundColor: "url(../assets/images/bg/about.jpg)" }}
      >
        <div className="bg-overlay bg-overlay-dark"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title mb-4 text-white title-dark">
                  درباره ما
                </h3>

                <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                  <ul className="breadcrumb bg-light rounded mb-0 py-1 px-2">
                    <li className="breadcrumb-item">
                      <a href="index.html">داکتریس</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      درباره ما
                    </li>
                  </ul>
                </nav>
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
              <div className="position-relative">
                <img
                  src="../assets/images/about/about-2.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="play-icon">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#watchvideomodal"
                    className="play-btn video-play-icon"
                  >
                    <i className="mdi mdi-play text-primary rounded-circle bg-white title-bg-dark shadow"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
              <div className="ms-lg-4">
                <div className="section-title me-lg-5">
                  <span className="badge badge-pill badge-soft-primary">
                    درباره داکتریس
                  </span>
                  <h4 className="title mt-3 mb-4">
                    با خدمات خوب و بهتر
                    <br /> سلامتی شما توسط متخصصین ما{" "}
                  </h4>

                  <div className="mt-4">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-soft-primary"
                    >
                      {" "}
                      بیشتر بخوانید{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title mb-4 pb-2 text-center">
                <span className="badge badge-pill badge-soft-primary mb-3">
                  دپارتمان ها
                </span>
                <h4 className="title mb-4"> خدمات پزشکی ما </h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card features feature-primary border-0">
                <div className="icon text-center rounded-md">
                  <i className="ri-eye-fill h3 mb-0"></i>
                </div>
                <div className="card-body p-0 mt-3">
                  <a href="#" className="title text-dark h5">
                    {" "}
                    مراقبت از چشم{" "}
                  </a>
                  <p className="text-muted mt-3">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.{" "}
                  </p>
                  <a href="#" className="link">
                    {" "}
                    بیشتر بخوانید{" "}
                    <i className="ri-arrow-right-line align-middle"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card features feature-primary border-0">
                <div className="icon text-center rounded-md">
                  <i className="ri-psychotherapy-fill h3 mb-0"></i>
                </div>
                <div className="card-body p-0 mt-3">
                  <a href="#" className="title text-dark h5">
                    {" "}
                    روان درمانی{" "}
                  </a>
                  <p className="text-muted mt-3">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.{" "}
                  </p>
                  <a href="#" className="link">
                    {" "}
                    بیشتر بخوانید{" "}
                    <i className="ri-arrow-right-line align-middle"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card features feature-primary border-0">
                <div className="icon text-center rounded-md">
                  <i className="ri-stethoscope-fill h3 mb-0"></i>
                </div>
                <div className="card-body p-0 mt-3">
                  <a href="#" className="title text-dark h5">
                    {" "}
                    مراقبت های اولیه{" "}
                  </a>
                  <p className="text-muted mt-3">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.{" "}
                  </p>
                  <a href="#" className="link">
                    {" "}
                    بیشتر بخوانید{" "}
                    <i className="ri-arrow-right-line align-middle"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card features feature-primary border-0">
                <div className="icon text-center rounded-md">
                  <i className="ri-capsule-fill h3 mb-0"></i>
                </div>
                <div className="card-body p-0 mt-3">
                  <a href="#" className="title text-dark h5">
                    {" "}
                    مراقبت از دندان{" "}
                  </a>
                  <p className="text-muted mt-3">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.{" "}
                  </p>
                  <a href="#" className="link">
                    {" "}
                    بیشتر بخوانید{" "}
                    <i className="ri-arrow-right-line align-middle"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card features feature-primary border-0">
                <div className="icon text-center rounded-md">
                  <i className="ri-microscope-fill h3 mb-0"></i>
                </div>
                <div className="card-body p-0 mt-3">
                  <a href="#" className="title text-dark h5">
                    {" "}
                    ارتوپدی{" "}
                  </a>
                  <p className="text-muted mt-3">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.{" "}
                  </p>
                  <a href="#" className="link">
                    {" "}
                    بیشتر بخوانید{" "}
                    <i className="ri-arrow-right-line align-middle"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card features feature-primary border-0">
                <div className="icon text-center rounded-md">
                  <i className="ri-pulse-fill h3 mb-0"></i>
                </div>
                <div className="card-body p-0 mt-3">
                  <a href="#" className="title text-dark h5">
                    {" "}
                    قلب و عروق{" "}
                  </a>
                  <p className="text-muted mt-3">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.{" "}
                  </p>
                  <a href="#" className="link">
                    {" "}
                    بیشتر بخوانید{" "}
                    <i className="ri-arrow-right-line align-middle"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card features feature-primary border-0">
                <div className="icon text-center rounded-md">
                  <i className="ri-empathize-fill h3 mb-0"></i>
                </div>
                <div className="card-body p-0 mt-3">
                  <a href="#" className="title text-dark h5">
                    {" "}
                    زنان{" "}
                  </a>
                  <p className="text-muted mt-3">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.{" "}
                  </p>
                  <a href="#" className="link">
                    {" "}
                    بیشتر بخوانید{" "}
                    <i className="ri-arrow-right-line align-middle"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card features feature-primary border-0">
                <div className="icon text-center rounded-md">
                  <i className="ri-mind-map h3 mb-0"></i>
                </div>
                <div className="card-body p-0 mt-3">
                  <a href="#" className="title text-dark h5">
                    {" "}
                    مغز و اعصاب{" "}
                  </a>
                  <p className="text-muted mt-3">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.{" "}
                  </p>
                  <a href="#" className="link">
                    {" "}
                    بیشتر بخوانید{" "}
                    <i className="ri-arrow-right-line align-middle"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">پزشکان</h4>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img
                    src="../assets/images/doctors/01.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <ul className="list-unstyled team-social mb-0">
                    <li>
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="facebook" className="icons"></i>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="linkedin" className="icons"></i>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="github" className="icons"></i>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="twitter" className="icons"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="#" className="title text-dark h5 d-block mb-0">
                    کلوین کارلو
                  </a>
                  <small className="text-muted speciality">
                    {" "}
                    مراقبت از چشم{" "}
                  </small>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img
                    src="../assets/images/doctors/02.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <ul className="list-unstyled team-social mb-0">
                    <li>
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="facebook" className="icons"></i>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="linkedin" className="icons"></i>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="github" className="icons"></i>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="twitter" className="icons"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="#" className="title text-dark h5 d-block mb-0">
                    کریستسن مورفی
                  </a>
                  <small className="text-muted speciality"> زنان </small>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img
                    src="../assets/images/doctors/03.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <ul className="list-unstyled team-social mb-0">
                    <li>
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="facebook" className="icons"></i>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="linkedin" className="icons"></i>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="github" className="icons"></i>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="twitter" className="icons"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="#" className="title text-dark h5 d-block mb-0">
                    آلیا ادی
                  </a>
                  <small className="text-muted speciality"> روان درمانی </small>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img
                    src="../assets/images/doctors/04.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <ul className="list-unstyled team-social mb-0">
                    <li>
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="facebook" className="icons"></i>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="linkedin" className="icons"></i>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="github" className="icons"></i>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="twitter" className="icons"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="#" className="title text-dark h5 d-block mb-0">
                    تونی کوار
                  </a>
                  <small className="text-muted speciality"> ارتوپدی </small>
                </div>
              </div>
            </div>

            <div className="col-12 mt-4 pt-2 text-center">
              <a href="doctor-team-one.html" className="btn btn-primary">
                بیشتر بدانید
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
