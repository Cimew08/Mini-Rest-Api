⚠️ Important Notice

MongoDB will not work by default because I removed my own MongoDB URL from the .env file for security reasons.
You must add your own MongoDB connection string to the MONGO_URL variable inside the config.env file.

Mini API Project Setup

To use this mini API project, you will need MongoDB, some npm packages, and Postman.

I created a helper folder for the MongoDB connection. You just need to add your MongoDB URL via env. Put your URL in the MONGO_URL variable inside the config.env file.

To send data, use Postman:

Go to Body → raw

Select JSON as the data type

You can send name, password, email, role, and other fields according to the schema in the model folder.

Passwords will not be visible when data is sent, as they are hashed. Error handling is already implemented.

I will continue updating this file as I learn new things.

Required npm packages:

npm install dotenv express express-async-handler mongoose nodemon bcrypt