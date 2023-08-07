# UniVerse Social Media Platform

UniVerse is a social media platform developed by Smit Trivedi that allows users to connect, share photos, posts, and engage with other users through likes, comments, and following. This project is built using the MERN (MongoDB, Express, React, Node.js) stack and follows the MVC (Model-View-Controller) architecture This site is live at https://project-universe.netlify.app/

**Please take note**: As a result of utilizing the free tier on the Render platform, the ability to utilize disk storage is not available. Additionally, when attempting to upload images, the visibility of these images is impaired. However, it's important to highlight that this functionality performs as expected when the project is run locally.
Additionaly on first hit of registration it will take time to load https://project-universe.netlify.app/ as render restart the server.

## Features

- User registration and login system with Authentication and Authorization.
- User profiles with the ability to upload photos and posts.
- Like and dislike functionality for posts.
- User can view comments if any.
- User can change theme as per their choice from Dark to Light and Light to Dark.
- User can add and remove friend.
- View other user profiles and post details.

## Tech Stack
The UniVerse website is built using the following technologies:

### Backend
- Node.js with Express as the server framework
- MongoDB for the database with Mongoose as the ODM
- JWT authentication (JSON web tokens) with HTTP-Only cookie
- bcryptjs for password hashing
- Multer for handling file uploads

### Frontend
- React with functional components & hooks
- React router for client-side routing
- Material-UI library 
- Redux Toolkit for state management
- Fetch API

## Installation

1. Clone the repository:

        git clone https://github.com/your-username/UniVerse.git

2. Install dependencies for both the client and server:

        cd UniVerse/client
        npm install

        cd ../server
        npm install


3. Configure the environment variables:

   - In the `server` directory, create a `.env` file and set up environment variables for the backend i.e (
     MONGO_URL = your mongo db URI 
     JWT_SECRET = yourjwtsecret 
     PORT = 3001)

1. Run the application:

## In the server directory

        npm start

 **Once connected to Database remove commented code in index.js file at line 62 and 63 and comment it again, so user can see the dummy data.** 

## In the client directory

        npm start

5. Open your web browser and access the application at http://localhost:3000.


## Folder Structure
The project's folder structure is organized as follows:

## Folder Structure

- Universe/
  - client/
    - node_modules/
    - public/
      - assets/
    - src/
      - components/
      - scenes/
      - states/
    - package.json
  - server/
    - controllers/
    - data/
    - middleware/
    - models/
    - node_modules/
    - public/
      - assets/
    - routes/
    - package.json
  - README.md


Libraries Used The following libraries are used in the backend and frontend respectively:

## Backend Dependencies

- **bcrypt**
- **body-parser**
- **cors**
- **dotenv**
- **express**
- **gridfs-stream**
- **helmet**
- **jsonwebtoken**
- **mongoose**
- **morgan**
- **multer**
- **multer-gridfs-storage**
- **nodemon**

## Frontend Dependencies

- **@emotion/react** (^11.11.1)
- **@emotion/styled** (^11.11.0)
- **@mui/icons-material** (^5.14.0)
- **@mui/material** (^5.14.0)
- **@reduxjs/toolkit** (^1.9.5)
- **@testing-library/jest-dom** (^5.16.5)
- **@testing-library/react** (^13.4.0)
- **@testing-library/user-event** (^13.5.0)
- **dotenv** (^16.3.1)
- **formik** (^2.4.2)
- **react** (^18.2.0)
- **react-dom** (^18.2.0)
- **react-dropzone** (^14.2.3)
- **react-redux** (^8.1.1)
- **react-router-dom** (^6.14.1)
- **react-scripts** (^5.0.1)
- **redux-persist** (^6.0.0)
- **web-vitals** (^2.1.4)
- **yup** (^1.2.0)



## Contributing

Contributions to UniVerse are welcome! If you find any bugs, have suggestions, or want to add new features, feel free to open an issue or submit a pull request.