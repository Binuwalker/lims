import React from 'react';
import TestBanner from './layouts/TestBanner';
import DetailsCard from './layouts/DetailsCard';
import OurEmployees from './layouts/OurEmployees';
import WhyChoose from './layouts/WhyChoose';
import MakeAppointment from './layouts/MakeAppointment';

const Home = () => {
    return (
        <div>
         <TestBanner />
         <DetailsCard />
         <OurEmployees />
         <WhyChoose />
         <MakeAppointment />
        </div>
    )
}

export default Home;