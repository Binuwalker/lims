import {
    clearError,
    connectFail,
    connectRequest,
    connectSuccess,
    registerRequest,
    registerSuccess,
    registerFail,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail,
    logoutSuccess,
    logoutFail,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFail,
    updatePasswordFail,
    updatePasswordRequest,
    updatePasswordSuccess,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    forgotPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess,
    resetPasswordFail
} from "../slices/authSlice";
import axios from "axios";
import {
    deleteUserFail,
    deleteUserRequest,
    deleteUserSuccess,
    updateUserFail,
    updateUserRequest,
    updateUserSuccess,
    userFail,
    userRequest,
    usersFail,
    usersRequest, usersSuccess, userSuccess,
} from "../slices/userSlice";
import { BASE_URL } from "../../api/ApiPath";
import { endpoints } from "../../api/EndPoints";

export const connect = (payloads) => async (dispatch) => {
    try {
        dispatch(connectRequest())
        const { data } = await axios.post(`${BASE_URL}/${endpoints.connection.connect}`, { email: payloads.email, password: payloads.password })
        dispatch(connectSuccess(data))
    } catch (error) {
        dispatch(connectFail(error.response.data.message))
    }
}
export const register = (userData) => async (dispatch) => {
    try {
        dispatch(registerRequest())
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const { data } = await axios.post('/api/v1/register', userData, config)
        dispatch(registerSuccess(data))
    } catch (error) {
        dispatch(registerFail(error.response.data.message))
    }
}
export const loadUser = async (dispatch) => {
    try {
        dispatch(loadUserRequest())

        const { data } = await axios.get(`/api/v1/myprofile`)
        dispatch(loadUserSuccess(data))
    } catch (error) {
        dispatch(loadUserFail(error.response.data.message))
    }
}
export const logout = async (dispatch) => {
    try {
        await axios.get(`/api/v1/logout`)
        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutFail(error.response.data.message))
    }
}
export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch(updateProfileRequest())
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const { data } = await axios.put('/api/v1/update', userData, config)
        dispatch(updateProfileSuccess(data))
    } catch (error) {
        dispatch(updateProfileFail(error.response.data.message))
    }
}
export const updatePassword = (formData) => async (dispatch) => {
    try {
        dispatch(updatePasswordRequest())
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }

        await axios.put('/api/v1/password/change', formData, config)
        dispatch(updatePasswordSuccess())
    } catch (error) {
        dispatch(updatePasswordFail(error.response.data.message))
    }
}
export const forgotPassword = (formData) => async (dispatch) => {
    try {
        dispatch(forgotPasswordRequest())
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/v1/password/forgot', formData, config)
        dispatch(forgotPasswordSuccess(data))
    } catch (error) {
        dispatch(forgotPasswordFail(error.response.data.message))
    }
}
export const resetPassword = (formData, token) => async (dispatch) => {
    try {
        dispatch(resetPasswordRequest())
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/password/reset/${token}`, formData, config)
        dispatch(resetPasswordSuccess(data))
    } catch (error) {
        dispatch(resetPasswordFail(error.response.data.message))
    }
}

export const clearAuthError = dispatch => {
    dispatch(clearError())
}

export const getUsers = async (dispatch) => {
    try {
        dispatch(usersRequest())

        const { data } = await axios.get(`/api/v1/admin/users`)
        dispatch(usersSuccess(data))
    } catch (error) {
        dispatch(usersFail(error.response.data.message))
    }
}
export const getUser = id => async (dispatch) => {
    try {
        dispatch(userRequest())

        const { data } = await axios.get(`/api/v1/admin/user/${id}`)
        dispatch(userSuccess(data))
    } catch (error) {
        dispatch(userFail(error.response.data.message))
    }
}
export const deleteUser = id => async (dispatch) => {
    try {
        dispatch(deleteUserRequest())

        await axios.delete(`/api/v1/admin/user/${id}`)
        dispatch(deleteUserSuccess())
    } catch (error) {
        dispatch(deleteUserFail(error.response.data.message))
    }
}
export const updateUser = (id, formData) => async (dispatch) => {
    try {
        dispatch(updateUserRequest())
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }

        await axios.put(`/api/v1/admin/user/${id}`, formData, config)
        dispatch(updateUserSuccess())
    } catch (error) {
        dispatch(updateUserFail(error.response.data.message))
    }
}