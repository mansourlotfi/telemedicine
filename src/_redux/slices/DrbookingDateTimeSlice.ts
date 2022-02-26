import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface IDrDate {
  id: number;
  date: string;
}
interface IDrDateList {
  drAvailableDates: IDrDate[] | [];
  drAvailableTimesByDate: any;
}

const initialState: IDrDateList = {
  drAvailableDates: [],
  drAvailableTimesByDate: [],
};

export const DrDateSlice = createSlice({
  name: "DrAvailableDates",
  initialState,
  reducers: {
    setDrAvailableDates: (state, action: PayloadAction<IDrDate[]>) => {
      state.drAvailableDates = action.payload;
    },
    setDrAvailableTimes: (state, action: PayloadAction<IDrDate[]>) => {
      state.drAvailableTimesByDate = action.payload;
    },
  },
});

export const { setDrAvailableDates, setDrAvailableTimes } = DrDateSlice.actions;

export const DrDatesData = (state: RootState) => state.DrDates;

export default DrDateSlice.reducer;
