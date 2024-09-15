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
- **API Testing**: Postman
