function RoadMap() {
  return (
    <section
      className="section"
      style={{ backgroundImage: "url(../assets/images/cta.jpg)" }}
    >
      <div className="bg-overlay" style={{ opacity: 0.3 }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-7 col-md-7 offset-md-5">
            <div className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden">
              <i className="uil uil-briefcase icons h2 mb-0 text-primary"></i>
              <div className="me-3">
                <h5 className="titles">ماموریت ما</h5>
                <p className="text-muted para mb-0">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
              <div className="big-icon">
                <i className="uil uil-briefcase"></i>
              </div>
            </div>

            <div className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden mt-4">
              <i className="uil uil-airplay icons h2 mb-0 text-primary"></i>
              <div className="me-3">
                <h5 className="titles">دید ما</h5>
                <p className="text-muted para mb-0">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
              <div className="big-icon">
                <i className="uil uil-airplay"></i>
              </div>
            </div>

            <div className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden mt-4">
              <i className="uil uil-flip-v icons h2 mb-0 text-primary"></i>
              <div className="me-3">
                <h5 className="titles">ما که هستیم؟</h5>
                <p className="text-muted para mb-0">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
              <div className="big-icon">
                <i className="uil uil-flip-v"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
