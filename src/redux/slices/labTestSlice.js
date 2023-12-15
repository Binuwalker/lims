import { createSlice } from "@reduxjs/toolkit";


const labTestSlice = createSlice({
    name: 'labTest',
    initialState:{
        loading: false,
        details: '',
    },
    reducers:{
        labTestRequest(state, action){
            return{
                ...state,
                loading: true
            }
        },
        labTestSuccess(state, action){
            return{
                ...state,
                loading: false,
                labTest: action.payload
            }
        },
        labTestFail(state, action){
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        }
    }
});

const {actions, reducer} = labTestSlice;

export const {labTestRequest,labTestFail,labTestSuccess} = actions

export default reducer;