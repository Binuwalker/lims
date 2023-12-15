import React from 'react';
import make_appointment_bg from '../../../../assets/imgs/home/make_appointment_bg.jpg';

const MakeAppointment = () => {
    return (
        <div className='make-appointment'>
            <div className='container-strong d-flex align-items-center justify-content-center gap-10'>
                <div className='img d-flex align-items-center justify-content-center'>
                    <div>
                        <img src={make_appointment_bg} alt='make-appointment-bg' />
                    </div>
                    <div className='shape'></div>
                </div>
                <div className='form'>
                    <div className='heading'>
                        <div>
                            Make Appointment
                        </div>
                    </div>
                    <form>
                        <input placeholder='First Name' />
                        <input placeholder='Last Name' />
                        <input placeholder='Gender' />
                        <input placeholder='Age' />
                        <input placeholder='Email Address' />
                        <input placeholder='Phone Number' />
                        <input placeholder='Test' />
                        <div>
                            <button>
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MakeAppointment;