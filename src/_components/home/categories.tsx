import About from "./about";
function Categories() {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="title mb-4">با دسته بندی ها کاوش کنید</h4>
              <p className="text-muted mx-auto para-desc mb-0">
                پزشکانی عالی، اگر برای خود یا خانواده تان به دنبال یک کمک موثر
                در موارد بیماری و اضطراری یا حتی مشاوره ای ساده نیاز دارید؛
                همینجا باشید
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div className="icon text-center rounded-lg">
                <i className="uil uil-user-md h3 mb-0"></i>
              </div>
              <div className="card-body p-0 mt-3">
                <a href="departments.html" className="title text-dark h5">
                  پزشکان
                </a>
                <p className="text-muted mt-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                </p>
                <a href="departments.html" className="link">
                  پیدا کنید <i className="ri-arrow-left-line align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div className="icon text-center rounded-lg">
                <i className="uil uil-capsule h3 mb-0"></i>
              </div>
              <div className="card-body p-0 mt-3">
                <a href="departments.html" className="title text-dark h5">
                  کلینیک ها
                </a>
                <p className="text-muted mt-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                </p>
                <a href="departments.html" className="link">
                  پیدا کنید <i className="ri-arrow-left-line align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div className="icon text-center rounded-lg">
                <i className="uil uil-microscope h3 mb-0"></i>
              </div>
              <div className="card-body p-0 mt-3">
                <a href="departments.html" className="title text-dark h5">
                  آزمایشگاه ها
                </a>
                <p className="text-muted mt-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                </p>
                <a href="departments.html" className="link">
                  پیدا کنید <i className="ri-arrow-left-line align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div className="icon text-center rounded-lg">
                <i className="uil uil-ambulance h3 mb-0"></i>
              </div>
              <div className="card-body p-0 mt-3">
                <a href="departments.html" className="title text-dark h5">
                  اورژانس{" "}
                </a>
                <p className="text-muted mt-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم{" "}
                </p>
                <a href="departments.html" className="link">
                  پیدا کنید <i className="ri-arrow-left-line align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div className="icon text-center rounded-lg">
                <i className="uil uil-shield-plus h3 mb-0"></i>
              </div>
              <div className="card-body p-0 mt-3">
                <a href="departments.html" className="title text-dark h5">
                  بیمه
                </a>
                <p className="text-muted mt-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم{" "}
                </p>
                <a href="departments.html" className="link">
                  پیدا کنید <i className="ri-arrow-left-line align-middle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </section>
  );
}

export default Categories;
