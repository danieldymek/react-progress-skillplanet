import {configureStore} from "@reduxjs/toolkit";
import storageSlice from "./storage-slice";
import uiSlice from "./ui-slice";
const store = configureStore({
  reducer: {ui: uiSlice.reducer, db: storageSlice.reducer},
});

export default store;
