🚀 Mini REST API Project
This is a minimal Node.js REST API designed for data operations and testing via Postman. It includes password hashing, error handling, and MongoDB integration.

⚠️ IMPORTANT: Environment Variables
For security reasons, the sensitive configuration file (config.env) is not included in this repository. To run this project, you must create your own configuration.

Setup Instructions:
Create a file named config.env in the root directory.

Copy and paste the following variables:


PORT=3000
MONGO_URI=your_mongodb_connection_string_here
Note: Replace your_mongodb_connection_string_here with your actual MongoDB Atlas or local connection string.

🛠️ Installation & Getting Started
Follow these steps to get your local copy up and running:

1. Clone the Repository
Bash
git clone https://github.com/Cimew08/Mini-Rest-Api.git
cd Mini-Rest-Api
2. Install Dependencies
Run the following command to install all necessary packages (express, mongoose, bcrypt, dotenv, express-async-handler, nodemon):

Bash
npm install
3. Run the Server
To start the project with nodemon (automatic restart on changes), simply run:

Bash
npm start
📮 Testing with Postman
Once the server is running (at http://localhost:3000), you can test it:

Method: POST

URL: http://localhost:3000/api/users

Body: Select raw and then JSON.

Payload Example:

JSON
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "role": "user"
}
Note: Passwords are encrypted using bcrypt before being saved. You will not see plain text passwords in the database.

📂 Project Structure
models/: Mongoose schemas and data structure.

routers/: API route definitions.

controller/: Logic for handling incoming requests.

middlewares/: Error handling and security checks.

helper/: Database connection utilities and helpers.

A quick reminder: To make sure Nodemon starts when you type npm start, don't forget to update the "scripts" section in your package.json file as follows:

JSON
"scripts": {
  "start": "nodemon app.js"
}