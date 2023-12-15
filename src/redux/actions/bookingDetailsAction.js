import {
    bookingDetailsFail,
    bookingDetailsRequest,
    bookingDetailsSuccess,
} from "../slices/bookingDetailsSlice";

export const bookingDetails = (payload) => async (dispatch) => {
    console.log(payload)
    try {
        dispatch(bookingDetailsRequest())

        dispatch(bookingDetailsSuccess(payload))
    } catch (error) {
        console.log(error)
        dispatch(bookingDetailsFail(error))
    }
}
