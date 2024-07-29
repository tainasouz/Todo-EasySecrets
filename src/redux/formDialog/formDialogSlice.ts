import { createSlice } from "@reduxjs/toolkit";

const initialState = { abrirForm: false };

const formDialog = createSlice({
  name: "formDialog",
  initialState,
  reducers: {
    toggleFormDialog(state) {
      state.abrirForm = !state.abrirForm;
    },
    abrirFormDialog(state) {
      state.abrirForm = true;
    },
    fecharFormDialog(state) {
      state.abrirForm = false;
    },
  },
});

export const { toggleFormDialog, abrirFormDialog, fecharFormDialog } =
  formDialog.actions;
export default formDialog.reducer;
