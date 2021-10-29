# Project 02 - React Trails App

# Context

This project is a revisit and re-implementation of some of the existing trail documentation applications in the market. The goal is to create a single application that can be used to display and search for trail information. Most of the existing applications are either outdated or not user friendly and good information is behind paywalls. User interactivity with reviews, ratings and photos as well as crowd-sourced information on interesting trails are the main objectives of this project.

This project called **Trail App** is developed as a single page application that uses React as front-end framework and uses a custom API to retrieve and display trail information. The application is designed to be responsive and mobile friendly.

This project is aimed at anyone looking to read-up on hiking trails or to document or leave reviews on trails they have been on.

# Index

1. Design, UI, and UX
2. Technologies Used
3. Backend API
4. Future Features to Implement
5. Testing
6. Deployment
7. Credits and Acknowledgements

# 1. Design, UI, and UX

### Figma File with the wireframe and high fidelity prototype of the application can be found at the link below:

[Trail App prototype and wireframe.](https://www.figma.com/file/gC2LGUIuny82ik6EQOkCmP/Project-02)

Documentation for UI/UX design, color palettes and font selection can be found in the prototype.

## 1.1 Features and Structure of Webpage

The stucture and features of the web page can be found in the Figma file.

# 2. Technologies used:

- [React](https://reactjs.org/)

  React js is used to create the front-end framework.

- [Zustand](https://github.com/pmndrs/zustand/)

  This project uses zustand js for global state management and to enable using custom state management hooks in non-reactive components.

- [react-hook-form](https://react-hook-form.com/)

  React-Hook-Form is used to handle most of the froms in the application to reduce re-rendering and improve performance.

- [Axios](https://github.com/axios/axios)

  Axios js is used to handle most API requests. Some static data calls with built-in fetch API.

- [yup](https://github.com/jquense/yup)

  Yup js is used to validate form data.

- [Bootstrap V5.1.1](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

  The project uses Bootstrap to structure the layout of the website (e.g. responsive column, containers etc.) and ensure website is mobile responsive.

- [react-dropzone](https://github.com/react-dropzone/react-dropzone)

  A simple react hook to create a HTML5-compliant drag'n'drop zone for files.

- [react-slick](https://react-slick.neostack.com/)

  React-Slick is used to create a carousel for the photos.

- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)/[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

  The project relies on HTML5 and CSS technologies to create the front-end layout.

- [Google fonts](https://fonts.google.com/)/[Font Awesome](https://fontawesome.com/)

  The project uses Google fonts and Font Awesome to create the front-end layout.

# 3. Backend API

This project uses a custom RESTful API to retrieve and display trail information. The API is hosted on Heroku and is accessible from the front-end. The API is built using Node.js and Express.js. It uses [MongoDB](https://www.mongodb.com/) as the database and [Mongoose](https://mongoosejs.com/) as the ORM. The source code for the API can be found here: [Project 02 - Express-app](https://github.com/pratheesh1/Express-app)

The API enpoints are fully documented with Swagger and complies with the [OpenAPI 3.0](https://swagger.io/specification/) specifications. The API is hosted at: https://ps-project02-express.herokuapp.com/

The API docmentation can be found at the link: [/api-docs](https://ps-project02-express.herokuapp.com/api-docs/)

# 4. Future Features to Implement

## 4.1 Additional Features to be implemented in the future

| Feature                        | Description                                                           |
| ------------------------------ | --------------------------------------------------------------------- |
| Login/Signup                   | User can login/signup to the application.                             |
| Customize Trail                | User can customize the trail information.                             |
| Session Management             | User can manage their session.                                        |
| Email Verification             | User can verify their email address.                                  |
| Access Control for Edit/Delete | User can only edit/delete their own information.                      |
| Email Newsletter               | User can subscribe to the newsletter.                                 |
| Photo Upload                   | User can upload photos to the application and save them to S3 bucket. |

## 4.2 Feature fixes to be implemented in the future

| Feature                      | Description                            |
| ---------------------------- | -------------------------------------- |
| Better Routing               | Implement a better routing system.     |
| Photo Upload                 | Implement a photo upload system.       |
| Better UI to add Image links | Create a better UI to add Image links. |
| Improve navigation workflow  | Improve overall navigation workflow.   |

# 5. Testing

There is no automated testing for this project. The project is developed using a combination of manual testing and unit testing. The testing done for the critical functionality of this project is documented at the link below:

[Testing Documentation - Google Drive Link](Link)

<!-- TODO: To add link for testing documentation file here -->

# 6. Deployment

This project is deployed on Netlify. The deployed version can be found at the link below:

https://naughty-darwin-b8340c.netlify.app/

# 7. Acknowledgemnts

1. Albert Gao for his [python script](https://github.com/Albert-Gao/world-cities-mongodb) to add contries and cities to mongodb from GeoNmages.org
2. Community at figma.com for free figma components library.
3. YouTube community for countless free tutorials.
4. Images from [pngwing.com](https://www.pngwing.com) and [unsplash.com](https://unsplash.com/)
