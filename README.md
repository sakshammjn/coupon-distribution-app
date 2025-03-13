# Coupon Distribution App

## Overview
The Coupon Distribution App is a live web application designed to distribute coupons to guest users in a round-robin manner. The application incorporates mechanisms to prevent abuse, ensuring that users cannot exploit the system by refreshing the page to claim multiple coupons.

## Features
- **Round-Robin Coupon Distribution**: Coupons are assigned sequentially to users to ensure even distribution.
- **Guest Access**: Users can access the system without the need for login or account creation.
- **Abuse Prevention**:
  - **IP Tracking**: Each user's IP address is recorded upon claiming a coupon, restricting subsequent claims from the same IP within a specified time frame (e.g., one hour).
  - **Cookie Tracking**: Cookies are used to monitor coupon claims from the same browser session.
- **User Feedback**: Clear messages are provided to indicate successful coupon claims or inform users of the time remaining before they can claim another coupon.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sakshammjn/coupon-distribution-app.git
   cd coupon-distribution-app
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the Application**:
   Start the application using:
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000`.

## Abuse Prevention Strategies
- **IP Tracking**: The application records the IP address of users when they claim a coupon. If a user attempts to claim another coupon from the same IP within the restricted time frame, they will receive a message indicating they must wait.
- **Cookie Tracking**: Cookies are set in the user's browser to track coupon claims. If a user tries to claim a coupon again within the restricted time, they will be informed of the cooldown period.

## Deployment
The application can be deployed to any live web server that supports Node.js. Ensure that the server is configured to handle incoming requests and that the necessary environment variables are set.

## Conclusion
This application provides a simple yet effective way to distribute coupons while preventing abuse. The combination of IP and cookie tracking ensures fair access for all users. For any issues or contributions, please feel free to open an issue or submit a pull request on the GitHub repository.