import { Form, Formik, FormikProps } from "formik";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import FormHandler from "./formHandler";
import { loginOrRegister, verifyCode } from "_api";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "_redux/hooks";
import { signIn } from "_redux/slices/AuthenticationSlice";
import { setProfile } from "_redux/slices/ProfileSlice";

const schema = yup.object({
  phone: yup.number().required(),
});

export interface IValues {
  phone: string | null;
  smscode: string | null;
}

function Login() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const isSignedIn = useAppSelector((S) => S.Authentication)?.isSignedIn;
  let navigate = useNavigate();

  const initialValue: IValues = {
    phone: null,
    smscode: null,
  };

  const handleSubmit = (values: IValues, { resetForm }: any) => {
    setIsLoading(true);
    if (step === 1) {
      loginOrRegister({ phone: Number(values.phone) })
        .then((res) => {
          setIsLoading(false);
          setStep(2);
        })
        .finally(() => setIsLoading(false));
    } else {
      verifyCode({
        phone: Number(values.phone),
        smscode: Number(values.smscode),
      })
        .then((res) => {
          setIsLoading(false);
          if (res.data === "1") {
            localStorage.setItem("phone", values.phone ?? "");

            dispatch(signIn());
            dispatch(setProfile(values));
            return navigate("/patientProfile");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      return navigate("/patientProfile");
    }
  });

  return (
    <>
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
            <FormHandler isLoading={isLoading} step={step} {...formikProps} />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Login;
