import React from "react";
import { useAppDispatch, useAppSelector } from "_redux/hooks";

function FormHandler() {
  const { drAvailableDates } = useAppSelector((state) => state.DrDates);

  return (
    <form>
      <div className="row">
        <div className="col-lg-12">
          <div className="mb-3">
            <label className="form-label">
              نام بیمار<span className="text-danger">*</span>
            </label>
            <input
              name="name"
              id="name2"
              type="text"
              className="form-control"
              placeholder="نام بیمار:"
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
              ایمیل شما <span className="text-danger">*</span>
            </label>
            <input
              name="email"
              id="email2"
              type="email"
              className="form-control"
              placeholder="ایمیل شما"
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              شماره شما <span className="text-danger">*</span>
            </label>
            <input
              name="phone"
              id="phone2"
              type="tel"
              className="form-control"
              placeholder="شماره شما :"
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label"> تاریخ: </label>
            <input
              name="date"
              type="text"
              className="flatpickr flatpickr-input form-control"
              id="checkin-date"
              placeholder="1400-12-06"
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">زمان : </label>
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
              نظرات<span className="text-danger">*</span>
            </label>
            <textarea
              name="comments"
              id="comments2"
              rows={4}
              className="form-control"
              placeholder="پیام شما:"
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
    </form>
  );
}

export default FormHandler;
