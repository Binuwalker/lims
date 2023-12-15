import axios from "axios";
import {
    appointmentCancelFail,
    appointmentCancelRequest,
    appointmentCancelSuccess,
    appointmentSubmitRequest,
    appointmentSubmitSuccess,
} from "../slices/bookingSlice";
import { BASE_URL } from "../../api/ApiPath";
import { endpoints } from "../../api/EndPoints";
import { getSlots } from "./slotsAction";
import { appointmentsFail, appointmentsRequest, appointmentsSuccess, appointmentsUpdateFail, appointmentsUpdateRequest, appointmentsUpdateSuccess } from "../slices/bookingsSlice";

export const appointmentSubmit = (lab_test_id, payloads) => async (dispatch) => {
    console.log(payloads)
    try {
        dispatch(appointmentSubmitRequest());
        const response = await axios.post(`${BASE_URL}/${endpoints.booking.submit}/${lab_test_id}`, payloads);
        dispatch(appointmentSubmitSuccess(response));
        dispatch(getSlots());
    } catch (error) {
        console.log(error?.response)
    }
}

export const appointmentCancel = id => async (dispatch) => {
    console.log(id)
    try {
        dispatch(appointmentCancelRequest())

        const response = await axios.delete(`${BASE_URL}/${endpoints.booking.cancel}/${id}`)
        console.log(response)
        dispatch(appointmentCancelSuccess(response?.data?.message))
    } catch (error) {
        console.log(error?.response)
        dispatch(appointmentCancelFail(error?.response?.data?.message))
    }
}

export const getAppointments = () => async (dispatch) => {
    try {
        dispatch(appointmentsRequest());
        const response = await axios.get(`${BASE_URL}/${endpoints.booking.appointments}`);
        dispatch(appointmentsSuccess(response?.data?.appointments));
        dispatch(getSlots());
    } catch (error) {
        dispatch(appointmentsFail(error))
    }
}

export const updateAppointments = (payloads) => async (dispatch) => {

    console.log(payloads, 'open')

    try {
        dispatch(appointmentsUpdateRequest());
        const response = await axios.put(`${BASE_URL}/${endpoints.booking.updateAppointments}`, payloads);
        dispatch(appointmentsUpdateSuccess(response?.data?.appointments));
        dispatch(getSlots());
    } catch (error) {
        dispatch(appointmentsUpdateFail(error))
    }
}