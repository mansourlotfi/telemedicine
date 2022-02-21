import React, { useState } from "react";
import { FormikProps } from "formik";
import { IValues } from "./index";
import { CircularProgress } from "@mui/material";
import states from "assets/states";
import cities from "assets/cities";

interface IProps extends FormikProps<IValues> {
  values: IValues;
  isLoading: boolean;
}
const SetProfileFormHandler: React.FC<IProps> = ({
  values,
  errors,
  touched,
  handleChange,
  setFieldValue,
  isLoading,
  handleSubmit,
}) => {
  // const [selectedStateId, setselectedStateId] = useState<number>();
  const handleSelectProvience = (e: any) => {
    setFieldValue("state", e.target.value);
    // setselectedStateId(e.target.value);
  };

  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">نام و نام خانوادگی</label>
            <input
              name="name"
              id="name"
              type="text"
              value={values.name ?? ""}
              className="form-control"
              onChange={handleChange}
              placeholder="نام و نام خانوادگی"
              style={errors.name ? { borderColor: "red" } : {}}
              //   error={touched.requesterName && Boolean(errors.requesterName)}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">شماره تماس</label>
            <input
              name="phone"
              id="phone"
              type="text"
              disabled
              value={values.phone}
              className="form-control"
              placeholder="شماره تماس"
              onChange={handleChange}
              style={errors.phone ? { borderColor: "red" } : {}}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">ایمیل</label>
            <input
              name="email"
              id="email"
              type="text"
              value={values.email || ""}
              className="form-control"
              placeholder="ایمیل"
              onChange={handleChange}
              style={errors.email ? { borderColor: "red" } : {}}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">سن </label>
            <input
              name="age"
              id="age"
              type="text"
              value={values.age || ""}
              className="form-control"
              placeholder=" سن"
              onChange={handleChange}
              style={errors.age ? { borderColor: "red" } : {}}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">گروه خونی </label>
            <input
              name="blood"
              id="blood"
              type="text"
              value={values.blood || ""}
              className="form-control"
              placeholder=" گروه خونی"
              onChange={handleChange}
              style={errors.blood ? { borderColor: "red" } : {}}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">قد </label>
            <input
              name="height"
              id="height"
              type="text"
              value={values.height || ""}
              className="form-control"
              placeholder="قد"
              onChange={handleChange}
              style={errors.height ? { borderColor: "red" } : {}}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">وزن </label>
            <input
              name="weight"
              id="weight"
              type="text"
              value={values.weight || ""}
              className="form-control"
              placeholder="وزن"
              onChange={handleChange}
              style={errors.weight ? { borderColor: "red" } : {}}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">
              استان<span className="text-danger">*</span>
            </label>
            <select
              className="form-control doctor-name select2input"
              onChange={handleSelectProvience}
              style={
                touched.state && errors.state ? { borderColor: "red" } : {}
              }
              value={
                states.find((item) => item.slug === values.state)?.name ?? ""
              }
            >
              {states.map((item: any) => (
                <option key={item.id} value={item.slug}>
                  {item.slug}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">
              شهر<span className="text-danger">*</span>
            </label>
            <select
              className="form-control doctor-name select2input"
              onChange={(e) => setFieldValue("city", e.target.value)}
              disabled={values.state === null ? true : false}
              style={touched.city && errors.city ? { borderColor: "red" } : {}}
              value={
                cities.find((item) => item.slug === values.state)?.name ?? ""
              }
            >
              {/* {cities
                .map((item: any) => {
                  return item.province_id;
                })
                .filter((item) => item.province_id === selectedStateId)
                .map((item) => (
                  <option key={item.id} value={item.slug}>
                    {item.name}
                  </option>
                ))} */}
              {cities.map((item) => (
                <option key={item.id} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">آدرس</label>
            <input
              name="address"
              id="address"
              type="text"
              value={values.address || ""}
              className="form-control"
              onChange={handleChange}
              placeholder="آدرس"
              style={errors.address ? { borderColor: "red" } : {}}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">توضیحات</label>
            <textarea
              name="description"
              id="description"
              rows={4}
              value={values.description || ""}
              className="form-control"
              placeholder="توضیحات "
              onChange={handleChange}
              // style={errors.biography ? { borderColor: "red" } : {}}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <button
            // type="submit"
            id="submit"
            name="send"
            onClick={() => handleSubmit()}
            disabled={isLoading}
            className="btn btn-primary"
          >
            {isLoading ? (
              <CircularProgress color="secondary" size={20} />
            ) : (
              "ذخیره تغییرات"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetProfileFormHandler;
