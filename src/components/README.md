#  Higlander Tap House

#### By Megan Schulte 7-4-2019

## Description

  This web application is designed to be both a tap room beer list for customers and a keg tracking app for the eployees of said tap room. It is created using React and supporting tools. 

## Setup/Installation Requirements
* clone project from https://github.com/meganschultepdx/highlander-tap-house.
* Run npm install from with in root directory to install necessary packages.
* Run ng run start --open to open project on Local Server.
* Project will automatically open in Chrome browser at localhost:8080

## Component Tree/Project Planning

![](src/assets/images/comptree.jpg)

## Features

Below are the current features worked on today and the features that are planned for future developement.

# Current Features:

* landing page with:
  - navbar component
    - click on "Log In "in navbar to route to login page
  - footer component
    - click on "About" in footer to route to about page
* Navbar, Footer and their links to login and About show on every page or when other components are displayed.
* styling to match Shudder's styling.
* Login page has fake login form but 'login" button routes you to collections page
* Collections page features list of "featured collections" from Firebase Database
* click on Shudder logo in navbar to return to home/landing page from any other page
* live Firebase deployment


# Future Planned Features:

* replace more of the static images with built components 
* Retrieve and display collection images that are saved in Firebase storage
* Format data from Firebase to display correctly in columns with images
* Display Horror101 data from Firebase with images

 ## Known Bugs

  No known bugs

  ## Support and contact details

  Create a pull request on GitHub.

  ## Technologies Used

  * JavaScript
  * React
  * Html
  * Webpack
  * npm
  * CSS
  * Material-UI

  ### License

  GPL, keep information free.

  Copyright (c) 2019 Megan Schulte
