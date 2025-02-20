import React from 'react';
import CalendarEvents from '../components/CalendarEvents/CalendarEvents';
import Navbar from '../components/Navbar/Navbar';

const CalendarPage = () => {
    return (
        <section>
            <Navbar/>
            <CalendarEvents/>
        </section>
    );
};

export default CalendarPage;