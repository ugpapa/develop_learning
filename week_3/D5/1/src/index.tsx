// Import necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the global styles
import './index.css';
// Import the App component
import App from './App';

// Create a root container where the React application will be attached.
// This container is the HTML element with the id 'root'.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the React application in StrictMode.
// StrictMode is a helper component that checks for potential problems in the application during the development build.
// The root of the application is the App component.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
