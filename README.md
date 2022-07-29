# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Desktop Design of Rating Window](https://i.imgur.com/5weJP7j.png)\
![Thank You Window](https://i.imgur.com/7dI09kc.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- DOM

### What I learned

- I learned how to choose html tags with the same class name with `querySelectorAll()` method, which returns an array (NodeList) of elements and store the clicked element of the NodeList into the variable for further injection of it with `innerHTML` property of the selected html element.

```
let selectedNumber;

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", function () {
    selectedNumber = i + 1;
    console.log(selectedNumber);
  });
}

btn.addEventListener("click", function (event) {
  event.preventDefault();
  mainComponent.style.display = "none";
  thanksImg.style.display = "block";
  selectedRate.innerHTML = selectedNumber;
});
```

- I learned how to target an element and its sibling upon hover.
- On mobile design, hover effect does not work as mobile devices react only on touches.

### Continued development

- I need to practice working with DOM elements and manipulate them as advanced programmer.

### Useful resources

- [How to get the index of an element in a nodeList/HTML Collection on click](https://stackoverflow.com/questions/48068955/how-to-get-the-index-of-an-element-in-a-nodelist-html-collection-on-click) - This helped me for finding out the index of an element in a NodeList by adding `addEventListener()` function on click.
- [TypeError: Cannot read properties of undefined (reading 'addEventListener')](https://stackoverflow.com/questions/72264075/typeerror-cannot-read-properties-of-undefined-reading-addeventlistener) - This helped me to understand why the error was occuring and solved it.
- [CSS3 hover/tap doesn't work in mobile browsers](https://stackoverflow.com/questions/16180892/css3-hover-tap-doesnt-work-in-mobile-browsers) - This helped me to understand why hover effect does not work on mobile devices.
- [CSS - Target an element and its sibling upon hover](https://stackoverflow.com/questions/23096613/css-target-an-element-and-its-sibling-upon-hover) - This helped me how to target an element and its sibling element upon hover.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@karlakz](https://www.frontendmentor.io/profile/karlakz)
