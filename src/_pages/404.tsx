function Error404() {
  return (
    <>
      <div className="back-to-home rounded d-none d-sm-block">
        <a href="index.html" className="btn btn-icon btn-primary">
          <i data-feather="home" className="icons"></i>
        </a>
      </div>

      <section
        className="bg-home d-flex bg-light align-items-center"
        style={{ backgroundImage: "url(../assets/images/bg/bg-lines-one.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <img
                src="../assets/images/svg/error.svg"
                className="img-fluid"
                alt=""
              />
              <h3 className="mb-4"> صفحه یافت نشد </h3>
              <p className="text-muted para-desc mx-auto">
                {" "}
                در مورد همه چیز ، از یادگیری ماشین و پرداخت های جهانی گرفته تا
                مقیاس بندی تیم خود ، کاوش کرده و بیشتر بدانید.{" "}
              </p>
              <a href="index.html" className="btn btn-primary mt-2">
                {" "}
                به خانه برو{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Error404;
