import { CircularProgress } from "@mui/material";
import { FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "_redux/hooks";
import { IValues } from "./index";
import { Link } from "react-router-dom";
import RulesModal from "./rulesModal";

interface IProps extends FormikProps<IValues> {
  values: IValues;
  isLoading: boolean;
  step: number;
}
const FormHandler: React.FC<IProps> = ({
  values,
  errors,
  touched,
  handleChange,
  setFieldValue,
  isLoading,
  step,
  handleSubmit,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <section className="d-flex align-items-center">
      <div className="container" style={{ minHeight: "100%", marginTop: 100 }}>
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <img
              src="../assets/images/logo/dr ali tabibi logo.png"
              height="50"
              className="mx-auto d-block"
              alt=""
            />
            <div className="card login-page bg-white shadow mt-4 rounded border-0">
              <div className="card-body">
                <h4 className="text-center">ورود / ثبت نام</h4>
                <div className="login-form mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      {step === 1 ? (
                        <div className="mb-3">
                          <label className="form-label">
                            شماره همراه <span className="text-danger">*</span>
                          </label>
                          <input
                            name="phone"
                            id="phone"
                            type="text"
                            value={values.phone ?? ""}
                            onChange={(e) => {
                              var regEx = /^\d{0,11}$/;
                              if (regEx.test(e.target.value)) {
                                setFieldValue("phone", e.target.value);
                              }
                            }}
                            className="form-control"
                            placeholder="شماره همراه"
                            style={
                              touched.phone && errors.phone
                                ? { borderColor: "red" }
                                : {}
                            }
                          />
                        </div>
                      ) : (
                        <div className="mb-3">
                          <label className="form-label">
                            کد ارسال شده <span className="text-danger">*</span>
                          </label>
                          <input
                            name="smscode"
                            id="smscode"
                            type="text"
                            value={values.smscode ?? ""}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="کد ارسال شده به شماره همراه را وارد نمایید"
                            style={
                              touched.smscode && errors.smscode
                                ? { borderColor: "red" }
                                : {}
                            }
                          />
                        </div>
                      )}
                    </div>

                    <div className="col-lg-12 mb-0">
                      <div className="d-grid">
                        <button className="btn btn-primary">
                          {isLoading ? (
                            <CircularProgress color="secondary" size={20} />
                          ) : (
                            <span>
                              {step === 1 ? "دریافت کد" : "ورود / ثبت نام"}
                            </span>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: 20,
                          }}
                        >
                          <input
                            className="form-check-input align-middle"
                            type="checkbox"
                            defaultChecked={values.rulesAccepted}
                            id="rule-check"
                            onChange={() =>
                              setFieldValue(
                                "rulesAccepted",
                                !values.rulesAccepted
                              )
                            }
                          />
                          <p
                            className="mb-0 mt-2"
                            onClick={() => setOpen(true)}
                            style={{ cursor: "pointer" }}
                          >
                            <small className="text-dark me-2">
                              قوانین و مقررات
                            </small>
                          </p>
                        </div>
                        <Link to="/privacy">
                          <p className="mb-0 mt-4">
                            <small className="text-dark me-2">حریم خصوصی</small>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RulesModal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
      />
    </section>
  );
};

export default FormHandler;
