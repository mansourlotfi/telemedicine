import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { FieldArray, Form, Formik, FormikProps } from "formik";
import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { sendFile, uploadFile, userFile } from "_api";
import { generateUserDetailDto } from "_common/mappers/toUserDetailApi";
import { Axios, AxiosResponse } from "axios";
import { SuccessData } from "_utils/toast";
import { useAppSelector } from "_redux/hooks";

interface IValues {
  files: any;
}

function UploadFiles() {
  const profile = useAppSelector((state) => state.profile);

  const [isLoading, setIsLoading] = useState(false);

  const [files, setFiles] = useState([]);

  const initialValue: IValues = {
    files: [],
  };

  const handleSubmit = (values: IValues, { resetForm }: any) => {};

  const handleChange = (event: any) => {
    setIsLoading(true);
    const fileUploaded = event.target.files[0];
    uploadFile(generateUserDetailDto(profile), fileUploaded)
      .then((data: AxiosResponse) => {
        sendFile({ phone: profile.user.phone, url: data.data }).then((res) => {
          if (res) {
            SuccessData("فایل با موفقیت بارگذاری شد");
            userFile({ phone: profile.user.phone }).then(
              (data: AxiosResponse) => {
                setFiles(data.data);
              }
            );
          }
        });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    userFile({ phone: profile.user.phone }).then((data: AxiosResponse) => {
      setFiles(data.data);
    });
  }, []);

  return (
    <div>
      <Grid
        container
        // xs={12}
        style={{
          backgroundColor: "#0070cc",
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
        {files &&
          files?.map((item: any, index: number) => (
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
                cursor: "pointer",
              }}
            >
              <img
                src={item.URL}
                width={100}
                height={100}
                onClick={() => {
                  window.open(item.URL);
                }}
              />
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
