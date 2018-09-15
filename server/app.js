require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const mongoose = require('mongoose');

// set middleware
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

const port = process.env.PORT || 4000;
// app needs to listen to port
app.listen(port, () => {
    console.log(`now listening ${port}`);
});
