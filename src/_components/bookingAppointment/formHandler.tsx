import { Box, CircularProgress, TextField } from "@mui/material";
import { AxiosResponse } from "axios";
import { FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import { getDrTimesByDate } from "_api";
import { useAppDispatch, useAppSelector } from "_redux/hooks";
import { IValues } from "./index";
import moment from "moment-jalaali";
import AdapterJalali from "@date-io/date-fns-jalali";
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
import { createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { create } from "jss";
import rtl from "jss-rtl";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" });

const theme = createTheme({
  direction: "rtl",
});
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props: any) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

interface ITime {
  dateID: number;
  id: number;
  time: string;
  isReserved: boolean;
}
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
  const { drAvailableDates } = useAppSelector((state) => state.DrDates);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [drTimes, setDrTimes] = useState<ITime[]>([]);

  const handleSelectDate = (e: any) => {
    setSelectedDate(e.target.value);

    let dateValue = drAvailableDates.find((item) => item.id == e.target.value);
    setFieldValue("date", dateValue?.date?.substring(0, 10));
  };

  const handleSelectTime = (e: any) => {
    setFieldValue("time", e.target.value);
  };
  useEffect(() => {
    if (selectedDate) {
      getDrTimesByDate(selectedDate).then((data: AxiosResponse) =>
        setDrTimes(data.data)
      );
    }
  }, [selectedDate]);

  const shouldDisableDate = (date: any) => {
    let inputDays = moment(date).toISOString().split("T")[0];

    let days = [];
    for (const iterator of drAvailableDates) {
      days.push(moment(iterator.date).toISOString().split("T")[0]);
    }

    return !days.includes(inputDays.split("T")[0]);
  };

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
            value={values.phone ?? ""}
            onChange={handleChange}
            className="form-control"
            disabled
            placeholder="شماره همراه"
            style={touched.phone && errors.phone ? { borderColor: "red" } : {}}
          />
        </div>
      </div>

      <div className="col-md-6">
        <div className="mb-3">
          <div>
            <label className="form-label">
              تاریخ<span className="text-danger">*</span>
            </label>
          </div>
          {/* <select
            className="form-control doctor-name select2input"
            onChange={handleSelectDate}
            style={errors.date ? { borderColor: "red" } : {}}
          >
            <option key={0} value={0}>
              لطفا تاریخ را انتخاب نمایید
            </option>
            {drAvailableDates &&
              drAvailableDates.map((item) => (
                <option key={item.id} value={item.id}>
                  {moment(item.date).locale("fa").format("jYYYY-jMM-jD")}
                </option>
              ))}
          </select> */}

          <div style={{ direction: "rtl" }}>
            <RTL>
              <LocalizationProvider dateAdapter={AdapterJalali}>
                <DesktopDatePicker
                  label="تاریخ"
                  value={moment(values.date)}
                  components={{
                    LeftArrowIcon: ArrowForwardIcon,
                    RightArrowIcon: ArrowBackIcon,
                  }}
                  shouldDisableDate={shouldDisableDate}
                  onChange={(newValue) => {
                    let dateValue = drAvailableDates.find(
                      (item) =>
                        item.date.split("T")[0] ==
                        moment(newValue)
                          .add(1, "days")
                          .toISOString()
                          .split("T")[0]
                    );
                    console.log("dateValue", dateValue);
                    if (dateValue) {
                      setSelectedDate(dateValue.id);
                    }
                    setFieldValue(
                      "date",
                      moment(newValue)
                        .add(1, "days")
                        .toISOString()
                        .split("T")[0]
                    );
                  }}
                  renderInput={({ inputRef, inputProps, InputProps }) => (
                    <Box
                      sx={{
                        fontFamily: "iransans",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input
                        ref={inputRef}
                        {...inputProps}
                        placeholder="انتخاب تاریخ"
                      />
                      {InputProps?.endAdornment}
                    </Box>
                  )}
                />
              </LocalizationProvider>
            </RTL>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="mb-3">
          <label className="form-label">
            ساعت<span className="text-danger">*</span>
          </label>
          <select
            className="form-control doctor-name select2input"
            onChange={handleSelectTime}
            disabled={selectedDate === null ? true : false}
            style={errors.time ? { borderColor: "red" } : {}}
          >
            <option key={0} value={0}>
              لطفا ساعت را انتخاب نمایید
            </option>
            {drTimes &&
              Array.isArray(drTimes) &&
              drTimes
                .filter((item) => item.isReserved == false)
                .map((item) => (
                  <option key={item.id} value={item.time}>
                    {item.time}
                  </option>
                ))}
          </select>
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
            value={values.description ?? ""}
            style={
              touched.description && errors.description
                ? { borderColor: "red" }
                : {}
            }
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <div className="col-lg-12">
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress color="secondary" size={20} />
            ) : (
              "رزرو نوبت"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormHandler;
