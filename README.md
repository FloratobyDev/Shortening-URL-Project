# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![./screenshot.PNG](./screenshot.jpg)


### Links

- Solution URL: [SOLUTION](https://github.com/FloratobyDev/Shortening-URL-Project)
- Live Site URL: [LIVE SITE](https://amazing-hotteok-7a98a7.netlify.app/)

## My process

**THE API PROCESS**
 - Read Shrtcode API. 
 - Practiced calling the API with a given parameter.
 - Analyzed the JSON results and remember fields that are necessary for the project.
 - Implemented API into the code with the built in fetch API.

**THE HTML PROCESS**
 - Looked at the design to help understand the structure of the page.
 - Prototyped a structure, then modified to be accessible and responsive.
 - Partially added a custom CSS methodology. We'll be using SUIT next project.

**THE JS PROCESS**
 - Behavior implemented before styling. 
 - First implemented the behavior which accepts a url from the input and sends in a GET Method to the [Shrtcode.de](https://shrtco.de/) server. The server then responds with a JSON object. The object is pushed in a localStorage where the rest of the previous links are stored. 
 - Next, the data from localStorage is retrieved and used as an argument for a component that displays the data into the page.     
 - Error behavior is also created when a user tries to send an empty request.
 - 
**THE CSS PROCESS**
 - Styled components from header to footer.
 - For each component, wrote down the structure first using SASS' nested classes.
 - Worked on alignment first, then added the custom size, color, font style, and more.
 - Worked on the page's `RESPONSIVENESS` -- mobile and desktop only.
 - Polished for better overview.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Custom CSS Methodology
- [SASS](https://sass-lang.com/) - SASS Precompiler
- [React](https://reactjs.org/) - JS library

### What I learned

 - How to use background-repeat space and round.
 - How to use overflow: hidden to disable vertical scrolling.
 - How to use text overflow and ellipsis. 
 - How to use Shrtcode.de's API.
 - How to use CSS custom props.
 - How to use row-reverse.
 - How to use a CSS Methodology. 
 - How to use SASS' at-rule[import].
## Author

- Website - [Michael Mushrush](https://michaelmushrush.tech/)
