import React, { useEffect, useState } from 'react';
import form_banner from '../../../../assets/imgs/booking/form_banner.jpg';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { bookingDetails } from '../../../../redux/actions/bookingDetailsAction';
import { useNavigate } from 'react-router-dom';
import { APPOINTMENT_PAGE } from '../../../../helpers/route-paths/Paths';
import { getLabTest } from '../../../../redux/actions/labTestAction';

const BookingForm = () => {

  const { labTest } = useSelector(state => state.labTestState);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [test, setTest] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLabTest())
  }, [])

  const handleInputSubmit = (e) => {
    e.preventDefault()
    const payloads = {
      first_name: firstName,
      last_name: lastName,
      gender,
      age,
      email,
      phone_number: phoneNumber,
      test
    }
    dispatch(bookingDetails(payloads))
    navigate(APPOINTMENT_PAGE);
  }

  return (
    <div className='booking-form'>
      <div className='booking-form-container container-strong d-flex align-items-center gap-10 mt-5 mb-5'>
        <div className='form'>
          <form onSubmit={handleInputSubmit}>

            <div className='heading'>
              <div>
                Make Appointment
              </div>
            </div>
            <div className='name-inputs'>
              <input placeholder='First Name' className='input' onChange={(e) => setFirstName(e.target.value)} />
              <input placeholder='Last Name' className='input' onChange={(e) => setLastName(e.target.value)} />
            </div>
            <select className='input' onChange={(e) => setGender(e.target.value)}>
              <option disabled>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer Not to Say</option>
            </select>
            <input placeholder='Age' className='input' onChange={(e) => setAge(e.target.value)} />
            <input placeholder='Email Address' className='input' onChange={(e) => setEmail(e.target.value)} />
            <input placeholder='Phone Number' className='input' onChange={(e) => setPhoneNumber(e.target.value)} />
            <select className='input' onChange={(e) => setTest(e.target.value)}>
              <option disabled>Test</option>
              {labTest?.map(test => {
                return (
                  <option value={test._id}>{test.testName}</option>
                )
              })}
            </select>
            <div>
              <button className='btn' type='submit'>
                Book Now
              </button>
            </div>
          </form>
        </div>
        <div className='container-2'>
          <div className='mt-2 mb-2 font-size-3-h font-weight-2 heading'>
            WELCOME TO LIMS
          </div>
          <div className='mt-2 mb-2 font-size-2-h font-weight-2'>
            Find Best Doctors With LIMS
          </div>
          <div className='mt-2 mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.s
          </div>
        </div>
        <div className='form-banner'>
          <div className='img'>
            <img src={form_banner} alt='form-banner' />
          </div>
          <div className='shape-1'></div>
          <div className='shape-2'></div>
        </div>
      </div>
    </div>
  )
}

export default BookingForm