# Digital Portfolio

A modern, responsive React portfolio demonstrating UI components, animations, and modular CSS.

## Features
- Responsive, mobile-first layout
- Hero section with typing animation and premium typography
- Modular CSS for maintainability
- Contact and Projects sections (expandable)
- Firebase authentication scaffolding (if configured)



## Prerequisites
- Node.js (>= 14)
- npm or yarn
- (Optional) Firebase project and credentials if using auth or hosting

## Quick Start
1. Clone the repo
   ```bash
   git clone <repo-url>
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment
   Create a .env file in the project root (if using Firebase) and add keys, for example:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   ```

4. Run locally
   ```bash
   npm start
   # or
   yarn start
   ```

   App opens at http://localhost:3000

## Scripts
- `npm start` — run dev server
- `npm run build` — production build
- `npm test` — run tests (if configured)

## Project Structure
- `src/`
  - `pages/` — page components (Auth.jsx, Home, Profile, ...)
  - `components/` — reusable UI components
  - `assets/` — images and static assets
- `public/` — static files
- `README.md` — project documentation

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes and open a PR
   Keep changes focused and include a short description of your work.

## License
This project is licensed under the MIT License. See LICENSE for details.

## Author
Arshiya Attar