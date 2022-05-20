import { Button, Grid } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";

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
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <div className="heading-title" style={{ padding: 5 }}>
              <h3 className="headerTitle"> دکتر علی طبیبی متخصص ارولوژی</h3>
              <h5 style={{ padding: 5 }}>(اندویورولوژیست - پیوند کلیه)</h5>
              <ul
                className="ulList"
                style={{ textAlign: "right", lineHeight: 2.5 }}
              >
                <li>جراح و متخصص کلیه مجاری ادراری و تناسلی</li>
                <li>
                  لاپاراسکوپی و درمان های اندوسکوپیک بیماری های کلیه و مجاری
                  ادراری
                </li>
                <li>استاد تمام دانشگاه علوم پزشکی شهید بهشتی</li>
                <li>عضو مرکز نخبگان ایران (1378 تا کنون)</li>
                <li>
                  رئیس دانشکده پزشکی دانشگاه علوم پزشکی شهید بهشتی (1399-1396)
                </li>
                <li>
                  عضو هيئت برد ارولوژی وزارت بهداشت-درمان و آموزش پزشکی (1398 تا
                  کنون)
                </li>
                <li>
                  دبیر انجمن اندویورولوژی و یورولاپاراسکوپی ایران (1398 تا کنون)
                </li>
                <li>
                  نماینده انجمن اندویورولوژی بین المللی در ایران (1398 تا کنون)
                </li>
                <li>
                  مدیر گروه ارولوژی دانشگاه علوم پزشکی شهید بهشتی (1399 تا کنون)
                </li>
                <li>
                  عضو انجمن های بین المللی اروپا ، آسیا و انجمن پیوند خاورمیانه
                </li>
              </ul>
              <Link
                to="/aboutUs"
                className="heading-title"
                style={{ margin: "10px 0" }}
              >
                <Button style={{ font: "inherit" }}>دریافت رزومه</Button>
              </Link>
            </div>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <img
              src="../assets/images/dr tabibi.png"
              className="img-fluid"
              alt=""
            />
          </Grid>
          <Grid item container justifyContent="center">
            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              style={{
                position: "relative",
                width: "100%",
                height: "calc(100% - 210px)",
                minHeight: 200,
              }}
              sx={{ m: 10 }}
            >
              <ReactPlayer
                style={{ position: "absolute", overflow: "hidden" }}
                url="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/cW5lDBG/4k-newspaper-with-breaking-news-titles_nkdoqjjsg__c2eb96bcb8d49557e209f98c6ef43cb6__P360.mp4"
                width="100%"
                height="100%"
                controls
              />
            </Grid>
          </Grid>
          <Grid item xs={6} />
        </Grid>
      </div>
    </section>
  );
}

export default FindDr;
