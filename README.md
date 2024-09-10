# PayAH18

PayAH18 is a full-stack financial platform built using React, Tailwind CSS, Express, MongoDB, and JWT (JSON Web Token) for authentication. This project allows users to sign up, receive a starting balance, and send money to other registered users on the platform.

## Features

1. **User Authentication**: 
   - Users can sign up and log in using JWT-based authentication.
   - Each user's session is secure, and sensitive data is protected.

2. **Random Balance Generation**:
   - Upon signing up, users receive a random balance ranging from Rs. 0 to Rs. 10,000.
   - This balance is credited to their account for transactions within the platform.

3. **Send Money to Users**:
   - Users can view a list of registered users and send money to anyone whose profile is available on the platform.
   - Transactions are reflected in real time.

4. **Dashboard**:
   - A user dashboard displays the current balance and allows users to search for other users to send money.
   - Simple and intuitive UI built with React and styled using Tailwind CSS.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing user data and transactions)
- **Authentication**: JWT (JSON Web Tokens) for secure login and session management
- **API Testing**: Postman or any API testing tool

## Setup Instructions

### Prerequisites

- Node.js installed (version >= 14.x)
- MongoDB installed and running locally or a cloud-based MongoDB connection (MongoDB Atlas)
- Git installed

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/username/payAH18.git
   cd payAH18
   ```

2. **Install Dependencies**

   Navigate to both the `frontend` and `backend` directories and install the required packages:

   ```bash
   # For Backend
   cd backed
   npm install

   # For Frontend
   cd ../frontend
   npm install
   ```

3. **Setup Environment Variables**

   In the `server` folder, create a `.env` file and add the following environment variables:

   ```
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   ```

4. **Run the Application**

   You need to run both the frontend and backend simultaneously.

   - **Start the Backend**:

     ```bash
     cd server
     npm start
     ```

   - **Start the Frontend**:

     ```bash
     cd client
     npm start
     ```

   Open `http://localhost:3000` to view the app in your browser.
