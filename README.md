# FreeCode Backend

A Node.js and Express backend RESTful API exercising fundamental backend concepts, including user and post management.

## Tech Stack
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for flexible data modeling and persistence (with Mongoose ODM).
- **Dotenv**: Centralized environment variable management.

## Features
- **Project Structure**: Follows best practices with separated concerns (`app.js` for Express/middleware configurations, and `index.js` for database and server spin-up). 
- **User Routes (`/api/users`)**: Endpoint implementations regarding internal user data.
- **Post Routes (`/api/posts`)**: Endpoint implementations mapping to the `postRoute` supporting post creation functionality. Includes route endpoints such as `/register` (to create new posts), and various others to retrieve, update, and delete posts.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- Make sure to have a `.env` file containing your environment variables, such as:
  ```env
  PORT=3000
  MONGODB_URI=<your-mongodb-connection-string>
  ```

### Installation
1. Navigate into the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application in development mode (with hot-reloading using `nodemon`):
   ```bash
   npm run dev
   ```

## Folder Structure
```text
Backend/
  ├── src/
  │   ├── app.js               # Express application initialization and route integrations
  │   ├── config/
  │   │   ├── index.js         # Dedicated script to boot the webserver
  │   │   └── db.js            # MongoDB connection
  │   ├── controllers/         # Actions handling various end-point requests
  │   ├── models/              # Mongoose data schemas (User, Post)
  │   └── routes/              # Express isolated routers (`userRoute.js`, `postRoute.js`)
  └── package.json             # NPM dependencies and scripts
```
