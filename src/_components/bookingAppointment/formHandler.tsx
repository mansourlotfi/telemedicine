import React from "react";
import { useAppDispatch, useAppSelector } from "_redux/hooks";

function FormHandler() {
  const { drAvailableDates } = useAppSelector((state) => state.DrDates);

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="mb-3">
          <label className="form-label">
            شماره همراه <span className="text-danger">*</span>
          </label>
          <input
            name="phone"
            id="phone"
            type="text"
            className="form-control"
            placeholder="شماره همراه"
          />
        </div>
      </div>

      <div className="col-md-6">
        <div className="mb-3">
          <label className="form-label">
            تاریخ<span className="text-danger">*</span>
          </label>
          <select className="form-control doctor-name select2input">
            {drAvailableDates &&
              drAvailableDates.map((item) => (
                <option value={item.id}>{item.date}</option>
              ))}
          </select>
        </div>
      </div>

      <div className="col-md-6">
        <div className="mb-3">
          <label className="form-label">
            زمان <span className="text-danger">*</span>
          </label>
          <input
            name="time"
            type="text"
            className="form-control timepicker"
            id="input-time"
            placeholder="03:30 PM"
          />
        </div>
      </div>

      <div className="col-lg-12">
        <div className="mb-3">
          <label className="form-label">
            توضیحات<span className="text-danger">*</span>
          </label>
          <textarea
            name="description"
            id="description"
            rows={4}
            className="form-control"
            placeholder="توضیحات"
          ></textarea>
        </div>
      </div>

      <div className="col-lg-12">
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            رزرو نوبت
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormHandler;
