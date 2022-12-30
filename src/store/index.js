import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authSliceReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSliceReducer
  }
});



export default store;
