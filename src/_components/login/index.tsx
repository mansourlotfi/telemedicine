import { Form, Formik,FormikProps } from 'formik'
import React, { useState } from 'react'
import * as yup from "yup";
import { useAppSelector } from '_redux/hooks';
import FormHandler from './formHandler';


const schema = yup.object({
    phone: yup.number().required(),
    
  });

  export interface IValues {
    phone: string | null;
   
  }


function Login() {
    const [isLoading, setIsLoading] = useState(false)
    // const profile = useAppSelector((state) => state.profile);

    


    const initialValue: IValues = {
        phone:  null,
       
      };


      const handleSubmit = (
        values: IValues,
        { resetForm }: any,
        visitType: boolean
      ) => {
      console.log('values', values)
      };

    return (
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


      
        



        
      </Formik>


   
  )
}

export default Login