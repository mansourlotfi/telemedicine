import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { FieldArray, Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { uploadFile } from "_api";
import { generateUserDetailDto } from "_common/mappers/toUserDetailApi";
import { AxiosResponse } from "axios";
import { SuccessData } from "_utils/toast";
import { useAppSelector } from "_redux/hooks";

interface IValues {
  files: string[] | null;
}

function UploadFiles() {
  const [isLoading, setIsLoading] = useState(false);

  const profile = useAppSelector((state) => state.profile);

  const initialValue: IValues = {
    files: ["1", "2"],
  };

  const handleSubmit = (values: IValues, { resetForm }: any) => {
    console.log("values", values);
  };

  const handleChange = (event: any) => {
    setIsLoading(true);
    const fileUploaded = event.target.files[0];
    uploadFile(generateUserDetailDto(profile), fileUploaded)
      .then((data: AxiosResponse) => {
        // dispatch(toast(alertData));
        SuccessData("فایل با موفقیت بارگذاری شد");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <Grid
        container
        xs={12}
        style={{
          backgroundColor: "lightblue",
          margin: "20px 0",
          minHeight: 200,
          borderRadius: 8,
        }}
        alignItems="center"
        // rowSpacing={5}
        // columnSpacing={5}
      >
        <Grid item xs={12}>
          <span>مدارک پزشکی آپلود شده</span>
        </Grid>
        {initialValue.files?.map((item, index) => (
          <Grid
            item
            xs={2}
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: 8,
              margin: 10,
              alignItems: "center",
              minHeight: 100,
            }}
          >
            مدرک نمونه
          </Grid>
        ))}
      </Grid>
      <Formik
        initialValues={initialValue}
        // validationSchema={schema}
        enableReinitialize
        onSubmit={(values, { resetForm }) =>
          handleSubmit(values, { resetForm })
        }
      >
        {({ errors, setFieldValue, values }) => (
          <Form>
            <FieldArray
              name="files"
              render={(arrayHelpers) => (
                <div>
                  {values.files && values.files.length > 0 ? (
                    values.files.map((file: string, index: number) => (
                      <div key={index} style={{ margin: 10 }}>
                        <input
                          type="file"
                          accept="image/*"
                          //   ref={hiddenFileInput}
                          disabled={isLoading}
                          onChange={handleChange}
                          placeholder="لطفا فایل را انتخاب نمایید"
                        />

                        <IconButton
                          size="small"
                          onClick={() => arrayHelpers.remove(index)}
                          color="secondary"
                          //   className={classes.delIcons}
                          disabled={values.files?.length === 1 ? true : false}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </div>
                    ))
                  ) : (
                    <div>
                      {isLoading ? (
                        <CircularProgress color="secondary" size={20} />
                      ) : (
                        <Button
                          variant="outlined"
                          disableElevation
                          color="primary"
                          // className={classes.button}
                          style={{ font: "inherit" }}
                          startIcon={<AddIcon />}
                          onClick={() => arrayHelpers.push("")}
                        >
                          افزودن فایل
                        </Button>
                      )}
                    </div>
                  )}
                  {values.files && values.files.length > 0 && (
                    <div>
                      {isLoading ? (
                        <CircularProgress color="secondary" size={20} />
                      ) : (
                        <Button
                          variant="outlined"
                          disableElevation
                          color="primary"
                          style={{ font: "inherit" }}
                          startIcon={<AddIcon />}
                          onClick={() => arrayHelpers.push("")}
                        >
                          افزودن فایل
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UploadFiles;
