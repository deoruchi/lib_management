# Library Management System

The Library Management System is a web application built using React and Bootstrap, with the integration of the React ecosystem including React Router for routing,Redux Toolkit for state management, and JSON Server to perform CRUD (Create, Read, Update, Delete) operations on a library database.

This application allows users to manage a library's collection of books through an intuitive and user-friendly interface.

## Features

- Perform general CRUD operations on Books and Members
- Issue a book to a member
- Issue a book return from a member
- Search for a book by name and author
- Avails to pay fixed fee on the books
- Can find debt of the each member .If their debt is more than 500 in total then it gives warning.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React-Bootstrap: A popular CSS framework for creating responsive and visually appealing designs.
- React Router: A library for adding routing capabilities to React applications, enabling single-page applications with multiple views.
- JSON Server: A fake REST API server that uses a JSON file as a database.

## Getting Started

To get started with the Library Management System on your local machine, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/library-management-system.git
   cd library-management-system
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start JSON Server:**
   ```
   npm run json-server
   ```

   This will start the JSON Server and provide a mock API to perform CRUD operations on the library's book collection.

4. **Start the React application:**
   ```
   npm start
   ```

   This will start the development server and open the application in your default web browser.

5. **Interact with the application:**
   You can now use the Library Management System to perform various operations on the books in the library.

## Folder Structure

- `public`: Contains static assets and the HTML template for the application.
- `src`:
  - `components`: Contains React components used throughout the application.
  - `Data`: Contains the JSON file used by JSON Server to simulate a database.
  - `App.js`: The main React component that sets up routing and renders different pages.
  - `index.js`: The entry point of the React application.

## Preview



https://github.com/deoruchi/lib_management/assets/79249274/2f737735-1ade-4015-910e-581dfeb6ae2c






