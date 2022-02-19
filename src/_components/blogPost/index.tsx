import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getBlogPostById } from "_api";
import { IBlogPost } from "_common/models/entities";

function Index() {
  const location = useLocation();
  const { from }: any = location.state;
  const [post, setpost] = useState<IBlogPost | null>(null);

  useEffect(() => {
    getBlogPostById({ id: from }).then((data) => setpost(data.data[0]));
  }, []);

  return (
    <div>
      {post ? (
        <>
          <section className="bg-half-150 d-table w-100 bg-light">
            <div className="container">
              <div className="row mt-5 justify-content-center">
                <div className="col-12">
                  <div className="section-title text-center">
                    <h3 className="sub-title mb-4">{post?.title}</h3>
                    <p className="para-desc mx-auto text-muted">
                      پزشکانی عالی، اگر برای خود یا خانواده تان به دنبال یک کمک
                      موثر در موارد بیماری و اضطراری یا حتی مشاوره ای ساده نیاز
                      دارید؛ همینجا باشید
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
              <div className="row">
                <div className="col-lg-12 col-lg-11">
                  <img
                    src={post.image}
                    className="img-fluid rounded shadow"
                    alt=""
                  />

                  <ul className="list-unstyled mt-4">
                    <li className="list-inline-item user text-muted me-2">
                      <i className="mdi mdi-account"></i> {post.title}
                    </li>
                    <li className="list-inline-item date text-muted">
                      <i className="mdi mdi-calendar-check"></i> {post.date}
                    </li>
                  </ul>

                  <p className="text-muted mt-4">{post.description}</p>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            minHeight: "calc(100vh - 380px)",
            alignItems: "center",
          }}
        >
          <CircularProgress color="secondary" size={20} />
        </div>
      )}
    </div>
  );
}

export default Index;
