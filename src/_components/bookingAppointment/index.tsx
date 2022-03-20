import { AxiosResponse } from "axios";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { getDrDates, getPrice, payment, setReserve } from "_api";
import { useAppDispatch, useAppSelector } from "_redux/hooks";
import { setDrAvailableDates } from "_redux/slices/DrbookingDateTimeSlice";
import FormHandler from "./formHandler";
import * as yup from "yup";
import { generateSetReserveDto } from "_common/mappers/toSetReserveApi";
import { ErrorData, SuccessData } from "_utils/toast";
import FormHandlerOnline from "./formHandlerOnline";

const schema = yup.object({
  phone: yup.number().required(),
  description: yup.string().required(),
  date: yup.string().min(3).required(),
  time: yup.string().min(3).required(),
  type: yup.string().nullable(),
});

const schemaOnline = yup.object({
  phone: yup.number().required(),
  description: yup.string().required(),
  date: yup.string().min(3).required(),
  time: yup.string().min(3).required(),
  type: yup.string().required(),
});

export interface IValues {
  phone: string | null;
  description: string | null;
  date: string | null;
  time: string | null;
  type: string | null;
}
function Index() {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile);
  const [price, setPrice] = useState();

  const [formsIsSubmitting, setFormsIsSubmitting] = useState<boolean>(false);
  const initialValue: IValues = {
    phone: profile.user.phone,
    description: null,
    date: null,
    time: null,
    type: null,
  };
  useEffect(() => {
    getDrDates().then((data: AxiosResponse) =>
      dispatch(setDrAvailableDates(data.data))
    );
    getPrice().then((res: AxiosResponse) => setPrice(res.data));
  }, []);

  const handleSubmit = (values: IValues, { resetForm, setFieldValue }: any) => {
    setFormsIsSubmitting(true);
    setReserve(generateSetReserveDto(values))
      .then((data: AxiosResponse) => {
        if (values.type !== "hozori" && values.type !== null) {
          resetForm();
          SuccessData("نوبت ثبت شد به صفحه پرداخت هدایت می شوید");
          // payment({ reservation: Number(data.data) }).then(
          //   (response: AxiosResponse) => {
          //     let responseHtml = response.data;
          //     var w = window.open("about:blank");
          //     w?.document.open();
          //     w?.document.write(responseHtml);
          //     w?.document.close();
          //   }
          // );

          payment({ reservation: Number(data.data) }).then(
            (response: AxiosResponse) => {
              if (response.status == 200) {
                let url = `https://dr-alitabibi.ir/api/payment.aspx?reservation=${Number(
                  data.data
                )}`;
                window?.open(url, "_blank")?.focus();
              } else {
                ErrorData("مشکلی در ارتباط با سامانه پرداخت وجود دارد");
              }
            }
          );
        } else {
          resetForm();
          SuccessData("نوبت ثبت شد");
        }
      })
      .finally(() => setFormsIsSubmitting(false));
  };

  return (
    <>
      <section
        className="bg-half-170 d-table w-100"
        style={{
          color: "red",
          backgroundImage: "url(../assets/images/bg/about.jpg)",
        }}
      >
        <div className="bg-overlay bg-overlay-dark"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title mb-4" style={{ color: "white" }}>
                  رزرو نوبت
                </h3>
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
                      onSubmit={(values, { resetForm, setFieldValue }) =>
                        handleSubmit(values, { resetForm, setFieldValue })
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
                      validationSchema={schemaOnline}
                      enableReinitialize
                      onSubmit={(values, { resetForm, setFieldValue }) =>
                        handleSubmit(values, { resetForm, setFieldValue })
                      }
                    >
                      {(formikProps) => (
                        <Form>
                          <FormHandlerOnline
                            isLoading={formsIsSubmitting}
                            {...formikProps}
                            price={price}
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
