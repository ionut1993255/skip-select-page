# Skip Options Page

Welcome to **Skip Options Page**. This web page is built with `React`, `Vite` and `Tailwind CSS`, ensuring a fast and
responsive
experience.

## Installation Guide

1. Install dependencies using the command `npm install`.
2. Start the development server using `npm run dev`.

## Key Features

- **State Management with Context API:** The app uses the `Context API` to manage the global state of skip options and
  the
  selected skip. This allows seamless data sharing across components.

- **Asynchronous Data Fetching:** The application fetches skip options from an external API using `async/await`,
  ensuring smooth handling of asynchronous actions.

- **Responsive Design:** Built with `Tailwind CSS`, the app is fully responsive, adapting to all screen sizes from
  desktop to mobile devices.

- **Reusable UI Components:** The app includes a set of reusable UI components such as `Button`, `Divider`, `Icon`,
  `Spinner` etc., which promote cleaner and more maintainable code.

- **Loading and Empty States:** The app displays appropriate loading indicator and empty state message when there is
  no data available or when the app is fetching skip options.

## Technologies Used

- **React:** Built with `React`, a popular `JavaScript` library for building user interfaces. It provides a fast and
  interactive user experience.

- **Vite:** A modern and fast build tool that provides an optimized development environment. It helps speed up the
  development process with features like `Hot Module Replacement` (`HMR`).

- **Tailwind CSS:** `Tailwind CSS` is used for styling the application. It ensures a highly customizable and responsive
  design with minimal effort.

- **Context API:** The app uses React's `Context API` for state management, which helps in managing and sharing state
  across the application without the need for prop drilling.

- **Async/Await:** The app handles asynchronous operations using `async/await` to fetch data from the external API in a
  clean and readable manner.

## Project Structure

### 1. **Context**

The **context** folder contains files for managing the application's global state. It uses the `SkipOptionsContext` to
handle the skip options data and the `SkipOptionSelectionContext` to manage the selected skip option.

### 2. **Features (Skip Options)**

The **features/skip-options** folder contains the components related to displaying and managing skip options. This
includes the `SkipOptionsList` and individual `SkipOptionsCard` components.

### 3. **Services**

The **services** folder contains the `apiSkipOptions.js` file, responsible for interacting with the external API to
fetch skip options data.

### 4. **UI Components**

The **ui** folder contains reusable UI components such as `Button`, `NoDataMessage`, `Spinner` and `Icon`.
These components are designed for flexibility and reuse throughout the app.

### 5. **Utils**

The **utils** folder contains a file called `icons.jsx`, which is used throughout the app.

## Demo

You can view a live demo of the web page here: <a href="https://skip-options-page.netlify.app/">
`https://skip-options-page.netlify.app/`</a>.

## Conclusion

The **Skip Options Page** is a responsive and efficient web page built with modern technologies like `React`,
`Vite` and `Tailwind CSS`. It is designed to offer an interactive and smooth user experience while managing skip
options.

