import { Form, Formik,FormikProps } from 'formik'
import React, { useState } from 'react'
import * as yup from "yup";
import { useAppSelector } from '_redux/hooks';
import FormHandler from './formHandler';
import { loginOrRegister } from "_api";


const schema = yup.object({
    phone: yup.number().required(),
    
  });

  export interface IValues {
    phone: string | null;
   
  }


function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [step, setStep] = useState(1)
    // const profile = useAppSelector((state) => state.profile);

    const initialValue: IValues = {
        phone:  null,
       
      };


      const handleSubmit = (
        values: IValues,
        { resetForm }: any,
        visitType: boolean
      ) => {
        loginOrRegister({phone:Number(values.phone)}).then((res)=>console.log('res', res))
      };

    return (
        <>
        {step ===  1 ?
         <Formik
         initialValues={initialValue}
         validationSchema={schema}
         enableReinitialize
         onSubmit={(values, { resetForm }) =>
           handleSubmit(values, { resetForm }, false)
         }
       >
 
 {(formikProps) => (
                         <Form>
                           <FormHandler
                             isLoading={isLoading}
                             {...formikProps}
                           />
                         </Form>
                       )}
 
 
       
         
 
 
 
         
       </Formik> : ""
    
    }
        
        </>
       


   
  )
}

export default Login