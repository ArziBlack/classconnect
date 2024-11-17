# Online Educational Website

Welcome to the Online Educational Website! This project is a modern and responsive educational platform built using React.js, with various features such as courses, pricing, tutor profiles, user authentication, and more. Below is an overview of the project structure, dependencies, and instructions to get started.

## Table of Contents

- [Features](#features)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Pages](#pages)
- [Contributing](#contributing)
- [License](#license)
- [Contributors](#contributors)

## Features

- **Courses**: Browse and enroll in various educational courses.
- **Pricing**: View different pricing plans for the courses.
- **Tutors**: Learn more about the tutors.
- **Authentication**: Sign up, login, and reset password functionalities.
- **Privacy Policy**: Detailed privacy policy for users.

## Dependencies

The following dependencies are used in this project:

```json
"@chakra-ui/icons": "^2.1.1",
"@chakra-ui/layout": "^2.3.1",
"@chakra-ui/react": "^2.8.2",
"@emotion/react": "^11.11.4",
"@emotion/styled": "^11.11.5",
"@reduxjs/toolkit": "^2.2.5",
"axios": "^1.7.2",
"firebase": "^10.12.2",
"framer-motion": "^11.2.6",
"prettier": "^3.2.5",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-icons": "^5.2.1",
"react-redux": "^9.1.2",
"react-router-dom": "^6.23.1",
"react-select": "^5.8.0",
"react-step-progress-bar": "^1.0.3",
"react-youtube": "^10.1.0",
"swiper": "^11.1.4",
"tachyons": "^4.12.0",
"zxcvbn": "^4.4.2"
```

## Dev Dependencies

The following dev dependencies are used for development and build processes:

```json
"@types/react": "^18.2.66",
"@types/react-dom": "^18.2.22",
"@typescript-eslint/eslint-plugin": "^7.2.0",
"@typescript-eslint/parser": "^7.2.0",
"@vitejs/plugin-react": "^4.2.1",
"autoprefixer": "^10.4.19",
"eslint": "^8.57.0",
"eslint-plugin-react-hooks": "^4.6.0",
"eslint-plugin-react-refresh": "^0.4.6",
"postcss": "^8.4.38",
"tailwindcss": "^3.4.4",
"typescript": "^5.2.2",
"vite": "^5.2.0"
```

## Getting Started

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/online-educational-website.git
   ```

2. **Navigate to the project directory**:

   ```sh
   cd online-educational-website
   ```

3. **Install dependencies using Yarn**:

   ```sh
   yarn install
   ```

4. **Start the development server**:
   ```sh
   yarn dev
   ```

## Project Structure

The project structure is organized as follows:

```
online-educational-website/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .eslintrc.js
├── .prettierrc
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Available Scripts

In the project directory, you can run the following scripts:

- `yarn dev`: Starts the development server using Vite.
- `yarn build`: Compiles the TypeScript code and builds the project for production.
- `yarn format`: Checks the code format using Prettier according to the configuration.
- `yarn format:fix`: Formats the code using Prettier to match the required style.
- `yarn install:clean`: Cleans the node_modules directory and package-lock.json, reinstalls dependencies, and starts the server.
- `yarn preview`: Previews the production build locally using Vite.

## Pages

- **Home**: Landing page with an overview of the platform.
- **Courses**: List and detail pages for various courses.
- **Pricing**: Information on different pricing plans.
- **Tutors**: Profiles of the tutors.
- **Signup**: User registration page.
- **Login**: User login page.
- **Reset Password**: Password reset page.
- **About**: Information about the platform.
- **Privacy Policy**: Detailed privacy policy.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the coding standards and include relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributors

- **@ArziBlack**
- **ArziBlack**
