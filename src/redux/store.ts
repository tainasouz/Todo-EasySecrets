import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";
import formDialogReducer from "./formDialog/formDialogSlice";
const store = configureStore({
  reducer: {
    todo: todoReducer,
    formDialog: formDialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
