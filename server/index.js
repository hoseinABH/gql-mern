const express = require('express');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const cors = require('cors');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

// Start server
app.listen(port, console.log('Server is running on port 🌈' + port));
