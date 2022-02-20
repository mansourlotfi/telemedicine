import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { AlertColor } from "@mui/material/Alert";

interface IUI {
  ui: IToast;
}
interface IToast {
  severity: AlertColor;
  message: string;
  showToast?: boolean;
}

const initialState: IUI = {
  ui: {
    severity: "success",
    message: "",
    showToast: false,
  },
};

export const ToastSlice = createSlice({
  name: "Toast",
  initialState,
  reducers: {
    toast: (state, action: PayloadAction<IToast>) => {
      state.ui.severity = action.payload.severity;
      state.ui.message = action.payload.message;
      state.ui.showToast = action.payload.showToast;
      console.log(action.payload);
    },
    clearToast: (state) => {
      // state.ui.showToast = false;
    },
  },
});

export const { toast, clearToast } = ToastSlice.actions;

export const ToastData = (state: RootState) => state.Toast;

export default ToastSlice.reducer;
