function About() {
  return (
    <div className="container mt-100 mt-60">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-6">
          <div className="section-title me-lg-5">
            <span className="badge badge-pill badge-soft-primary">
              درباره داکتریس
            </span>
            <h4 className="title mt-3 mb-4">
              {" "}
              خدمات خوب و بهتر
              <br /> سلامتی توسط متخصصین ما{" "}
            </h4>
            <p className="para-desc text-muted">
              پزشکانی عالی، اگر برای خود یا خانواده تان به دنبال یک کمک موثر در
              موارد بیماری و اضطراری یا حتی مشاوره ای ساده نیاز دارید؛ همینجا
              باشید
            </p>
            <p className="para-desc text-muted">
              {" "}
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.{" "}
            </p>
            <div className="mt-4">
              <a href="aboutus.html" className="btn btn-soft-primary">
                {" "}
                بیشتر بخوانید{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
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
                <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
