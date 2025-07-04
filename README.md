# React Homeworks 2024

A collection of React homework assignments.

## Overview

This project showcases various React concepts and implementations using **TypeScript**, **Firebase**, **Redux Toolkit**, **React Router**, **Styled Components**, and **Testing Library**.

## Tech Stack

- React 19
- Vite 6
- TypeScript
- Redux Toolkit
- React Router v6
- Firebase Auth
- Styled Components
- Jest + Testing Library
- ESLint

## Installation

Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/dziyanabortnik/react-homeworks
   ```

   ```bash
   cd react-homeworks-2024
   ```

   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```
   
2. Open browser and go to http://localhost:5174/.


## Available Scripts

- `npm run dev`: Start development server
- `npm run test`: Execute Jest tests

## Project Structure

```plaintext
src/
├── app/                 # Redux store configuration
├── assets/              # Static files and images
├── components/          # Reusable UI components
├── features/            # Redux slices and state management
├── pages/               # Route-based page components
├── theme/               # Theme context and styling
├── firebase.ts          # Firebase setup and configuration
├── App.tsx              # Main application component
├── main.tsx             # Entry point
├── index.css            # Global styles
└── theme/variables.css  # Theme variables
```

## Firebase Auth
Firebase is used for authentication.

Private routes are protected using route guards.

Auth state is managed via Redux Toolkit.

## Author
   Dziyana Bortnik
   My GitHub Profile: https://github.com/dziyanabortnik
