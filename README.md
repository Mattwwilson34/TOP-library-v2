# TOP-library-v2

Application created as part of The Odin Project curriculum. The application
allows users to view books within their library, mark them as read/unread, add additional books, and delete books.

This is the second iteration of this project that I am using as a review after completing the odin project in order to review core javascript concepts as well
improve the original projects code style and architecture.

---

### Project Focus:

- Follow TDD practices throughout development using Jest.
- Use factory functions, modularity, and OOP principles to maintain clean
  testable, and organized code.
- Make UI/UX responsive and accessible with pure CSS.

## Project Status

This project is complete.

## Project Features:

- Add new books to library
- Toggle if books have been read or not
- Delete books from library
- Refresh page to remove all added books and re-seed library with fresh books

---
<!-- ## Project Screen Shot(s) -->
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/49503056/183129211-666b3a01-b01b-4e2b-acbd-5461646b199a.gif)


## Installation and Setup Instructions

Clone down this repository. You will need `yarn` and `npm` installed globally on your machine.

Installation:

`yarn add`

To Run Test Suite:

`yarn test`

To Run Application:

`yarn run build`

`open index.html in browser`

---

## Reflection

This project was a one week from scratch rebuild of a library app that was
originally part of The Odin Project curriculum. I chose to rebuild this project
from scratch so that I could practice test driven development, OOP principles, and my git workflow.
In respect to git I focused on working in branches as well as completing pull
requests with attention documentation details.

### Tech:

I wanted to focus vanilla JS for this application so technologies I chose were VanillaJS, HTML5, CSS3. Additionally, I chose to use webpack so that I could get more experience with its setup/config as well as to allow me to
bundle my JS code for modularity and adherence to OOP principles.

---

## Challenges:

### webpack:

In order to utilize JS modules with this project I decided to use webpack. In order to generate uuid's my app uses the built in node crypto module, but as of webpack V5 it no longer
supports built in node modules.

In order to solve this issue I added the following code to my webpack config:

```javascript
module.exports = {
  externals: {
    crypto: 'crypto',
  },
};
```

This will make Webpack attempt to import crypto from the environment at runtime, rather than bundling its definition: `require('crypto')` will end up executing code that looks like this:

```javascript
function(module, exports) {
  module.exports = crypto;  // i.e. `window.crypto`
}
```

This solution was found via the following blog [Requiring Node Built-ins with Webpack written by
Jeff Wear](https://www.mixmax.com/engineering/requiring-node-builtins-with-webpack)

<!-- ## Reflection

- What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
- What did you set out to build?
- Why was this project challenging and therefore a really good learning experience?

- What tools did you use to implement this project?
  - This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.

#### Example:

This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the `create-react-app` boilerplate, then adding `react-router-4.0` and `redux`.

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process. -->
