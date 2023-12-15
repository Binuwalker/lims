import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../common/header/Header';
import { ABOUT_PAGE, ADMIN_DATA_TABLE_PAGE, APPOINTMENT_PAGE, BOOKING_PAGE, CANCEL_PAGE, HOME_PAGE } from '../../../helpers/route-paths/Paths';
import Home from '../../pages/home/Home';
import Footer from '../../common/footer/Footer';
import Scroller from '../../common/scroller/Scroller';
import About from '../../pages/about/About';
import Cancel from '../../pages/cancel/Cancel';
import Booking from '../../pages/booking/Booking';
import Appointment from '../../pages/appointment/Appointment';
import AppointmentDataTable from '../../private/appointment-datatable/AppointmentDataTable';

const Pages = () => {

  return (
    <Router>
      <Header />
      <Routes>

        {/* Default Pages */}

        <Route path={HOME_PAGE} element={<Home />} />
        <Route path={ABOUT_PAGE} element={<About />} />
        <Route path={CANCEL_PAGE} element={<Cancel />} />
        <Route path={BOOKING_PAGE} element={<Booking />} />
        <Route path={APPOINTMENT_PAGE} element={<Appointment />} />

        {/* Admin Pages */}

        <Route path={ADMIN_DATA_TABLE_PAGE} element={<AppointmentDataTable />} />

      </Routes>
      <Footer />
      <Scroller />
    </Router>
  )
}

export default Pages;