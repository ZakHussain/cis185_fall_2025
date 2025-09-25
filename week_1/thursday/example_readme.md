# HTML Elements Exploration Assignment

**Student Name:** Zak  
**Course:** CIS 185
**Assignment One:** HTML Elements Challenge  
**Date:** [Current Date]

## Project Overview

This project demonstrates the use of various HTML elements beyond the basic ones covered in class. I've created an extended web page that showcases different HTML elements and their functionality, along with custom CSS styling.

## HTML Elements Implemented

### 1. `<details>` and `<summary>`
**Purpose:** Creates collapsible content sections  
**How I used it:** Created an expandable FAQ section where users can click to reveal answers  
**Why it's useful:** Saves space on the page while organizing content in an interactive way

```html
<details>
    <summary>What is HTML?</summary>
    <p>HTML stands for HyperText Markup Language...</p>
</details>
```

### 2. `<figure>` and `<figcaption>`
**Purpose:** Groups media content with its caption  
**How I used it:** Added an image with a descriptive caption below it  
**Why it's useful:** Provides semantic meaning to images and their descriptions, improving accessibility and SEO

```html
<figure>
    <img src="web-development.jpg" alt="Person coding">
    <figcaption>A developer working on a web application</figcaption>
</figure>
```

### 3. `<progress>`
**Purpose:** Displays the completion progress of a task  
**How I used it:** Created a skill level indicator showing my progress in different web technologies  
**Why it's useful:** Visually represents completion or loading states without JavaScript

```html
<progress value="75" max="100">75% Complete</progress>
```

### 4. `<time>`
**Purpose:** Represents a specific period in time  
**How I used it:** Marked up dates and times throughout my content  
**Why it's useful:** Makes dates machine-readable for search engines and browsers

```html
<time datetime="2024-03-15">March 15, 2024</time>
```

### 5. `<meter>`
**Purpose:** Displays a scalar measurement within a known range  
**How I used it:** Created a rating system for different programming languages  
**Why it's useful:** Provides a visual gauge for measurements, scores, or ratings

```html
<meter value="8" min="0" max="10">8 out of 10</meter>
```

### 6. `<button>`
**Purpose:** Creates clickable buttons for user interaction  
**How I used it:** Added interactive buttons with hover effects  
**Why it's useful:** Provides clear call-to-action elements that are accessible and customizable

```html
<button type="button">Click Me!</button>
```

## CSS Styling Applied

I applied custom styling to the following elements:

- **`<details>`**: Added border-radius, padding, and background colors
- **`<progress>`**: Customized the progress bar colors and dimensions  
- **`<button>`**: Created hover effects with color transitions
- **`<figure>`**: Added shadows and responsive sizing

## Learning Outcomes

Through this assignment, I learned:

1. **Semantic HTML importance** - Using the right element for the right purpose improves accessibility
2. **Interactive elements** - HTML can provide user interaction without JavaScript
3. **Content organization** - Elements like `<details>` and `<figure>` help structure content meaningfully
4. **CSS integration** - How to style newer HTML5 elements effectively

## Challenges Encountered

- **Browser compatibility**: Some elements like `<details>` have limited styling options
- **Accessibility**: Ensuring proper labels and descriptions for screen readers
- **Responsive design**: Making sure elements work well on different screen sizes

## Resources Used

- [MDN HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3C HTML5 Specification](https://www.w3.org/TR/html52/)

## Files Included

- `index.html` - Main HTML file with all implemented elements
- `README.md` - This documentation file

## How to View

1. Clone this repository
2. Open `index.html` in any modern web browser
3. Interact with the various elements to see their functionality

---
