import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Calendar = () => {
    return (
        <div className='w-75 d-block mx-auto mt-5'>
            <div>
                <DayPicker
                />
            </div>
        </div>
    );
};

export default Calendar;