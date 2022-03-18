import { AxiosResponse } from "axios";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { getDrDates, payment, setReserve } from "_api";
import { useAppDispatch, useAppSelector } from "_redux/hooks";
import { setDrAvailableDates } from "_redux/slices/DrbookingDateTimeSlice";
import FormHandler from "./formHandler";
import * as yup from "yup";
import { generateSetReserveDto } from "_common/mappers/toSetReserveApi";
import { SuccessData } from "_utils/toast";

const schema = yup.object({
  phone: yup.number().required(),
  description: yup.string().required(),
  date: yup.string().min(3).required(),
  time: yup.string().min(3).required(),
});

export interface IValues {
  phone: string | null;
  description: string | null;
  date: string | null;
  time: string | null;
  type: "hozori";
}
function Index() {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile);

  const [formsIsSubmitting, setFormsIsSubmitting] = useState<boolean>(false);
  const initialValue: IValues = {
    phone: profile.user.phone,
    description: null,
    date: null,
    time: null,
    type: "hozori",
  };
  useEffect(() => {
    getDrDates().then((data: AxiosResponse) =>
      dispatch(setDrAvailableDates(data.data))
    );
  }, []);

  const handleSubmit = (
    values: IValues,
    { resetForm }: any,
    visitType: boolean
  ) => {
    setFormsIsSubmitting(true);
    setReserve(generateSetReserveDto(values, visitType))
      .then((data: AxiosResponse) => {
        resetForm();
        SuccessData("نوبت ثبت شد به صفحه پرداخت هدایت می شوید");
        payment({ reservation: Number(data.data) }).then(
          (response: AxiosResponse) => {
            let responseHtml = response.data;
            var w = window.open("about:blank");
            w?.document.open();
            w?.document.write(responseHtml);
            w?.document.close();
          }
        );
      })
      .finally(() => setFormsIsSubmitting(false));
  };

  return (
    <>
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: "url(../assets/images/bg/department.jpg)" }}
      >
        <div className="bg-overlay bg-overlay-dark"></div>
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
                          رزرو نوبت حضوری
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
                          رزرو نوبت آنلاین
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
                    <Formik
                      initialValues={initialValue}
                      validationSchema={schema}
                      enableReinitialize
                      onSubmit={(values, { resetForm }) =>
                        handleSubmit(values, { resetForm }, false)
                      }
                    >
                      {(formikProps) => (
                        <Form>
                          <FormHandler
                            isLoading={formsIsSubmitting}
                            {...formikProps}
                          />
                        </Form>
                      )}
                    </Formik>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-online"
                    role="tabpanel"
                    aria-labelledby="online-booking"
                  >
                    <Formik
                      initialValues={initialValue}
                      validationSchema={schema}
                      enableReinitialize
                      onSubmit={(values, { resetForm }) =>
                        handleSubmit(values, { resetForm }, true)
                      }
                    >
                      {(formikProps) => (
                        <Form>
                          <FormHandler
                            isLoading={formsIsSubmitting}
                            {...formikProps}
                          />
                        </Form>
                      )}
                    </Formik>
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
