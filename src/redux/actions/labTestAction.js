import axios from "axios";
import {
    labTestFail,
    labTestRequest,
    labTestSuccess,
} from "../slices/labTestSlice";
import { BASE_URL } from "../../api/ApiPath";
import { endpoints } from "../../api/EndPoints";

export const getLabTest = () => async (dispatch) => {
    try {
        dispatch(labTestRequest())
        const response = await axios.get(`${BASE_URL}/${endpoints.labTest.getLabtest}`);
        dispatch(labTestSuccess(response.data.labTest))
    } catch (error) {
        console.log(error)
        dispatch(labTestFail(error))
    }
}
