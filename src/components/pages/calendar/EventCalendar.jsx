import React from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/sass/styles.scss';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

const localizer = dayjsLocalizer(dayjs);

const EventCalendar = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
      />
    </div>
  )
}

export default EventCalendar;