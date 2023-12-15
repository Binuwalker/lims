import { createSlice } from "@reduxjs/toolkit";


const bookingSlice = createSlice({
    name: 'booking',
    initialState:{
        loading: false,
        cancelationStatus: '',
    },
    reducers:{
        appointmentSubmitRequest(state, action){
            return{
                ...state,
                loading: true
            }
        },
        appointmentSubmitSuccess(state, action){
            return{
                ...state,
                loading: false,
                confirmation: action.payload
            }
        },
        appointmentSubmitFail(state, action){
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        },
        appointmentCancelRequest(state, action){
            return{
                ...state,
                loading: true
            }
        },
        appointmentCancelSuccess(state, action){
            return{
                ...state,
                loading: false,
                cancelationStatus: action.payload
            }
        },
        appointmentCancelFail(state, action){
            return{
                ...state,
                loading: false,
                cancelationStatus: action.payload
            }
        }
    }
});

const {actions, reducer} = bookingSlice;

export const {appointmentSubmitRequest,appointmentSubmitFail,appointmentSubmitSuccess, appointmentCancelRequest,appointmentCancelFail,appointmentCancelSuccess} = actions

export default reducer;
