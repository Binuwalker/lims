import React from 'react';
import { TiGroup } from 'react-icons/ti';
import { BsCalendarDate } from 'react-icons/bs';
import { MdOutlineContacts } from 'react-icons/md';
import { BOOKING_PAGE } from '../../../../helpers/route-paths/Paths';
import { useNavigate } from 'react-router-dom';

const DetailsCard = () => {
  
    const navigate = useNavigate();
  
    return (
        <div className='details-card container-basic'>
            <div className='details-card-position d-flex align-items-center justify-content-space-between'>
                <div className='card p-5'>
                    <div className='d-flex align-items-center justify-content-center font-size-6'>
                        <TiGroup />
                    </div>
                    <div className='mt-4 mb-4 font-size-2 font-weight-2 text-align-center text-transform-uc'>
                        Who We Are? 
                    </div>
                    <div className='mt-4 mb-4 font-size-1-h text-align-justify'>Phasellus sollicitudin, dolor eu convallis varius, neque arcu feugiat nisi, in posuere justo erat vel purus.</div>
                    <div>
                        <button className='card-btn'>
                            About Us
                        </button>
                    </div>
                </div>
                <div className='card-max p-5'>
                    <div className='d-flex align-items-center justify-content-center font-size-6'>
                        <BsCalendarDate />
                    </div>
                    <div className='mt-4 mb-4 font-size-2 font-weight-2 text-align-center text-transform-uc'>
                        Do you want to make an Appointment?
                    </div>
                    <div className='mt-4 mb-4 font-size-1-h text-align-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet quam vel tincidunt varius.
                    </div>
                    <div>
                        <button className='card-btn' onClick={() => navigate(BOOKING_PAGE)}>Book Now</button>
                    </div>
                </div>
                <div className='card p-5'>
                    <div className='d-flex align-items-center justify-content-center font-size-6'>
                        <MdOutlineContacts />
                    </div>
                    <div className='mt-4 mb-4 font-size-2 font-weight-2 text-align-center text-transform-uc'>
                        Contact Our Care Team Now
                    </div>
                    <div className='mt-4 mb-4 font-size-1-h text-align-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam a arcu interdum luctus. Praesent in pharetra libero.
                    </div>
                    <div>
                        <button className='card-btn'>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsCard