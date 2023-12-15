import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "../slices/authSlice";
import userReducer from "../slices/userSlice";
import bookingReducer from "../slices/bookingSlice";
import bookingsReducer from "../slices/bookingsSlice";
import bookingDetailsReducer from "../slices/bookingDetailsSlice";
import labTestReducer from "../slices/labTestSlice";
import slotsReducer from "../slices/slotsSlice";

const reducer = combineReducers({
    authState: authReducer,
    userState: userReducer,
    bookingState: bookingReducer,
    bookingsState: bookingsReducer,
    bookingDetailsState: bookingDetailsReducer,
    labTestState: labTestReducer,
    slotsState: slotsReducer,
})

const store = configureStore({
    reducer,
    middleware: [thunk]
})


export default store;