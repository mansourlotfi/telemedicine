import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { clearToast } from "_redux/slices/ToastSlice";
import { useAppDispatch, useAppSelector } from "_redux/hooks";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const dispatch = useAppDispatch();
  const { ui } = useAppSelector((state) => state.Toast);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(clearToast());
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={ui.showToast}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={ui.severity}
          sx={{ width: "100%" }}
        >
          {ui.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
