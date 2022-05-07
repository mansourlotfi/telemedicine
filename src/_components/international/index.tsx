import { Container, Typography } from "@mui/material";
import React from "react";

function InternationalComponent() {
  return (
    <>
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: "url(../assets/images/int.jpg)" }}
      >
        <div className="bg-overlay bg-overlay-dark"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title mb-4 text-white title-dark">
                  {/* title */}
                </h3>
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
      <Container>
        <div style={{ marginTop: 20, direction: "ltr" }}>
          <Typography variant="body1" align="left" style={{ lineHeight: 1.8 }}>
            Patients who are outside Iran with kidney and urinary tract problems
            and want to receive appropriate treatment and consult with a doctor
            can apply for an online appointment via the following email. It is
            worth noting that the doctor's consultation is done online through
            video communication programs. If necessary, the necessary
            coordination will be done for a face-to-face visit and surgery. It
            is possible to pay for a medical examination with a MasterCard or
            Visa card.
            <p>
              <a href="mailto:dr.alitabibi.ir@gmail.com">
                dr.alitabibi.ir@gmail.com
              </a>
            </p>
          </Typography>
        </div>
        <div style={{ direction: "rtl" }}>
          <Typography variant="body1" align="right" style={{ lineHeight: 1.8 }}>
            يمكن للمرضى الذين يعانون من مشاكل في الكلى والمسالك البولية خارج
            إيران ويرغبون في تلقي العلاج المناسب واستشارة الطبيب التقدم للحصول
            على موعد عبر الإنترنت عبر البريد الإلكتروني التالي. وتجدر الإشارة
            إلى أن استشارة الطبيب تتم عبر الإنترنت من خلال برامج الاتصال عبر
            الفيديو. إذا لزم الأمر ، سيتم إجراء التنسيق اللازم للزيارة وجهاً
            لوجه والجراحة. من الممكن دفع تكلفة المراجعة الطبية عن طريق الماستر
            كارد أو الفيزا كارد.
            <p>
              <a href="mailto:dr.alitabibi.ir@gmail.com">
                dr.alitabibi.ir@gmail.com
              </a>
            </p>
          </Typography>
        </div>
      </Container>
    </>
  );
}

export default InternationalComponent;
