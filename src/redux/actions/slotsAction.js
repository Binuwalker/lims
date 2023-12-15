import axios from "axios";
import {
    slotsFail,
    slotsRequest,
    slotsSuccess,
} from "../slices/slotsSlice";
import { BASE_URL } from "../../api/ApiPath";
import { endpoints } from "../../api/EndPoints";

export const getSlots = () => async (dispatch) => {
    try {
        dispatch(slotsRequest())
        const response = await axios.get(`${BASE_URL}/${endpoints.booking.slots}`);
        dispatch(slotsSuccess(response.data.formattedSlots))
    } catch (error) {
        console.log(error)
        dispatch(slotsFail(error))
    }
}
