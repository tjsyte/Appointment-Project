// src/components/AppointmentBooking.js
import React, { useState } from 'react';

const AppointmentBooking = () => {
    const [doctor, setDoctor] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmation = window.confirm(`Book appointment with Dr. ${doctor} on ${date} at ${time}?`);
        if (confirmation) {
            alert(`Appointment booked with Dr. ${doctor} on ${date} at ${time}`);
        }
    };


    return (
        <div>
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Doctor:
                    <input
                        type="text"
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Date:
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Time:
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentBooking;
