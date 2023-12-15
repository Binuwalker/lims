import React from 'react';
import { BiTestTube } from 'react-icons/bi';
import { FaStethoscope } from 'react-icons/fa';
import { FaBriefcaseMedical } from 'react-icons/fa';

const TestBanner = () => {
    return (
        <div>
            <div className='test-banner-container'>
                <div className='shape'></div>
            </div>
            <div className='test-banner'>
                <div className='container-strong'>
                    <div className='heading mt-3 mb-3 font-size-5 font-weight-2'>
                        Testing for a Safer Tomorrow
                    </div>
                    <div className='content mt-3 mb-3 font-size-2 text-transform-uc'>Testing is the first step towards understanding and defeating viruses.</div>
                    <div className='d-flex align-items-center gap-8'>
                        <div className='ic-test-tube d-flex align-items-center justify-content-center font-size-4'>
                            <BiTestTube />
                        </div>
                        <div className='ic-stethoscope d-flex align-items-center justify-content-center font-size-3-h'>
                            <FaStethoscope />
                        </div>
                        <div className='ic-brieftcase-medical d-flex align-items-center justify-content-center font-size-3-h'>
                            <FaBriefcaseMedical />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestBanner;