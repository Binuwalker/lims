import { createSlice } from "@reduxjs/toolkit";


const bookingsSlice = createSlice({
    name: 'bookings',
    initialState:{
        loading: false,
    },
    reducers:{
        appointmentsRequest(state, action){
            return{
                ...state,
                loading: true
            }
        },
        appointmentsSuccess(state, action){
            return{
                ...state,
                loading: false,
                appointments: action.payload
            }
        },
        appointmentsFail(state, action){
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        },
        appointmentsUpdateRequest(state, action){
            return{
                ...state,
                loading: true
            }
        },
        appointmentsUpdateSuccess(state, action){
            return{
                ...state,
                loading: false,
                appointments: action.payload
            }
        },
        appointmentsUpdateFail(state, action){
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        }
    }
});

const {actions, reducer} = bookingsSlice;

export const {appointmentsRequest,appointmentsFail,appointmentsSuccess, appointmentsUpdateRequest,appointmentsUpdateFail,appointmentsUpdateSuccess} = actions

export default reducer;
