# Appointment Project Prototype

## Description
This project includes a basic web application with form-based structures for both HTML and React components. The HTML part includes a sign-up and login page, while the React part features appointment booking, profile management, and notifications.

---

## HTML Structure

### index.html
This is the main HTML file that contains the structure of the page, including the navigation bar, and sections for the sign-up and login forms. The page is styled with an external `styles.css` file that provides basic layout and responsiveness.

The structure includes:
- **Navbar**: A navigation menu with links to Home, Sign Up, Login, and Profile sections.
- **Sign-Up Form**: Allows users to create a new account with username, password, and confirmation fields.
- **Login Form**: Allows users to log in with their username and password.

### styles.css
This file contains the styling for the HTML structure, providing basic layout, colors, padding, and responsiveness. It ensures that the page looks good on both desktop and mobile devices.

---

## React Structure

### App.js
This is the main React component that renders three other components:
- **Notification**: Displays a notification message that updates every 5 seconds.
- **AppointmentBooking**: A form for booking appointments with a doctor, including fields for doctor name, date, and time.
- **Profile**: A form for managing user profile information, such as username and email.

### AppointmentBooking.js
This component allows users to book an appointment by filling out a form with the doctor's name, appointment date, and time. Upon form submission, a confirmation message is shown, and the appointment is booked.

### Profile.js
This component allows users to update their profile information (username and email). It includes basic form validation to ensure that all fields are filled out before submission.

### Notification.js
This component displays a notification message at the top of the page, updating every 5 seconds. It uses React's `useState` and `useEffect` hooks to manage and update the message.

---

## Installation

### HTML Project
1. Clone or download the HTML project files.
2. Open the `index.html` file in your browser.

### React Project
1. Clone or download the React project files.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install dependencies.
4. Start the development server by running `npm start`.
5. Open the browser and visit `http://localhost:3000` to see the React app in action.

---

## Features
- **Responsive Layout**: Both the HTML and React components are designed to be responsive and look good on all screen sizes.
- **User Registration and Login**: Users can sign up and log in through form-based interfaces.
- **Appointment Booking**: Users can book an appointment by filling out a form with their preferred doctor, date, and time.
- **Profile Management**: Users can update their profile information, including username and email.
- **Notifications**: A notification is displayed to users every 5 seconds.

---

## Technologies Used
- **HTML/CSS**: For the static website structure and styling.
- **React**: For building interactive and dynamic UI components.
- **JavaScript**: For client-side interactivity and form handling.

---

## License
This project is open-source and available under the [MIT License](LICENSE).
