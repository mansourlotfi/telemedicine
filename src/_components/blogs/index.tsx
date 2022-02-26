import { CircularProgress } from "@mui/material";
import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBlogPosts } from "_api";
import { generateBlogPosts } from "_common/mappers/fromBlogPostsApi";
import { useAppDispatch, useAppSelector } from "_redux/hooks";
import { setBlosPosts } from "_redux/slices/BlogSlice";
import moment from "moment-jalaali";

function Index() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.BlogPosts);

  useEffect(() => {
    getAllBlogPosts().then((data: AxiosResponse) =>
      dispatch(setBlosPosts(generateBlogPosts(data).posts))
    );
  }, []);

  return (
    <>
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: "url(../assets/images/bg/02.jpg)" }}
      >
        <div className="bg-overlay bg-overlay-dark"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title mb-4 text-white title-dark">
                  بلاگ و اخبار
                </h3>
                <p className="para-desc mx-auto text-white-50">
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
        {posts ? (
          <div className="container">
            <div className="row">
              {posts.posts.map((item) => (
                <Link
                  to="/blogPost"
                  state={{ from: item.id }}
                  className="text-dark title h5"
                >
                  <div
                    key={item.id}
                    className="col-lg-4 col-md-6 col-12 mb-4 pb-2"
                  >
                    <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                      <img src={item.image} className="img-fluid" alt="" />
                      <div className="card-body p-4">
                        <ul className="list-unstyled mb-2">
                          <li className="list-inline-item text-muted small me-3">
                            <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                            {moment(item.date)
                              .locale("fa")
                              .format("jYYYY-jMM-jD")}
                          </li>
                        </ul>
                        {item.title} this is title from api
                        <div>{item.description}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        )}
      </section>
    </>
  );
}

export default Index;
