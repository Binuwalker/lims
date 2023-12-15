import { createSlice } from "@reduxjs/toolkit";


const slotsSlice = createSlice({
    name: 'slots',
    initialState:{
        loading: false,
        details: '',
    },
    reducers:{
        slotsRequest(state, action){
            return{
                ...state,
                loading: true
            }
        },
        slotsSuccess(state, action){
            return{
                ...state,
                loading: false,
                slots: action.payload
            }
        },
        slotsFail(state, action){
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        }
    }
});

const {actions, reducer} = slotsSlice;

export const {slotsRequest,slotsFail,slotsSuccess} = actions

export default reducer;