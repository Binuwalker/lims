import React, { useEffect, useState } from 'react';
import { BiLogoFacebook, BiLogoInstagramAlt } from 'react-icons/bi'
import { GrMail } from 'react-icons/gr';
import { HiPhone } from 'react-icons/hi';
import logo from '../../../../assets/icons/logo.png';
import FaXTwitter from '../../../../assets/icons/FaXTwitter';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ABOUT_PAGE, ADMIN_DATA_TABLE_PAGE, APPOINTMENT_PAGE, CONTACT_PAGE, HOME_PAGE, TEST_PAGE } from '../../../../helpers/route-paths/Paths';
import Logo from '../../../../assets/icons/Logo';

const TopBar = () => {

  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`top-bar ${isSticky ? 'sticky' : ''} container-strong-padding ${location.pathname === APPOINTMENT_PAGE || location.pathname === ADMIN_DATA_TABLE_PAGE ? 'inherit' : 'absolute'}`}>
      <div className='top-bar-logo' onClick={() => navigate(HOME_PAGE)}>
        <img src={logo} alt='logo' />

      </div>
      <div className='d-flex align-items-center gap-10'>
        <div className='links-group-a'>
          <div className='link'><Link to={HOME_PAGE} className={`text-decoration-none ${isSticky || location.pathname === APPOINTMENT_PAGE || location.pathname === ADMIN_DATA_TABLE_PAGE ? 'ternary-color' : 'text-color-primary'} `}>Home</Link></div>
          <div className='link'><Link to={ABOUT_PAGE} className={`text-decoration-none ${isSticky || location.pathname === APPOINTMENT_PAGE || location.pathname === ADMIN_DATA_TABLE_PAGE ? 'ternary-color' : 'text-color-primary'} `}>About Us</Link></div>
          <div className='link'><Link to={CONTACT_PAGE} className={`text-decoration-none ${isSticky || location.pathname === APPOINTMENT_PAGE || location.pathname === ADMIN_DATA_TABLE_PAGE ? 'ternary-color' : 'text-color-primary'} `}>Contact Us</Link></div>
        </div>
        <div className='links-group-b'>
          <div className='link'><Link to={TEST_PAGE} className={`text-decoration-none ${isSticky || location.pathname === APPOINTMENT_PAGE || location.pathname === ADMIN_DATA_TABLE_PAGE ? 'ternary-color' : 'text-color-primary'} `}>Test</Link></div>
        </div>
        <div className="vr"></div>
        <div className={`links-group-c text-decoration-none ${isSticky || location.pathname === APPOINTMENT_PAGE || location.pathname === ADMIN_DATA_TABLE_PAGE ? 'ternary-color' : 'text-color-primary'} `}>
          <div className='group-b'>
            <div className='link-mail'><span className='icon'><GrMail /></span></div>
            <div className='link-fb'><span className='icon'><BiLogoFacebook /></span></div>
            <div className='link-insta'><span className='icon'><BiLogoInstagramAlt /></span></div>
            <div className='link-x'><span className='icon'><FaXTwitter /></span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar;