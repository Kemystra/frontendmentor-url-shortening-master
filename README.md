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

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

1. I found out that a lot of people agreed that some CSS defaults aren't really aligned with their projects. So they reset them! I took inspiration from [meyerweb.com](https://meyerweb.com/eric/tools/css/reset/) and also [www.joshwcomeau.com](https://www.joshwcomeau.com/css/custom-css-reset/).

2. First time using `flex-shrink`! It helps to tell a flexbox should an element be shrunk or not. Especially useful when dealing with texts to avoid them from being squished from the sides.

```css
.flex-element {
    width: 50%;
    /* With this, I will maintain my width
    the flexbox won't shrink this */
    flex-shrink: 0;
}
```
3. I got a better understanding on how to use `rem` vs `px`! So you use `rem` for stuff that is related to font size, e.g: text, text container, etc. If a user needs a bigger font size, elements that use rem would also follow that font size as a reference (also, don't put fixed font size in HTML tags to avoid pre-setting it).

`px` is better for fixed placements of objects, where design is of utmost importance. e.g: Decorative images, spacings, etc.

4. `::after` and `::before` pseudoelements can only be applied on "container" elements like `div`. Learned this the hard way when making the error message for the URL input!

5. CORS lol. CleanURI API does not have the necessary CORS headers. I used Netlify's function service as a proxy for the API.

6. `position: fixed` requires both horizontal and vertical position set (e.g: `top: 0;` and `left: 0;`). It will not work without either of them.

7. `pointer-events: none` will cause an element to "pass-through" its mouse clicks!

### Continued development

1. I just realized that a relatively new `dialog` HTML tag would have made it easier to show the attribution part. Gonna use that next time.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
