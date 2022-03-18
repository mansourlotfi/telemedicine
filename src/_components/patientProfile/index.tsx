import React, { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import { useAppSelector, useAppDispatch } from "_redux/hooks";
import {
  getUserProfile,
  setUserProfile,
  getDrDates,
  getUserPayments,
  getUserReservation,
} from "_api";
import { generateUserDetailDto } from "_common/mappers/toUserDetailApi";
import { generateProfile } from "_common/mappers/fromUserDetailApi";
import { setProfile, setProfileImage } from "_redux/slices/ProfileSlice";
import { uploadFile } from "_api";
import CircularProgress from "@mui/material/CircularProgress";
import { Form, Formik } from "formik";
import SetProfileFormHandler from "./setProfileFormHandler";
import * as yup from "yup";
import { generateSetProfileDto } from "_common/mappers/toSetSetProfileApi";
import { generateProfileValueToState } from "_common/mappers/fromProfileValueToProfileState";
// import { toast } from "_redux/slices/ToastSlice";
// import { AlertColor } from "@mui/material/Alert";
import { SuccessData, WarningData } from "_utils/toast";
import { setDrAvailableDates } from "_redux/slices/DrbookingDateTimeSlice";
import moment from "moment-jalaali";
// import states from "assets/states";
import UploadFiles from "./uploadFiles";

export interface IValues {
  name: string | null;
  email: string | null;
  phone: string | null;
  image: string | null;
  address: string | null;
  age: string | null;
  blood: string | null;
  height: string | null;
  weight: string | null;
  city: string | null;
  state: number | null;
  description: string | null;
  codemelli: string | null;
}

// interface IToast {
//   severity: AlertColor;
//   message: string;
//   showToast?: boolean;
// }

const schema = yup.object({
  name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email().required(),
  // image: yup.string().nullable(),
  // address: yup.string().required(),
  age: yup.string().required(),
  // blood: yup.string().required(),
  // city: yup.string().required(),
  // state: yup.string().required(),
  description: yup.string().nullable(),
  // height: yup.string().required(),
  // weight: yup.string().required(),
  codemelli: yup.string().required(),
});

function Index() {
  let hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const profile = useAppSelector((state) => state.profile);

  const drAvailableDates = useAppSelector((state) => state.DrDates);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formsIsSubmitting, setformsIsSubmitting] = useState<boolean>(false);
  const [ProfileUrl, setProfileUrl] = useState("");
  const [userReservation, setUserReservation] = useState([]);

  const dispatch = useAppDispatch();
  const initialValue: IValues = {
    name: profile.user.name,
    phone: profile.user.phone,
    email: profile.user.email,
    image: profile.user.image,
    address: profile.user.address,
    age: profile.user.age,
    blood: profile.user.blood,
    height: profile.user.height,
    weight: profile.user.weight,
    city: profile.user.city,
    state: profile.user.state,
    description: profile.user.description,
    codemelli: profile.user.codemelli,
  };

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };
  const handleChange = (event: any) => {
    // let alertData: IToast = {
    //   severity: "success",
    //   message: "asd",
    //   showToast: true,
    // };
    setIsLoading(true);
    const fileUploaded = event.target.files[0];
    uploadFile(generateUserDetailDto(profile), fileUploaded)
      .then((data: AxiosResponse) => {
        dispatch(setProfileImage(data.data));
        setProfileUrl(data.data);
        // dispatch(toast(alertData));
        WarningData("برای ثبت تغییرات دکمه ذخیره تغییرات را بزنید");
      })
      .finally(() => setIsLoading(false));
  };

  const handleSubmit = (values: IValues, { resetForm }: any) => {
    setformsIsSubmitting(true);
    setUserProfile(generateSetProfileDto(values))
      .then(() => {
        dispatch(setProfile(generateProfileValueToState(values, profile)));
        SuccessData("اطلاعات ذخیره شد");
        setformsIsSubmitting(false);
      })
      .finally(() => setformsIsSubmitting(false));
  };

  const deleteImageHandler = () => {
    setProfileUrl("");
    dispatch(setProfileImage(""));
  };

  useEffect(() => {
    getUserProfile(generateUserDetailDto(profile)).then(
      (data: AxiosResponse) => {
        dispatch(setProfile(generateProfile(data).user));
      }
    );
    getDrDates().then((data: AxiosResponse) =>
      dispatch(setDrAvailableDates(data.data))
    );
    // getUserPayments({ userphone: Number(profile.user.phone) }).then(
    //   (data: AxiosResponse) => console.log("getUserPayments", data)
    // );
    if (profile.user.phone) {
      getUserReservation({ userphone: profile.user.phone }).then(
        (data: AxiosResponse) => setUserReservation(data.data)
      );
    }
  }, []);

  return (
    <section className="bg-hero">
      <div className="container">
        <div className="row mt-lg-5">
          <div className="col-md-6 col-lg-4">
            <div className="rounded shadow overflow-hidden sticky-bar">
              <div className="card border-0">
                <img
                  src="../assets/images/bg/bg-profile.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
                <img
                  src={profile.user.image ?? "../assets/images/user.png"}
                  className="rounded-circle shadow-md avatar avatar-md-md"
                  alt=""
                />
                <h5 className="mt-3 mb-1">
                  {profile.user.name ?? "اطلاعات تکمیل نشده است"}
                </h5>
                <p className="text-muted mb-0">
                  {moment(profile.user.age).locale("fa").format("jYYYY-jMM-jD")}
                </p>
              </div>

              <div className="list-unstyled p-4">
                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-book-open align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">تاریخ تولد</h6>
                  <p className="text-muted mb-0 me-2">
                    {moment(profile.user.age)
                      .locale("fa")
                      .format("jYYYY-jMM-jD")}
                  </p>
                </div>

                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-book-open align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">شماره تماس</h6>
                  <p className="text-muted mb-0 me-2">{profile.user.phone}</p>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-book-open align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0"> کد ملی</h6>
                  <p className="text-muted mb-0 me-2">
                    {profile.user.codemelli}
                  </p>
                </div>

                {/* <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-book-open align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">آدرس</h6>
                  <p className="text-muted mb-0 me-2">{profile.user.address}</p>
                </div>

                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-book-open align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">گروه خونی</h6>
                  <p className="text-muted mb-0 me-2">{profile.user.blood}</p>
                </div> */}

                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-book-open align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">تلفن</h6>
                  <p className="text-muted mb-0 me-2">{profile.user.phone}</p>
                </div>
                {/* 
                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-book-open align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">استان</h6>
                  <p className="text-muted mb-0 me-2">
                    {states.find((item) => item.id == profile.user.state)?.name}
                  </p>
                </div>

                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-book-open align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">شهر</h6>
                  <p className="text-muted mb-0 me-2">{profile.user.city}</p>
                </div>

                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-book-open align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">قد</h6>
                  <p className="text-muted mb-0 me-2">{profile.user.height}</p>
                </div>

                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-book-open align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">وزن</h6>
                  <p className="text-muted mb-0 me-2">{profile.user.weight}</p>
                </div> */}
                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-book-open align-text-bottom text-primary h5 mb-0 ms-2"></i>
                  <h6 className="mb-0">توضیحات</h6>
                  <p className="text-muted mb-0 me-2">
                    {profile.user.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="card border-0 shadow overflow-hidden">
              <ul
                className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link rounded-0 active"
                    id="overview-tab"
                    data-bs-toggle="pill"
                    href="#pills-overview"
                    role="tab"
                    aria-controls="pills-overview"
                    aria-selected="false"
                  >
                    <div className="text-center pt-1 pb-1">
                      <h4 className="title fw-normal mb-0">پروفایل</h4>
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link rounded-0"
                    id="experience-tab"
                    data-bs-toggle="pill"
                    href="#pills-experience"
                    role="tab"
                    aria-controls="pills-experience"
                    aria-selected="false"
                  >
                    <div className="text-center pt-1 pb-1">
                      <h4 className="title fw-normal mb-0"> پرونده پزشکی</h4>
                    </div>
                  </a>
                </li>
              </ul>

              <div className="tab-content p-4" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-overview"
                  role="tabpanel"
                  aria-labelledby="overview-tab"
                >
                  <h5 className="mb-0">معرفی:</h5>

                  <p className="text-muted mt-4 mb-0">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد
                  </p>

                  <div className="row">
                    <div className="col-lg-6 col-12 mt-4">
                      <h5>لیست نوبت ها</h5>
                      {/* {drAvailableDates &&
                        drAvailableDates.drAvailableDates?.map((item) => (
                          <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                            <i className="ri-stethoscope-line h3 fw-normal text-success mb-0"></i>
                            <div className="flex-1 overflow-hidden me-2">
                              <h6 className="mb-0"> وقت حضوری یا آنلاین </h6>
                              <p className="text-muted mb-0 text-truncate small">
                                پزشک : آقای دکتر علی طبیبی
                              </p>
                            </div>
                            <span className="mb-0">
                              {moment(item.date)
                                .locale("fa")
                                .format("jYYYY-jMM-jD")}
                            </span>
                          </div>
                        ))} */}

                      {userReservation ? (
                        userReservation?.map((item: any) => (
                          <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                            <i className="ri-stethoscope-line h3 fw-normal text-success mb-0"></i>
                            <div className="flex-1 overflow-hidden me-2">
                              <h6 className="mb-0">
                                {item.type === "hozori"
                                  ? "نوبت حضوری"
                                  : "نوبت آنلاین"}{" "}
                              </h6>
                              <p className="text-muted mb-0 text-truncate small">
                                پزشک : آقای دکتر علی طبیبی
                              </p>
                            </div>
                            <div
                              className="mb-0"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <span>
                                {moment(item.date)
                                  .locale("fa")
                                  .format("jYYYY-jMM-jD")}
                              </span>
                              <span>{item.time}</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                          <div className="flex-1 overflow-hidden me-2">
                            <h6 className="mb-0">نوبت رزرو شده ندارید</h6>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="col-lg-6 col-12 mt-4">
                      <h5>لیست پرداخت ها</h5>

                      {drAvailableDates &&
                        drAvailableDates.drAvailableDates?.map((item) => (
                          <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                            <div className="flex-1 overflow-hidden">
                              <h6 className="flex-1 mb-0">
                                نوبت حضوری / آنلاین
                              </h6>
                              <p className="text-muted mb-0 text-truncate small">
                                پرداخت شده
                              </p>
                            </div>
                            <a
                              href="#"
                              className="btn btn-icon btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#view-invoice"
                            >
                              <i className="uil uil-clipboard-notes icons"></i>
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-experience"
                  role="tabpanel"
                  aria-labelledby="experience-tab"
                >
                  <h5 className="mb-0"> اطلاعات شخصی: </h5>
                  {/* <div className="row align-items-center mt-4">
                    <div className="col-lg-2 col-md-4">
                      <img
                        src={
                          profile.user.image ?? "../assets/images/client/09.jpg"
                        }
                        className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
                        alt=""
                      />
                    </div>

                    <div className="col-lg-5 col-md-8 text-center text-md-end mt-4 mt-sm-0">
                      <h6 className=""> عکس پروفایل را بارگذاری کنید </h6>
                      <p className="text-muted mb-0">
                        برای بهترین نتیجه ، از تصویری حداقل 256 پیکسل در 256
                        پیکسل در قالب .jpg یا .png استفاده کنید
                      </p>
                    </div>

                    <div className="col-lg-5 col-md-12 text-lg-right text-center mt-4 mt-lg-0">
                      <button
                        className="btn btn-primary"
                        onClick={handleClick}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <CircularProgress color="secondary" size={20} />
                        ) : (
                          "آپلود"
                        )}
                      </button>
                      <input
                        type="file"
                        accept="image/*"
                        ref={hiddenFileInput}
                        disabled={isLoading}
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />
                      {ProfileUrl && (
                        <button
                          className="btn btn-soft-primary me-2"
                          onClick={deleteImageHandler}
                        >
                          حذف
                        </button>
                      )}
                    </div>
                  </div> */}
                  <Formik
                    initialValues={initialValue}
                    validationSchema={schema}
                    enableReinitialize
                    onSubmit={(values, { resetForm }) =>
                      handleSubmit(values, { resetForm })
                    }
                  >
                    {(formikProps) => (
                      <Form>
                        <SetProfileFormHandler
                          isLoading={formsIsSubmitting}
                          {...formikProps}
                        />
                      </Form>
                    )}
                  </Formik>
                  <div style={{ marginTop: 20 }}>
                    <UploadFiles />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
