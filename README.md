🚀 Mini REST API Project
This is a minimal Node.js REST API designed for data operations and testing via Postman. It includes password hashing, error handling, and MongoDB integration.

⚠️ IMPORTANT: Environment Variables
For security reasons, the sensitive configuration file (config.env) is not included in this repository. To run this project, you must create your own configuration.

How to set up the Environment:
Create a file named config.env in the root directory of the project.

Copy and paste the following variables into that file:

Kod snippet'i
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
Replace your_mongodb_connection_string_here with your actual MongoDB Atlas or local connection string.

🛠️ Installation & Getting Started
Follow these steps to get your local copy up and running:

1. Clone the Repository
Bash
git clone https://github.com/Cimew08/Mini-Rest-Api.git
cd Mini-Rest-Api
2. Install Dependencies
This will install all required packages like express, mongoose, bcrypt, etc.

Bash
npm install
3. Run the Server
For Development (using nodemon):

Bash
npm run dev
For Production:

Bash
npm start
📮 Testing with Postman
Once the server is running (usually at http://localhost:5000), you can send data:

Method: POST

URL: http://localhost:5000/api/users (or your specific route)

Body: Select raw and then JSON.

Payload Example:

JSON
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "role": "user"
}
Note: Passwords are encrypted using bcrypt before being saved to the database. You won't see the plain text password in the database.

📂 Project Structure
models/: Mongoose schemas.

routers/: API route definitions.

controller/: Logic for handling requests.

middlewares/: Error handling and security checks.

helper/: Database connection utility.