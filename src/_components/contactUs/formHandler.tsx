import { CircularProgress, TextField } from "@mui/material";
import { FormikProps } from "formik";
import React from "react";
import { IValues } from "./index";

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
  return (
    <div className="custom-form rounded shadow p-4">
      <h5 className="mb-4">در تماس باشید</h5>
      <p id="error-msg"></p>
      <div id="simple-msg"></div>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              نام شما<span className="text-danger">*</span>
            </label>
            <input
              name="name"
              id="name"
              type="text"
              className="form-control"
              placeholder="نام"
              value={values.name ?? ""}
              onChange={handleChange}
              style={touched.name && errors.name ? { borderColor: "red" } : {}}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              ایمیل شما <span className="text-danger">*</span>
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="form-control"
              placeholder="ایمیل شما"
              onChange={handleChange}
              value={values.email ?? ""}
              style={
                touched.email && errors.email ? { borderColor: "red" } : {}
              }
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              موبایل <span className="text-danger">*</span>
            </label>
            <input
              name="mobile"
              id="mobile"
              className="form-control"
              placeholder="موبایل"
              onChange={handleChange}
              value={values.mobile ?? ""}
              style={
                touched.mobile && errors.mobile ? { borderColor: "red" } : {}
              }
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">
              نظرات<span className="text-danger">*</span>
            </label>
            <textarea
              name="nazar"
              id="nazar"
              rows={4}
              className="form-control"
              placeholder="توضیحات"
              value={values.nazar ?? ""}
              style={
                touched.nazar && errors.nazar ? { borderColor: "red" } : {}
              }
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <button
            name="send"
            type="submit"
            className="btn btn-primary"
            // disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={20} color="secondary" />
            ) : (
              "ارسال پیام"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormHandler;
