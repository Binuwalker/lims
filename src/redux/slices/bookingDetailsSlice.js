import { createSlice } from "@reduxjs/toolkit";


const bookingDetailsSlice = createSlice({
    name: 'bookingDetails',
    initialState:{
        loading: false,
        details: '',
    },
    reducers:{
        bookingDetailsRequest(state, action){
            return{
                ...state,
                loading: true
            }
        },
        bookingDetailsSuccess(state, action){
            return{
                ...state,
                loading: false,
                details: action.payload
            }
        },
        bookingDetailsFail(state, action){
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        }
    }
});

const {actions, reducer} = bookingDetailsSlice;

export const {bookingDetailsRequest,bookingDetailsFail,bookingDetailsSuccess} = actions

export default reducer;
