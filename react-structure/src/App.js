// src/App.js
import React from 'react';
import AppointmentBooking from './components/AppointmentBooking';
import Notification from './components/Notification';
import Profile from './components/Profile';

const App = () => {
    return (
        <div>
            <Notification />
            <AppointmentBooking />
            <Profile />
        </div>
    );
};

export default App;
