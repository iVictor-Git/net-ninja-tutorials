const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

// set middleware
app.use('/graphql', graphqlHTTP({}));

const port = process.env.PORT || 4000;
// app needs to listen to port
app.listen(port, () => {
    console.log(`now listening ${port}`);
});
