import { Button } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player/lazy";

function FindDr() {
  return (
    <section
      className="bg-half-100 pb-0 d-table w-100"
      style={{
        backgroundImage: "url('../assets/images/bg/bg-lines-one.png')",
        marginTop: 120,
      }}
    >
      <div className="container">
        {/* <div className="row mt-5 mt-sm-0 align-items-center"> */}
        <div className="row mt-5 mt-sm-0">
          <div className="col-md-6">
            <div className="heading-title">
              <h3> به وبسایت دکتر طبیبی خوش آمدید </h3>
              <p className="para-desc text-muted mb-0">
                اگر به عضو خانواده خود برای دریافت کمک فوری ، درمان اضطراری یا
                یک مشاوره ساده نیاز دارید ، پزشکان ما را ببینید.
              </p>
            </div>
            <div className="heading-title" style={{ margin: "10px 0" }}>
              <Button style={{ font: "inherit" }}>دریافت رزومه</Button>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "calc(100% - 210px)",
                minHeight: 200,
              }}
            >
              <ReactPlayer
                style={{ position: "absolute", overflow: "hidden" }}
                url="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/cW5lDBG/4k-newspaper-with-breaking-news-titles_nkdoqjjsg__c2eb96bcb8d49557e209f98c6ef43cb6__P360.mp4"
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>

          <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <img src="../assets/images/hero.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindDr;
