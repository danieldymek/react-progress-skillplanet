import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiManager",
  initialState: {
    isLoggedIn: false,
    isMobile: false,
    recordsModal: [],
    isRecordsModalOpen: false,
    isSuccessModalOpen: false,
  },
  reducers: {
    toggleLoggedIn(state) {
      state.isLoggedIn = !state.isLoggedIn;
      localStorage.setItem("isLogged", state.isLoggedIn);
    },
    toggleIsMobile(state) {
      state.isMobile = !state.isMobile;
    },
    toggleModal(state) {
      state.isRecordsModalOpen = !state.isRecordsModalOpen;
    },
    toggleSuccessModal(state) {
      state.isSuccessModalOpen = !state.isSuccessModalOpen;
    },
    setModalData(state, action) {
      state.recordsModal = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
