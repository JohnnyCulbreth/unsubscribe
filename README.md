<img width="1438" alt="Screen Shot 2023-04-21 at 3 35 17 PM" src="https://user-images.githubusercontent.com/102640510/233733200-41fe202b-d163-4c70-a6fc-22864f3947c7.png">

# Unsubscribe Form

This web application is a simple and efficient unsubscribe form for email recipients who wish to be removed from a mailing list. Built using React, Material-UI, and Express, the app allows users to enter their email address and submit it for removal. Upon successful submission, users are given the option to mark the email as spam as well.

## Features
- Responsive design that adapts to various screen sizes
- Clean and user-friendly interface with clear instructions
- Error handling and user feedback for form submission
- Express backend with MongoDB for storing email addresses
- Easy deployment to Heroku

## Technologies Used
- React (with hooks) for the front-end
- Material-UI for a professional UI design
- Express for creating the server-side API
- MongoDB for storing the submitted email addresses
- Heroku for hosting and deployment

## How to Run Locally
1. Clone the repository to your local machine
2. Run `npm install` in the project directory to install dependencies
3. Set up a `.env` file in the root folder with the MongoDB connection string as `MONGO_URI`
4. Run `npm start` to start the Express server
5. In another terminal, navigate to the `src` folder and run `npm start` to start the React app
6. Open `http://localhost:3000` in your browser to access the app

## Deployment to Heroku
This application is ready for deployment to Heroku. Make sure you have the Heroku CLI installed and configured.

1. Create a new Heroku app by running `heroku create your-app-name`
2. Set the `MONGO_URI` config variable with your MongoDB connection string using `heroku config:set MONGO_URI=your_mongo_uri`
3. Push your changes to Heroku with `git push heroku master`
4. Your app should now be live on `https://your-app-name.herokuapp.com/`
