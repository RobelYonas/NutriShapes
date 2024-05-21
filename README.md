# NutriShape

Nutrishape is a comprehensive nutrition web application designed to help users manage their nutrition, achieve dietary goals, and maintain a healthy lifestyle through meal planning and tracking. The app features user registration and login, meal selection, daily calorie tracking, and an admin section for user management.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features
- User registration and login with JWT authentication
- Meal selection with calorie information and recipes
- Daily calorie counter to track dietary goals
- Admin section for user management (CRUD operations)
- Responsive design using React

## Technologies Used
- Frontend: React, React Router, Axios, Framer Motion, Styled Components
- Backend: Node.js, Express.js, Mongoose, Bcrypt, JSON Web Token (JWT)
- Database: MongoDB Atlas
- Other: dotenv, concurrently, module-alias


## Installation

### Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later)

### Clone the Repository
```bash
git git@github.com:engNesta/NutriShape.git
cd nutriShape
```

### Install Dependencies
```bash
npm install
```

## Running the Application
```bash
npm start
```

### Additional Notes

- **Ensure all dependencies**: Make sure all the necessary dependencies are listed in your `package.json`.
- **Environment Variables**: Double-check that the environment variables in the `.env` file are correct and match your setup.
- **Run Commands**: Ensure the run commands in the `scripts` section of `package.json` work as expected.

This README provides a clear overview of the project, instructions for installation, running the application, and contributing to the project. It should help users clone and set up the project on their local machines.
