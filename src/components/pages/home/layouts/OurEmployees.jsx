import React from 'react';
import woman_testing from '../../../../assets/imgs/home/woman-testing.png';

const OurEmployees = () => {
    return (
        <div>
            <div className='our-employees-container'>
                <div className='shape-container'>
                    <div className='shape-1'></div>
                    <div className='shape-2'></div>
                </div>
            </div>
            <div className='our-employees container-strong d-flex align-items-center justify-content-space-between'>
                <div className='content'>
                    <div className='mt-4 mb-4 font-size-4 font-weight-2 text-transform-uc'>
                        Skilled Laboratory Testing Experts
                    </div>
                    <div className='mt-4 mb-4 font-size-2-h font-weight-2 text-align-justify'>
                        We have Experienced Laboratory Testing Professionals and Our exceptional testers excel in their field.
                    </div>
                    <div className='mt-4 mb-4 custom-font text-align-justify'>
                        Vivamus venenatis, ipsum at ultrices malesuada, sapien tortor bibendum est, vel lacinia eros risus nec tortor. Vivamus a ullamcorper libero, in placerat elit. Nunc sed mi vel purus posuere iaculis. Integer id justo et justo dictum iaculis a vel odio.
                    </div>
                    <div>
                        <button>
                            Book Now
                        </button>
                    </div>
                </div>
                <div className='img'>
                    <img src={woman_testing} alt='Woman-Testing' />
                </div>
            </div>
        </div>
    )
}

export default OurEmployees;