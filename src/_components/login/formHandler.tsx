import { CircularProgress } from "@mui/material";
import { AxiosResponse } from "axios";
import { FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import { getDrTimesByDate } from "_api";
import { useAppDispatch, useAppSelector } from "_redux/hooks";
import { IValues } from "./index";
import moment from "moment-jalaali";

interface IProps extends FormikProps<IValues> {
  values: IValues;
  isLoading: boolean;
}
const FormHandler: React.FC<IProps> = ({
  values,
  errors,
  touched,
  handleChange,
  setFieldValue,
  isLoading,
  handleSubmit,
}) => {
  const [rulesAccepted, setRulesAccepted] = useState(true);

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
                      <div className="mb-3">
                        <label className="form-label">
                          شماره همراه <span className="text-danger">*</span>
                        </label>
                        <input
                          name="phone"
                          id="phone"
                          type="text"
                          value={values.phone ?? ""}
                          onChange={handleChange}
                          className="form-control"
                          disabled={rulesAccepted}
                          placeholder="شماره همراه"
                          style={
                            touched.phone && errors.phone
                              ? { borderColor: "red" }
                              : {}
                          }
                        />{" "}
                      </div>
                    </div>

                    <div className="col-lg-12 mb-0">
                      <div className="d-grid">
                        <button
                          className="btn btn-primary"
                          disabled={rulesAccepted}
                        >
                          ورود / ثبت نام
                        </button>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                        }}
                      >
                        <input
                          className="form-check-input align-middle"
                          type="checkbox"
                          defaultChecked={!rulesAccepted}
                          id="rule-check"
                          onChange={() => setRulesAccepted(!rulesAccepted)}
                        />

                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            قوانین و مقررات
                          </small>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormHandler;
