<p align="center">
<img src="https://raw.githubusercontent.com/suongfiori/random-quote-machine/main/public/quotes.png" width="5%">
</p>

# Random Developer Quotes

[Live Deployment Link](https://random-quote-machine-lac-ten.vercel.app/)
Boost your coding mojo with an eclectic mix of quotes that'll brighten your [dev] day!


<!-- The project implements a simple game logic where the player needs to roll the dice until all of them have the same value -->


### Technologies used
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
 <br>
 
 ### API
 
Programming Quotes API: 'https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/Data/quotes.json'
 
### Features
* Random Quotes: Get a fresh developer quote every time you visit the app.  

* Responsive Design: The app is built with responsiveness in mind.

* Implementation of React Helmet: Dynamically retrieve page titles, meta descriptions, and other meta tags.

Desktop view <br>

<img SRC="https://raw.githubusercontent.com/suongfiori/random-quote-machine/main/src/assets/desktop.png" alt="desktop view" width="70%"> <br><br>
Mobile view <br>

<img src="https://raw.githubusercontent.com/suongfiori/random-quote-machine/a544a1edc4076946f974b6d123f1c34259e34913/src/assets/mobile.png" alt="mobile view" width="25%">

<h2>Implementation of React Helmet</h2>
I want to try this cool library called React Helmet in my app! It helps me manage and update the metadata, including the meta tags, for each page. With React Helmet, I can dynamically control the information that search engines and social media platforms see.

<h4>Why React Helmet?</h4>
React Helmet makes it easy to optimize my app for search engines and improve click-through rates in search results. By using React Helmet, I can update meta tags, including the meta description, which plays a vital role in SEO and enticing users to click on my app in search results.

<h4>How to Install</h4>
Here's how to get started with React Helmet:

First, open up your project's terminal.

Then, run this command:
```npm
npm install react-helmet
```

React Helmet will be installed as a dependency in your project.

Usage Example:

```jsx

import React from 'react';
import { Helmet } from 'react-helmet';

function ExamplePage() {
  return (
    <>
      <Helmet>
        <title>Example Page</title>
        <meta name="description" content="This is an example meta description." />
        {/* You can add more meta tags here */}
      </Helmet>
      {/* Rest of my component */}
    </>
  );
}

export default ExamplePage;
```

By using the <Helmet> component, I can easily set the page title, meta description, and other meta tags dynamically.

