import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { IoMdTime } from 'react-icons/io';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { appointmentSubmit } from '../../../../redux/actions/bookingAction';
import { getSlots } from '../../../../redux/actions/slotsAction';
import { BOOKING_PAGE } from '../../../../helpers/route-paths/Paths';

const SelectDate = () => {

    function getDatesBetween(startDate, endDate) {
        const dates = [];
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1); // Increment the date by 1 day
        }

        return dates;
    }

    const currentDate = new Date();
    const endDate = new Date();
    endDate.setDate(currentDate.getDate() + 30);

    const datesBetween = getDatesBetween(currentDate, endDate);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { details } = useSelector(state => state.bookingDetailsState);
    const { slots } = useSelector(state => state.slotsState);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const user_name = details?.first_name

    console.log(slots)

    const timeSlotsAM = [
        '09:00 - 9:15',
        '09:15 - 9:30',
        '09:30 - 9:45',
        '09:45 - 10:00',
        '10:00 - 10:15',
        '10:15 - 10:30',
        '10:30 - 10:45',
        '10:45 - 11:00',
        '11:00 - 11:15',
        '11:15 - 11:30',
        '11:30 - 11:45',
        '11:45 - 12:00'
    ];

    const timeSlotsPM = [
        '13:00 - 13:15',
        '13:15 - 13:30',
        '13:30 - 13:45',
        '13:45 - 14:00',
        '14:00 - 14:15',
        '14:15 - 14:30',
        '14:30 - 14:45',
        '14:45 - 15:00',
        '15:00 - 15:15',
        '15:15 - 15:30',
        '15:30 - 15:45',
        '15:45 - 16:00',
        '16:00 - 16:15',
        '16:15 - 16:30',
        '16:30 - 16:45',
        '16:45 - 17:00'
    ]

    // Create an object to store grouped data
    const groupedData = {};

    // Iterate through the example array
    slots?.forEach(item => {
        const { booking_date, time_slot, status } = item;

        // Check if the booking_date already exists in groupedData
        if (groupedData[booking_date]) {
            // If it exists, push the time_slot and status to the existing array
            groupedData[booking_date].time_slots.push({ time_slot, status });
        } else {
            // If it doesn't exist, create a new entry with an array containing the time_slot and status
            groupedData[booking_date] = { booking_date, time_slots: [{ time_slot, status }] };
        }
    });

    // Convert the groupedData object values to an array
    const formattedTimeSlot = Object.values(groupedData);

    const handleConfirmation = () => {
        const lab_test_id = '6508ff5ce4b8f0c37bc3b1cf';
        const payloads = {
            first_name: details.first_name,
            last_name: details.last_name,
            gender: details.gender,
            age: details.age,
            email: details.email,
            phone_number: details.phone_number,
            booking_date: selectedDate,
            time_slot: moment(selectedTimeSlot.split(' ')[0], 'HH:mm').format('hh:mm')
        }
        dispatch(appointmentSubmit(lab_test_id, payloads));
    }

    useEffect(() => {
        if (!user_name) {
            navigate(BOOKING_PAGE)
        }
    }, [user_name])

    useEffect(() => {
        dispatch(getSlots());
    }, [dispatch])

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
    };

    console.log(selectedTimeSlot, 'open')

    return (
        <div className='select-date'>
            <div className='container-strong'>
                <div className='field-container'>
                    <div className='slot-pick-container'>
                        <div className='date-container'>
                            <div className='font-size-2-h font-weight-2'>Select Date</div>
                            <div className='p-2'>
                                <Slider {...settings}>
                                    {datesBetween.map(val => {
                                        return (
                                            <div className={`date-card ${moment(val).format('MM-DD-YYYY') === selectedDate ? 'active-date-card' : ''} d-flex align-items-center justify-content-center`} onClick={() => setSelectedDate(moment(val).format('MM-DD-YYYY'))}>
                                                <div>
                                                    <div className='text-align-center font-size-2-h  pb-1'>{moment(val).format('DD, MMM')}</div>
                                                    <div className='slot-status text-align-center'>Available</div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>
                        <div className='time-slots-container mt-2 mb-2'>
                            <div className='font-size-2-h font-weight-2'>Select Slot</div>
                            <div className='p-2'>
                                <div className='section-1'>
                                    <div className='d-flex align-items-center gap-1 pt-2 pb-2 custom-font'><IoMdTime className='font-size-2' /> Morning Slot</div>
                                    <div className='time-value-container'>
                                        {timeSlotsAM.map(time => {
                                            const findDate = formattedTimeSlot?.find(value => value.booking_date === selectedDate)
                                            const disableSlots = findDate?.time_slots?.find(value => value.time_slot === time.split('-')[0].trim() && value.status === 'Confirmed');
                                            return (
                                                <div className={`${disableSlots ? 'time-value-disabled' : 'time-value'} text-align-center ${time === selectedTimeSlot ? 'active-time-value' : ''}`} onClick={() => setSelectedTimeSlot(disableSlots ? '' : time)}>
                                                    {moment(time, 'HH:mm').format('hh:mm A')}
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                                <div className='section-2'>
                                    <div className='d-flex align-items-center gap-1 pt-2 pb-2 custom-font'><IoMdTime className='font-size-2' />  Afternoon Slot</div>
                                    <div className='time-value-container'>
                                        {timeSlotsPM.map(time => {
                                            const findDate = formattedTimeSlot.find(value => value.booking_date === selectedDate)
                                            const disableSlots = findDate?.time_slots.find(value => value === time.split(' - ')[0].trim());
                                            return (
                                                <div className={`${disableSlots ? 'time-value-disabled' : 'time-value'} text-align-center ${time === selectedTimeSlot ? 'active-time-value' : ''}`} onClick={() => setSelectedTimeSlot(disableSlots ? '' : time)}>
                                                    {moment(time, 'HH:mm').format('hh:mm A')}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className='confirmation-container d-flex align-items-center justify-content-center'>
                        <div className='summary'>
                            <div className='font-size-2 font-weight-2'>
                                Lab Test Details:
                            </div>
                            <div>
                                <div className='d-flex align-items-center gap-1 mt-2 mb-2'>
                                    Patient Name:
                                    <div className='d-flex align-items-center gap-1 font-weight-2'>
                                        <div>{details.first_name}</div>
                                        <div>{details.last_name}</div>
                                    </div>
                                </div>
                                <div className='details-container'>
                                    <div className='pt-1 pb-1'>Test Name:</div>
                                    <div className='details p-3 font-weight-2'>
                                        <div>Covid-19 test</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className='btn mt-3 mb-3' onClick={handleConfirmation}>
                                    Confirm Booking
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectDate;