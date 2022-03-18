import { Form, Formik } from "formik";
import FormHandler from "./formHandler";
import * as yup from "yup";
import { useState } from "react";
import { SuccessData } from "_utils/toast";
import { AxiosResponse } from "axios";
import { contactUs } from "_api";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  mobile: yup.string().min(10).required(),
  nazar: yup.string().min(3).required(),
});

export interface IValues {
  name: string | null;
  email: string | null;
  mobile: string | null;
  nazar: string | null;
}

const initialValue: IValues = {
  name: null,
  email: null,
  mobile: null,
  nazar: null,
};

function Index() {
  const [formsIsSubmitting, setFormsIsSubmitting] = useState(false);

  const handleSubmit = (values: any, { resetForm }: any) => {
    setFormsIsSubmitting(true);
    contactUs(values)
      .then((data: AxiosResponse) => {
        SuccessData("پیام شما دریافت شد");
      })
      .finally(() => setFormsIsSubmitting(false));
  };

  return (
    <>
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: "url(../assets/images/bg/03.jpg)" }}
      >
        <div className="bg-overlay bg-overlay-dark"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title mb-4 text-white title-dark">
                  ارتباط با ما
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

      <section className="mt-100 mt-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card features feature-primary text-center border-0">
                <div className="icon text-center rounded-md mx-auto">
                  <i className="uil uil-phone h3 mb-0"></i>
                </div>
                <div className="card-body p-0 mt-3">
                  <h5>شماره تماس</h5>
                  <p className="text-muted mt-3">
                    پزشکانی عالی، اگر برای خود یا خانواده تان به دنبال یک کمک
                    موثر در موارد بیماری و اضطراری یا حتی مشاوره ای ساده نیاز
                    دارید؛ همینجا باشید
                  </p>
                  <a href="tel:02123021764" className="link">
                    02123021764
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card features feature-primary text-center border-0">
                <div className="icon text-center rounded-md mx-auto">
                  <i className="uil uil-envelope h3 mb-0"></i>
                </div>
                <div className="card-body p-0 mt-3">
                  <h5>ایمیل</h5>
                  <p className="text-muted mt-3">
                    پزشکانی عالی، اگر برای خود یا خانواده تان به دنبال یک کمک
                    موثر در موارد بیماری و اضطراری یا حتی مشاوره ای ساده نیاز
                    دارید؛ همینجا باشید
                  </p>
                  <a href="mailto:dr.alitabibi.ir@gmail.com" className="link">
                    dr.alitabibi.ir@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <div className="card features feature-primary text-center border-0">
                <div className="icon text-center rounded-md mx-auto">
                  <i className="uil uil-map-marker h3 mb-0"></i>
                </div>
                <div className="card-body p-0 mt-3">
                  <h5>لوکیشن</h5>
                  <p className="text-muted mt-3">
                    یک آدرس فرضی در این محل وجود دارد و میتواند شامل چندین خط
                    باشد یک آدرس فرضی در این محل وجود دارد و میتواند شامل چندین
                    خط باشد
                  </p>
                  <a href="#" className="link">
                    مشاهده لوکیشن ما
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="me-lg-5">
                <img
                  src="../assets/images/about/about-2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
