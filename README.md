# Rants

Rants is a minimalist, text-only microblogging web application inspired by the early days of Twitter. It provides a simple, clean backend API for users to register, log in, and share their thoughts as "rants."

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication (JWT-based)
- Create, Read, Update, and Delete (CRUD) operations for posts
- Secure password hashing
- Foreign key relationship between users and posts

## Tech Stack

- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Database**: [MySQL](https://www.mysql.com/)
- **Driver**: [mysql2](https://github.com/sidorares/node-mysql2) (Promise-based)
- **Logging**: [Morgan](https://github.com/expressjs/morgan)
- **Environment Variables**: [dotenv](https://github.com/motdotla/dotenv)

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v16.x or later recommended)
- [NPM](https://www.npmjs.com/get-npm) (comes with Node.js)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)

## Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/Rants.git
    cd Rants/backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the `backend` directory by copying the example file.

    ```bash
    cp .env.example .env
    ```

    Now, open the `.env` file and fill in your database credentials and a JWT secret.

4.  **Set up the database:**
    Make sure your MySQL server is running. Then, run the setup script to create the database and tables.

    ```bash
    node src/db-setup.js
    ```

5.  **Start the server:**
    ```bash
    npm start
    ```
    The server will be running on `http://localhost:3000` (or the port you specified in your `.env` file).

## API Endpoints

All endpoints are prefixed with `/api`.

#### User Routes (`/users`)

- `POST /users/register`: Register a new user.
- `POST /users/login`: Log in a user and receive a JWT.

#### Post Routes (`/posts`)

- `GET /posts`: Get all posts.
- `GET /posts/:id`: Get a single post by its ID.
- `POST /posts`: Create a new post (requires authentication).
- `PUT /posts/:id`: Update an existing post (requires authentication).
- `DELETE /posts/:id`: Delete a post (requires authentication).

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
