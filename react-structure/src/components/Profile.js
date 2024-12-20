// src/components/Profile.js
import React, { useState } from 'react';

const Profile = () => {
    const [username, setUsername] = useState('JohnDoe');
    const [email, setEmail] = useState('johndoe@example.com');

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        if (!username || !email) {
            alert('All fields must be filled out');
            return;
        }
        alert('Profile updated successfully!');
    };


    return (
        <div>
            <h2>Profile Management</h2>
            <form onSubmit={handleProfileUpdate}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
