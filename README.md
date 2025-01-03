# Medify - Online Medical Centers Finder

Medify is a modern React-based web application that helps users connect instantly with medical centers, specialists, and health services. Users can search for medical facilities by state and city, view specializations, and book appointments effortlessly.

---

## 🚀 Features

### 🌟 Core Features
- **Search Medical Centers:** Locate medical facilities by selecting state and city.
- **Book Appointments:** Users can book appointments for medical centers with date and time selection.
- **Specializations:** Browse through services like Dentistry, Cardiology, MRI, etc.
- **Responsive Design:** Fully responsive design to ensure a seamless experience across devices.
- **Carousel for Offers:** Display special offers in a visually appealing carousel.
- **Caring Section:** Informative content for patient care.
- **FAQ Section:** Frequently asked questions to assist users.

### 🏥 Technologies Used
- **React.js:** Component-based architecture.
- **Redux Toolkit:** State management for managing data flow.
- **React Router:** Enables dynamic routing.
- **Axios:** For making API requests.
- **CSS Modules:** Organized and maintainable styling.

---

## 🖥️ Project Setup

### Prerequisites
- Node.js >= 14.x
- npm or yarn package manager
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/medify.git
   ```
2. Navigate to the project directory:
   ```bash
   cd medify
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## 🔧 Project Structure

```
Medify/
│
├── public/                  # Public assets
│   ├── index.html           # Main HTML file
│   └── favicon.ico          # App icon
│
├── src/
│   ├── assets/              # Images and icons
│   ├── components/          # Reusable components
│   ├── pages/               # Page components
│   ├── redux/               # Redux slices and store
│   ├── styles/              # CSS files
│   ├── App.js               # Root React component
│   ├── index.js             # Entry point
│   └── routes.js            # Routing configuration
│
└── package.json             # Dependencies and scripts
```

---

## 📖 Usage

### Searching for Medical Centers
1. Select a state and city from the dropdown menus.
2. Click the "Search" button to view available medical centers.

### Booking an Appointment
1. Click "Book Appointment" for a medical center.
2. Select a date and time from the available options.
3. Confirm the booking to save your appointment.

### Viewing Your Bookings
1. Navigate to the "My Bookings" page.
2. View a list of your appointments, including hospital details, date, and time.

---

## 🌐 API Reference

The app uses the following API endpoints:

- **States API:** `/api/states`
- **Cities API:** `/api/cities?state=<state>`
- **Medical Centers API:** `/api/data?state=<state>&city=<city>`

---

## 🛠️ Development

### Adding New Specializations
1. Add the specialization details (icon and title) to the `specialisationItems` array in the `LandingPage` component.

### Updating Styling
All CSS files are stored in the `styles/` directory. Update or create new styles as necessary.

---

## 👨‍💻 Contributors

- **Your Name** - [GitHub Profile](https://github.com/your-username)

Feel free to contribute by submitting pull requests or reporting issues.

---

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎯 Future Enhancements

- Add user authentication for personalized booking management.
- Enable cancellation and rescheduling of appointments.
- Introduce multi-language support.
- Create a mobile app version.

---
