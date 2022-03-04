import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getBlogPostById } from "_api";
import { IBlogPost } from "_common/models/entities";
import moment from "moment-jalaali";

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
          <section style={{ padding: "0 0 100px 0" }}>
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
                      <i className="mdi mdi-account"></i>
                      <b>{post.title}</b>
                    </li>
                    <li className="list-inline-item date text-muted">
                      <i className="mdi mdi-calendar-check"></i>{" "}
                      {moment(post.date).locale("fa").format("jYYYY-jMM-jD")}
                    </li>
                  </ul>

                  <b>{post.description}</b>
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
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default Index;
