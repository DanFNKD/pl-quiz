# Premier League Quiz

![Responsive screenshot](./assets/readme-images/responsiveness.png)



The website was created to test people's knowledge of the Premier League. It contains a mix of questions over the tournaments 30+ year history, making this a fantastic test for people of all ages!

A live version of the project can be found here - https://danfnkd.github.io/playfootball/

# Table of Content

+ UX
    + Site Purpose
    + User Demographic
    + User Goals
    + Design
        + Colors
        + Typography
        + Images
+ Features
    + Existing Features
        + Header Section with Logo and Navigation Bar
        + Home Page Image
        + Home Page Section
        + Benefits Page Image
        + Benefits Page Section
        + Signup Page Image
        + Signup Page Section
        + Footer Section
+ Technologies Used
+ Testing
    + Validator Testing
    + Unfixed Bugs
+ Deployment
+ Content
+ Media
+ Credits

## UX

### Site Purpose

The quiz is designed to challenge users with 30 questions on the Premier League. For each question, the user is able to see if they have answered correctly. If not, they are presented with the correct answer to help improve their knowledge. They can see how many questions they answered correctly/incorrectly and a message/image is displayed when all questions are answered to reward performance.

### User Demographic

This website was created for:

- Premier League football fans
- Fans of other leagues looking to improve their knowledge
- Anybody interested in football

### User Goals

- Learn more about the Premier League - Current and historical
- See what they have scored

### Design

The project utilises very simple design as not to distract attention from the questions.

#### Colors

There are two colors used throughout the website, white (#ffffff) and dark purple (#3d195b). The purple was taken from the Premier League's new logo.

#### Typography

The Google Font [Kanit](https://fonts.google.com/specimen/Kanit?query=kanit) was chosen as the font for the text elements with a fallback of Sans-Serif.

#### Images

The Premier League logo was used on the page. Different trophies were selected to represent gold, silver and bronze.

## Features

The Play Football webste is a single-page website consisting of the following sections:

- Landing Page
- Quiz Area
- Final Score Screens

### Existing Features

#### Landing Page

- The Header consists of of the text "Play Football" aligned to the left and a Navigation Bar which is aligned to the right.
- Featured on all three pages, the Navigation Bar includes links to the Home Page, Benefits Page and Signup Page.
- The Header is designed responsively across device types.

![Header and Navigation standard](./assets/readme-images/navigationbar.png)
![Header and Navigation 768px and down, closed](./assets/readme-images/navigationbar-768px.png)
![Header and Navigation 768px and down, open](./assets/readme-images/navigationbar-768px-open.png)

#### Quiz Area

- The Home Page Image was selected to show that Football can be enjoyed by simply stepping foot on a grass surface. The image is isolated and conveys the feeling that many people wanting to participate but not knowing how may be feeling.

![Home Page Image](./assets/readme-images/homepageimage.png)

#### Final Score Screens

- The opening provides an introduction to the sport of Football, highlighting the sheer scale of its popularity and the reasons for participation.
- It then links to the main objective of the site, encouraging people to participate in a session or sign up to join the community.
- A table is included to provide an overview of the existing sessions available at Play Football and is designed responsively for mobile devices.

![Home Page Section](./assets/readme-images/homepagesection.png)

## Technologies Used

- HTML
- CSS
- Javascript

## Testing

Testing was conducted using Google Chrome and Safari (laptop and mobile). Testing different devices and screen resolutions was completed via Google DevTools.

Main issues discovered:

1. User was able to click submit without selecting an answer.
- Added an if statement to prevent this behaviour and display a message to the user.
2. User was able to select multiple radio boxes.
- Applied name attribute to questions in html.
3. Favicon was stretched.
- Sourced new image to use.

### Validator Testing

- HTML
    - No errors were returned when the code was passed through the official W3C Validator.
- CSS
    - No errors were returned when the code passed through the official Jigsaw Validator.

### Unfixed Bugs

- All of the bugs were fixed and added to the Testing section.

## Deployment

CodeAnywhere and GitPod were used as the IDE's for this project. Regular commits and pushes to GitHub were made for version control and to track development.

The live version of the project was deployed to GitHub Pages.

Deployment process:

1. Log into GitHub
2. Find and load relevant GitHub repository
3. Select "Settings"
4. Click "Pages" in the Code and automation section
5. Select "Main" as the branch and "/root" as the folder
6. Click "Save"
7. The "github-pages" link is now visible in the "Deployments" section on the repository

A live version of the project can be found here - https://danfnkd.github.io/playfootball/.

## Content

- Text for the benefits of Football was taken from:
    - https://footballflick.com/blogs/news/how-football-can-improve-you-mental-health 
    - https://www.pushdoctor.co.uk/exercise/the-health-benefits-of-playing-football 
- Certain aspects of the design were inspired by the "Love Running" project, including the Table on Page 1 and the Footer.
- The icons in the benefits section and footer section were taken from [Font Awesome](https://fontawesome.com/).

## Media

- All of the images used in the project were taken from [Pexels](https://www.pexels.com/).

## Credits

Martina Terlevic
    - My Code Institute Mentor, thank you for your help with design and time management!

Sean and Roo
    - Tutors that helped me through the anomalous GitHub Pages issue!

