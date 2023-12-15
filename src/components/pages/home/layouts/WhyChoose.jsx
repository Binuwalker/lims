import React from 'react';
import { GiMicroscope } from 'react-icons/gi';
import { FaUserDoctor } from 'react-icons/fa6';
import { BsHeartPulse } from 'react-icons/bs';
import { GrCertificate } from 'react-icons/gr';

const WhyChoose = () => {
    return (
        <div className='why-choose'>
            <div className='container-strong mt-2 mb-2 d-flex align-items-center justify-content-center font-size-3 font-weight-2'>
                <div>
                    WHY CHOOSE US?
                </div>
            </div>
            <div className='container-strong d-flex justify-content-center gap-10  mt-4 mb-4'>
                <div>
                    <div className='ic d-flex align-items-center justify-content-center mt-3 mb-3 font-size-8'>
                        <GiMicroscope />
                    </div>
                    <div className='mt-2 mb-2 font-size-3 font-weight-2 text-align-center'>
                        Advanced equipment
                    </div>
                    <div className='mt-2 mb-2 text-align-justify content'>
                        Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.
                    </div>
                </div>
                <div>
                    <div className='ic d-flex align-items-center justify-content-center mt-3 mb-3 font-size-8'>
                        <FaUserDoctor />
                    </div>
                    <div className='mt-2 mb-2 font-size-3 font-weight-2 text-align-center'>
                        Qualified doctors
                    </div>
                    <div className='mt-2 mb-2 text-align-justify content'>
                        Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.
                    </div>
                </div>
                <div>
                    <div className='ic d-flex align-items-center justify-content-center mt-3 mb-3 font-size-8'>
                        <GrCertificate />
                    </div>
                    <div className='mt-2 mb-2 font-size-3 font-weight-2 text-align-center'>
                        Certified Service
                    </div>
                    <div className='mt-2 mb-2 text-align-justify content'>
                        Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.
                    </div>
                </div>
                <div>
                    <div className='ic d-flex align-items-center justify-content-center mt-3 mb-3 font-size-8'>
                        <BsHeartPulse />
                    </div>
                    <div className='mt-2 mb-2 font-size-3 font-weight-2 text-align-center'>
                        Emergency care
                    </div>
                    <div className='mt-2 mb-2 text-align-justify content'>
                        Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose;