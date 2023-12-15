import React, { useEffect } from 'react';
import CancelationSuccessfull from './layouts/CancelationSuccessfull';
import CancelationFailed from './layouts/CancelationFailed';
import { useDispatch, useSelector } from 'react-redux';
import { appointmentCancel } from '../../../redux/actions/bookingAction';
import { getQueryParam } from '../../../helpers/search-query-params/getQueryParams';

const Cancel = () => {

    const id = getQueryParam('id');
    const dispatch = useDispatch();
    const {cancelationStatus} = useSelector(state => state.bookingState);

    useEffect(() => {
        dispatch(appointmentCancel(id))
    }, [dispatch, id])

    console.log(id)

    return (
        <div>
            <CancelationSuccessfull />
            <CancelationFailed />
            {cancelationStatus}
        </div>
    )
}

export default Cancel;