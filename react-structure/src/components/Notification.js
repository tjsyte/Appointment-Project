// src/components/Notification.js
import React, { useState, useEffect } from 'react';

const Notification = () => {
    const [message, setMessage] = useState('You have a new notification!');

    useEffect(() => {
        const timer = setInterval(() => {
            setMessage('You have a new notification!');
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ padding: '10px', backgroundColor: '#fffae5', border: '1px solid #ddd' }}>
            <p>{message}</p>
        </div>
    );
};

export default Notification;
