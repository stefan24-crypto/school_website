import React, { FunctionComponent, useEffect, useState } from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { title } from 'process';

const localizaer = momentLocalizer(moment);

const CalendarEvents:  React.FC= () => {
    const [events, setEvents] = useState<any>([]);

    useEffect(() => {
        const exampleEvents = [
          {
            start: new Date("March 7, 2025 8:00:00"),
            end: new Date("March 7, 2025 14:00:00"),
            title: "Sports Day",
          },
          {
            start: new Date("February 25, 2025 10:00:00"),
            end: new Date("February 25, 2025 17:30:00"),
            title: "Premiership Cricket Round 7",
          },
          {
            start: new Date("March 6, 2025 10:00:00"),
            end: new Date("March 6, 2025 17:30:00"),
            title: "Premiership Cricket Round 8",
          },
          {
            start: new Date("March 11, 2025 10:00:00"),
            end: new Date("March 11, 2025 17:30:00"),
            title: "Premiership Cricket Round 9",
          },
        ];
        setEvents(exampleEvents);

    }, []);

    return (
        <section className='py-8'>
            <Calendar localizer={localizaer}
            startAccessor={"start"}endAccessor={"end"} style={{height: 500}} events={events}/>
        </section>
    );
};

export default CalendarEvents;