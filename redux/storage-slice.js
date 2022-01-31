import {createSlice} from "@reduxjs/toolkit";

const storageSlice = createSlice({
  name: "storage",
  initialState: {
    data: [],
    users: [],
    chartData: [],
  },
  reducers: {
    setData(state, action) {
      action.payload.forEach((callback) => {
        state.data.push(callback);
      });
    },
    setChartData(state, action) {
      state.chartData = action.payload;
    },
    setUniqueUsers(state, action) {
      state.users = action.payload;
    },
    resetAll(state) {
      state.data = [];
      state.users = [];
      state.chartData = [];
    },
  },
});

export const storageActions = storageSlice.actions;

export default storageSlice;
