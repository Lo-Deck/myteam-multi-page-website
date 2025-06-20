# Frontend Mentor - myteam website solution

This is a solution to the [myteam website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/myteam-multipage-website-mxlEauvW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- See the correct content for each team member on the About page when the `+` icon is clicked
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Screenshot

![screenshot mobile-home](https://github.com/Lo-Deck/myteam-multi-page-website/blob/main/screenshot/Myteam%20website%20challenge-home-mobile.png).
![screenshot mobile-about](https://github.com/Lo-Deck/myteam-multi-page-website/blob/main/screenshot/Myteam%20website%20challenge-about-mobile.png).
![screenshot tablet-contact](https://github.com/Lo-Deck/myteam-multi-page-website/blob/main/screenshot/Myteam%20website%20challenge-contact-tablet.png).
![screenshot desktop-home](https://github.com/Lo-Deck/myteam-multi-page-website/blob/main/screenshot/Myteam%20website%20challenge-home-desktop.png).

### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/myteam-multi-page-website).
- Live Site URL: [Website](https://lo-deck.github.io/myteam-multi-page-website/).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned how to validate a form and display error message depending on the input

```js

function validateInput(input, index){

   if (input.validity.valueMissing) {
       input.classList.add('error-input');
       document.querySelectorAll('.container-input span.error')[index].textContent = `This field is required`;
       return false;
   }

   if (input.type === 'email' && input.validity.typeMismatch) {
       input.classList.add('error-input');
       document.querySelectorAll('.container-input span.error')[index].textContent = `Please enter a valid email address`;
       return false;
   }

   ...


myForm.addEventListener('submit', (event) => {

   formInputs.forEach( (input, index) => {

       if (!validateInput(input, index)) {
           event.preventDefault(); 
       }

	...

```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.
- [FreeCodeCamp](https://www.freecodecamp.org/) - I've been learning a lot.
- [Utopia](https://utopia.fyi/) - To have a better responsive design.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
