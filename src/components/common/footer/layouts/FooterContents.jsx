import React from 'react';
import logo from '../../../../assets/icons/logo.png';
import { AiOutlineSend } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ABOUT_PAGE, HOME_PAGE } from '../../../../helpers/route-paths/Paths';

const FooterContents = () => {
    return (
        <div className='footer-contents pt-10 pb-10'>
            <div className='container'>
                <div className='d-flex justify-content-space-between'>
                    <div>
                        <div className='mt-3 mb-3'>
                            <img src={logo} alt='SGI_DARK' className='logo' />
                        </div>
                        <div className='contact-details text-color-grey-300 mt-1 mb-1'>
                            <div className='m-1-h'>4533, Stutler Lane, Ohio, United States</div>
                            <div className='m-1-h'>+1 814-495-9376</div>
                            <div className='m-1-h'>reachus@lims.com</div>
                        </div>
                    </div>
                    <div>
                        <div className='font-size-2-h font-weight-1 text-color-ternary m-2 mt-4 mb-4'>QUICK LINKS</div>
                        <div className='m-2 mt-2 mb-2'>
                            <span className='links'>
                                <Link to={HOME_PAGE} className='quick-link text-decoration-none text-color-grey-300'>Home</Link>
                            </span>
                        </div>
                        <div className='m-2 mt-2 mb-2'>
                            <span className='links'>
                                <Link to={ABOUT_PAGE} className='quick-link text-decoration-none text-color-grey-300'>About Us</Link>
                            </span>
                        </div>
                        <div className='text-color-grey-300 m-2 mt-2 mb-2'>
                            <span className='links'>
                            <Link className='quick-link text-decoration-none text-color-grey-300'>Contact Us</Link>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className='font-size-2-h font-weight-1 text-color-ternary m-2 mt-4 mb-4'>SUPPORTS</div>
                        <div className='text-color-grey-300 m-2 mt-2 mb-2'><span className='links'>Help & Support</span></div>
                        <div className='text-color-grey-300 m-2 mt-2 mb-2'><span className='links'>FAQ</span></div>
                        <div className='text-color-grey-300 m-2 mt-2 mb-2'><span className='links'>Our Updates</span></div>
                    </div>
                    <div className='min-w-3 max-w-3'>
                        <div className='font-size-2-h font-weight-1 text-color-ternary m-2 mt-4 mb-4'>STAY IN LOOP</div>
                        <div className='text-color-grey-300 m-2 mt-2 mb-2'>Subscribe to our website to receive the latest updates and news directly to your inbox.</div>
                        <div className='d-flex align-items-center m-2 mt-2 mb-2'>
                            <input className='mail-input' />
                            <button className='mail-btn d-flex align-items-center justify-content-center font-size-2-h'><AiOutlineSend /></button>
                        </div>
                        <div className='d-flex align-items-center gap-6 m-2 mt-1 mb-1 font-size-3 text-color-grey-100'>
                            <div className='cursor-pointer'>
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className="cursor-pointer">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div className="cursor-pointer">
                                <i className="fa-brands fa-yelp"></i>
                            </div>
                            <div className="cursor-pointer">
                                <i className="fa-brands fa-x-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterContents