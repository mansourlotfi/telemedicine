import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { getDrDates } from "_api";
import { useAppDispatch, useAppSelector } from "_redux/hooks";
import { setDrAvailableDates } from "_redux/slices/DrbookingDateTimeSlice";
import FormHandler from "./formHandler";

function Index() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getDrDates().then((data: AxiosResponse) =>
      dispatch(setDrAvailableDates(data.data))
    );
  }, []);

  return (
    <>
      <section className="bg-half-170 d-table w-100 bg-light">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title mb-4">رزرو نوبت</h3>
                <p className="para-desc mx-auto text-muted">
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
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow rounded overflow-hidden">
                <ul
                  className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link rounded-0 active"
                      id="clinic-booking"
                      data-bs-toggle="pill"
                      href="#pills-clinic"
                      role="tab"
                      aria-controls="pills-clinic"
                      aria-selected="false"
                    >
                      <div className="text-center pt-1 pb-1">
                        <h4 className="title fw-normal mb-0">
                          رزرو نوبت کلینیک
                        </h4>
                      </div>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link rounded-0"
                      id="online-booking"
                      data-bs-toggle="pill"
                      href="#pills-online"
                      role="tab"
                      aria-controls="pills-online"
                      aria-selected="false"
                    >
                      <div className="text-center pt-1 pb-1">
                        <h4 className="title fw-normal mb-0">
                          رزرو آنلاین نوبت{" "}
                        </h4>
                      </div>
                    </a>
                  </li>
                </ul>

                <div className="tab-content p-4" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-clinic"
                    role="tabpanel"
                    aria-labelledby="clinic-booking"
                  >
                    <FormHandler />
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-online"
                    role="tabpanel"
                    aria-labelledby="online-booking"
                  >
                    <FormHandler />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
