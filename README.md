# UniVerse Social Media Platform

UniVerse is a social media platform developed by Smit Trivedi that allows users to connect, share photos, posts, and engage with other users through likes, comments, and following. This project is built using the MERN (MongoDB, Express, React, Node.js) stack and follows the MVC (Model-View-Controller) architecture This site is live at https://project-universe.netlify.app/

**Please take note**: As a result of utilizing the free tier on the Render platform, the ability to utilize disk storage is not available. Additionally, when attempting to upload images, the visibility of these images is impaired. However, it's important to highlight that this functionality performs as expected when the project is run locally.

## Features

- User registration and login system.
- User profiles with the ability to upload photos and posts.
- Like and comment functionality for posts.
- Follow other users to see their posts on your feed.
- View user profiles and post details.


## Installation

1. Clone the repository:

git clone https://github.com/your-username/UniVerse.git

2. Install dependencies for both the client and server:

cd UniVerse/client
npm install

cd ../server
npm install


3. Configure the environment variables:

   - In the `server` directory, create a `.env` file and set up environment variables for the backend i.e (MONGO_URL, JWT_SECRET, PORT)

4. Run the application:

## In the server directory

npm start

- Once connected to Database remove commented code in index.js file at line 62 and 63 and comment it again, so user can see the dummy data. 

## In the client directory

npm start

5. Open your web browser and access the application at http://localhost:3000.

## Contributing

Contributions to UniVerse are welcome! If you find any bugs, have suggestions, or want to add new features, feel free to open an issue or submit a pull request.






