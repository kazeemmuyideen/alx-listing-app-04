# ALX Listing App - Booking Detail Page

## 📌 Project Overview
This project implements a **responsive Booking Detail Page** for the ALX Listing App.  
It allows users to:
- Enter **contact** and **payment details**
- Review **booking details** and **order summary**
- View **cancellation policy** and **ground rules**
- Confirm and pay for their booking

The page is built with **Next.js** and **Tailwind CSS**, and is fully responsive for desktop and mobile devices.

---

## 🎯 Objective
Create a **functional and responsive booking page** based on the provided mockup, where users can input booking details, review their order, and proceed with payment.

---

## 📂 Folder Structure
## 📂 Project Structure

alx-listing-app/
├── components/ # Stores Reusable Component
│   └── common/
│       ├── Button.tsx    # Reusable Button component
│       └── Card.tsx      # Reusable Card component for listings
├── constants/
│   └── index.ts          # Stores global constants (e.g., API URLs, site config)
├── interfaces/
│   └── index.ts          # Central hub for all TypeScript interfaces (Props, data models)
├── pages/
│   ├── _app.tsx
│   └── index.tsx         # The main homepage, using the Pages Router
├── public/
│   └── assets/           # Static assets like images, icons, and SVGs
├── styles/
│   └── globals.css       # Global styles and Tailwind CSS directives
├── .eslintrc.json        
├── next.config.js        
├── package.json          
└── tailwind.config.js    



---

## 🛠 Features

### 1. **Booking Form (`BookingForm.tsx`)**
- Collects **Contact Information**:
  - First Name, Last Name
  - Email, Phone Number
- Collects **Payment Information**:
  - Card Number, Expiration Date, CVV
- Collects **Billing Address**:
  - Street Address, Apt/Suite, City, State, Zip Code, Country
- Styled using Tailwind CSS

---

### 2. **Order Summary (`OrderSummary.tsx`)**
- Displays:
  - Property name, image, review score
  - Stay details (start date, number of nights)
  - Price breakdown:
    - Booking Fee
    - Subtotal
    - Grand Total

---

### 3. **Cancellation Policy & Ground Rules (`CancellationPolicy.tsx`)**
- **Cancellation Policy**:
  - Free cancellation before a certain date
  - Partial refund after that date
- **Ground Rules**:
  - Follow house rules
  - Treat the host’s home with respect

---

## 📄 Example Booking Data
```ts
const bookingDetails = {
  propertyName: "Villa Arrecife Beach House",
  price: 7500,
  bookingFee: 65,
  totalNights: 3,
  startDate: "24 August 2024",
};

💻 Usage
Clone the repository

bash
Copy
Edit
git clone https://github.com/<your-username>/alx-listing-app-03.git
cd alx-listing-app-03
Install dependencies

bash
Copy
Edit
npm install
Run the development server

bash
Copy
Edit
npm run dev
Open in browser

bash
Copy
Edit
http://localhost:3000/booking
🎨 Technologies Used
Next.js - React Framework

Tailwind CSS - Utility-first CSS

TypeScript

