import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments, updateAppointments } from '../../../redux/actions/bookingAction';
import { GrDocumentUpdate } from 'react-icons/gr';
import { FiSearch } from 'react-icons/fi';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from 'antd';
import moment from 'moment';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const AppointmentDataTable = () => {

    const dispatch = useDispatch();
    const { appointments } = useSelector(state => state.bookingsState);

    console.log(appointments, 'open')

    const [modalIsOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState('');

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        dispatch(getAppointments())
    }, [dispatch])

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [timeValueStart, setTimeValueStart] = useState('');
    const [timeValueEnd, setTimeValueEnd] = useState('');

    const handleStartTimeChange = (time, timeString) => {
        setTimeValueStart(timeString);
    };
    const handleEndTimeChange = (time, timeString) => {
        setTimeValueEnd(timeString);
    };

    const format = 'HH:mm';

    const columns = [
        {
            name: 'APPOINTMENT ID',
            selector: '_id',
            sortable: true,
        },
        {
            name: 'PATIENT NAME',
            selector: 'first_name',
            sortable: true,
        },
        {
            name: 'BOOKED DATE',
            selector: 'booking_date',
            sortable: true,
        },
        {
            name: 'TIME SLOT',
            selector: 'time_slot',
            sortable: true,
        },
        {
            name: 'STATUS',
            selector: 'status',
            sortable: true,
            cell: (row) => (
                <div className={`status-container 
                ${row.status === 'Confirmed' ? 'confirmed' : row.status === 'Completed' ? 'completed' : row.status === 'No-Show' && 'no-show'}
                d-flex align-items-center justify-content-center gap-1`}>
                    <div className='status-indication'></div>
                    <div>{row.status}</div>
                </div>
            ),
        },
    ];

    const handleSave = () => {
        const payloads = {
            status,
            startDate: moment(startDate).format('MM-DD-YYYY'),
            endDate: endDate ? moment(endDate).format('MM-DD-YYYY') : moment(startDate).format('MM-DD-YYYY'),
            startTime: timeValueStart ? timeValueStart : '09:00',
            endTime: timeValueEnd ? timeValueEnd : timeValueStart ? timeValueStart : '17:00'
        }
        dispatch(updateAppointments(payloads))
        setStartDate('');
        setEndDate('');
        setTimeValueStart('');
        setTimeValueEnd('');
        setStatus('');
        setIsOpen(false);
    }

    const handleClear = () => {
        setStartDate('');
        setEndDate('');
        setTimeValueStart('');
        setTimeValueEnd('');
        setStatus('');
    }

    console.log(status, startDate, timeValueEnd)

    return (
        <div className='appointment-datatable'>
            <div className='container p-2'>
                <div className='mt-2 mb-2 font-size-2-h font-weight-2'>Patient Data Table</div>
                <div className='d-flex align-items-center gap-3 mt-1 mb-2'>
                    <div className='search-input d-flex align-items-center gap-3'>
                        <input placeholder='Search for Patient Name' className='p-1'/>
                        <div className='search-icon d-flex align-items-center justify-content-center'><FiSearch /></div>
                    </div>
                    <div>
                        <div className='update-many d-flex align-items-center justify-content-center' onClick={() => setIsOpen(true)}>
                            <GrDocumentUpdate />
                        </div>
                    </div>
                </div>
                <DataTable
                    columns={columns}
                    data={appointments}
                    pagination
                    highlightOnHover
                    striped
                    className='datatable-container'
                />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='date-inputs'>
                    <div>
                        <div className='font-weight-2'>Select Date:</div>
                        <div className='d-flex align-items-center gap-3 mt-1 mb-1 w-fill'>
                            <div className='w-fill'>
                                <div>Start Date:</div>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='input mt-1 mb-1' placeholderText='MM-DD-YYYY' />
                            </div>
                            <div className='w-fill'>
                                <div>End Date:</div>
                                <DatePicker disabled={startDate ? false : true} selected={endDate} onChange={(date) => setEndDate(date)} className={`input mt-1 mb-1 ${startDate ? '' : 'input-disabled cursor-not-allowed'}`} placeholderText='MM-DD-YYYY' />
                            </div>
                        </div>
                        <div className='font-weight-2'>Select Time:</div>
                        <div className='d-flex align-items-center gap-3 mt-1 mb-1'>
                            <div className='w-fill'>
                                <div>Start Time:</div>
                                <TimePicker onChange={handleStartTimeChange} format={format} minuteStep={15} className='input mt-1 mb-1' placeholder='--:--'/>
                            </div>
                            <div className='w-fill'>
                                <div>End Time:</div>
                                <TimePicker disabled={timeValueStart ? false : true} onChange={handleEndTimeChange} format={format} minuteStep={15} className={`input mt-1 mb-1 ${timeValueStart ? '' : 'input-diabled'}`} placeholder='--:--'/>
                            </div>
                        </div>
                        <div className='font-weight-2'>Status:</div>
                        <select className='select-input mt-1 mb-1' onChange={(e) => setStatus(e.target.value)}>
                            <option>Select Status</option>
                            <option value={'Completed'}>Completed</option>
                            <option value={'No-Show'}>No Show</option>
                        </select>
                        <div className='d-flex align-items-center gap-3 mt-3 mb-3'>
                            <button className={`${startDate ? 'cursor-pointer save-btn' : 'cursor-not-allowed save-btn-disabled'}`} onClick={handleSave} disabled={startDate ? false : true}>
                                Save
                            </button>
                            <button className='clear-btn cursor-pointer' onClick={handleClear}>
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default AppointmentDataTable;