# Blog Web API with Express Exercises

This exercises to practice building a blog-themed web API using Express.js. Each exercise focuses on a specific aspect of building RESTful APIs, such as CRUD operations.

## Exercises

The exercises are designed to cover various aspects of building a blog-themed web API with Express. Each exercise focuses on a specific feature or functionality commonly found in blog APIs. You'll implement features such as creating, updating, deleting, and retrieving blog posts.

## Prerequisites

Before starting the exercises, ensure you have the following installed:

- [Node.js](https://nodejs.org/) - Make sure Node.js is installed on your machine.

## Getting Started

To get started with the exercises, follow these steps:

1. Install dependencies:

    ```bash
    npm install express ejs body-parser mongoose dotenv
    ```

2. Start the server:

    ```bash
    node ./app.js
    ```

3. You're ready to start working on the exercises! Each exercise is located in its respective directory under the `Your folder name` folder.

4. **Connect to MongoDB**: You need to configure your MongoDB connection. Create a `.env` file in the root of your project and add the following:

    ```plaintext
    MONGODB_URI=your_mongodb_uri
    ```

    Replace `your_mongodb_uri` with your MongoDB connection string. For more information on setting up a MongoDB connection, refer to the [MongoDB documentation](https://docs.mongodb.com/manual/administration/install-community/).

5. **Implement CRUD Functionality**: Each exercise will guide you through implementing CRUD functionality for managing blog posts. You'll create routes to handle creating, reading, updating, and deleting blog posts.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
