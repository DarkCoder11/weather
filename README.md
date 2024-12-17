# Weather App

This is a Weather App built with React Native, Redux Toolkit, and TypeScript. It uses Expo to simplify development and deployment. The app displays weather information for different cities and countries, including descriptions and icons for current weather conditions.

<img src="https://github.com/user-attachments/assets/72c7b9c1-749a-4c99-a527-53c418f603fb" alt="Alt Text" width="393" height="852">

---

## Features
- View current weather information for cities and countries.
- Weather descriptions and icons based on real-time data.
- Clean and modular architecture for scalability.

---

## Setup Instructions

### Prerequisites
- Node.js and npm or Yarn installed on your system.
- Expo CLI installed globally. You can install it with:
  ```bash
  npm install -g expo-cli
  ```
- A code editor like Visual Studio Code (recommended).

### Steps to Run the Project

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start the development server:
   ```bash
   yarn start
   ```
  

3. Run the app on a device or emulator:
    - For Android: `yarn android`
    - For iOS: `yarn ios`

4. Open the app in the Expo Go app (available on iOS and Android) or on an emulator.

---

## Dependencies

### Main Dependencies
- **React Native**: Framework for building native apps using React.
- **Expo**: Framework and platform for universal React applications.
- **Redux Toolkit**: State management library for managing application state.
- **React-Redux**: React bindings for Redux.
- **Axios**: Promise-based HTTP client for making API calls.
- **Expo Location**: Module to get device location information.

### Development Dependencies
- **TypeScript**: Typed superset of JavaScript.
- **ESLint**: Linter for maintaining code quality.
- **Prettier**: Code formatter.
- **@babel/core**: Babel compiler core for transforming code.

---

## Project Structure

```
src/
├── components/             # Reusable UI components
├── hooks/                  # Custom hooks for reusable logic
├── redux/                  # Redux state management
├── screens/                # App screens
├── services/               # API and backend services
├── utils/                  # Utility functions
```

---

## Notes
- To lint and type-check the code, run:
  ```bash
  yarn lint
  ```
