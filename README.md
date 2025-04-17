# Yooyyaa Immigration Consulting Website

This project is a fully structured and responsive website designed for **Yooyyaa Immigration Consulting Services**, a company that provides professional immigration guidance. The site was built to establish the client's digital presence and help clients access relevant services and information in an organized, user-friendly format.

## Overview

Designed and developed this website using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The site includes:

- A dynamic homepage
- Detailed service pages (study permits, work visas, sponsorships, permanent residency)
- An FAQ section
- About Us and Contact Us pages
- Legal compliance pages (Privacy Policy and Terms of Service)
- Mobile responsiveness
- Basic admin panel framework
- SEO optimization

---

## Features

- **High-Fidelity UI**: Built based on carefully designed wireframes for responsiveness and accessibility.
- **Admin Panel (in progress)**: Admin landing page developed; login & content editing features partially implemented.
- **SEO Optimization**: Meta tags and accessibility best practices integrated.
- **Responsive Design**: Fully optimized for mobile and desktop.
- **Form Submission Setup**: Contact form connected via email API (Gmail App Passwords used for security).

---

## Installation & Setup

1. **Clone the repo**  
   ```bash
   git clone https://git.cs.dal.ca/courses/csci-x691/yooyyaa-immigration.git
   cd yooyyaa-immigration/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the frontend**
   ```bash
   npm start
   ```

4. The application will run at:  
   [http://localhost:5173](http://localhost:5173)

> **Note:** Ensure you have Node.js and npm installed.

---

## Admin Panel Status

- **Path**: `/adminLanding`
- **Login**: Static (username/password, no secure authentication yet)
- **Features in Progress**:
  - Inline editing of FAQ, About Us, and Services content
  - JWT authentication
  - Role-based access control

---

## ⚠Known Issues

- Some UI elements have inconsistent margins/fonts.
- Hosting is not yet completed (to be done via Render or similar).
- Placeholder content is present due to incomplete client input.
- Admin panel editing functionality is incomplete.

---

## Future Improvements

- Deploy the full stack app using **Render** or **Vercel**
- Secure the admin panel with **JWT authentication**
- Replace all placeholders with finalized client content
- Enable **multilingual support** (e.g., French)
- Add **live chat** or AI chatbot support

---

## Lessons Learned

Working on this project taught me:
- Full MERN stack development from scratch
- Creating scalable UI/UX with React
- Git collaboration best practices and resolving conflicts
- Integrating secure email systems using Gmail App Passwords
- Navigating real-world project constraints like client unresponsiveness

---

## Resources Used

- [MongoDB MERN Stack Guide](https://www.mongodb.com/resources/languages/mern-stack-tutorial)
- [React Documentation - W3Schools](https://www.w3schools.com/react/react_getstarted.asp)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [NodeMailer Gmail App Passwords Setup](https://youtu.be/4nKWREmCvsE)

---

## Author

**Satvik Gahlot**  
3rd Year Computer Science Student  
Dalhousie University  
 [LinkedIn](https://www.linkedin.com/in/satvikgahlot)
