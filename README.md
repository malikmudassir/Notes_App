# Mind Mark

The MindMark project is a web-based application that allows users to create an account, log in securely, and manage their personal notes in the form of note cards. The application is designed to provide a user-friendly and organized platform for keeping track of thoughts, ideas, and important information digitally.

## Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/): A state management library for managing application state.
- [Material-UI](https://mui.com/): A popular React UI framework for building responsive and beautiful user interfaces.

## User Registration Screen

Users can create an account by providing essential information such as username, email, and password.
Passwords should be securely hashed and stored in a MongoDB database.
User authentication and authorization will be implemented to ensure data security.

## Sign In Screen

Registered users can log in securely using their credentials.
Session management should be in place to keep users authenticated.

### Notes Screen

The "Notes" screen displays a list of notes in the form of cards. These notes are retrieved from an API and can include information such as the note's title, category, date, and details. Users can interact with the notes, view their details, and perform actions such as deleting notes.

- **Create Card**: To create a new card, users can click on the "Add Note" button located at the bottom of the "Notes" screen. This action will take them to the "Create Card" screen.

### Create Card Screen

The "Create Card" screen allows users to add a new card or note to their collection. Users can input information such as the card's title, category, date, and details. Once the required information is filled out, users can submit the form to create a new card.

## Delete Card Functionality

In this project, you can easily delete a note card from the Notes screen. Here's how it works:

1. When you are on the Notes screen, you'll see a list of note cards. Each card displays the note's title, category, date, and details.

2. To delete a card, simply click on the "Delete" button (represented by a trash can icon) located at the top-right corner of each note card.

3. After clicking the "Delete" button.

4. The note card will be permanently deleted from your list of notes.

## Logout Functionality

This project includes a user-friendly "Logout" button located at the top-right corner of the application's navigation bar. Here's how it works:

1. When you are logged into your account and using the application, you'll notice a "Logout" button in the navigation bar.

2. To log out from your account, simply click on the "Logout" button.

3. After clicking the "Logout" button, you will be securely logged out of your account.

4. Upon successful logout, you will be redirected to the Sign-In screen where you can either sign in again or create a new account if needed.

The "Logout" functionality ensures the security of your account and allows you to easily switch between user accounts or exit the application as needed.

This functionality allows you to manage your notes easily and remove any unwanted or outdated cards from your list.

To get started with this project, follow the instructions below:

1. Clone this repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Run the development server using `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) in your browser to access the application.

# **\*\*\*\***\*\***\*\***\*\*\*\***\*\*\*\***\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\*\*\*

# **\*\***\*\*\*\***\*\***\*\*** BACKEND README FILE START**\*\*\***\*\*\*\***\*\*\*\***\*\*\***\*\*\*\*

# Mind-Mark Task Manager

Mind-Mark is a web-based task manager application that allows logged-in users to create and delete tasks. This project serves as a simple and efficient task management tool for individuals who want to keep track of their tasks.

## Table of Contents

- [Mind-Mark Task Manager](#Mind-Mark-task-manager)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Architecture](#Architecture)

## Features

- User authentication: Users can create accounts and log in securely.
- Task management: Logged-in users can create, view, and delete tasks.
- User-friendly interface: A clean and intuitive user interface for easy task management.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)

### Installation

clone it from the repo
open in code-editor (vsCode)
command: nodemon index.js

### Usage

1: Register for an account or log in with existing credentials.
2: Once logged in, you can create tasks by providing a title and description.
3: View your tasks on the dashboard and delete them when completed.
4: Log out when you're done.

### Architecture

- MVC pattern
- Model (MongoDB Atlas)
- View (user-side)
- Controller (Node.js + Express.js)

### Scope

- Assist to developer to complete task esily.
- Friendly user interface.
- Optimized code.
