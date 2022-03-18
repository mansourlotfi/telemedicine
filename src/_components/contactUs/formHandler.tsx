import { CircularProgress } from "@mui/material";
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
              className="form-control border rounded"
              placeholder="نام"
              onChange={handleChange}
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
              className="form-control border rounded"
              placeholder="ایمیل شما"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">موبایل</label>
            <input
              name="mobile"
              id="mobile"
              className="form-control border rounded"
              placeholder="موبایل"
              onChange={handleChange}
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
              className="form-control border rounded"
              placeholder="پیام شما:"
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
