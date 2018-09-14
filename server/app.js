const express = require('express');
const app = express();

const port = process.env.PORT || 4000;
// app needs to listen to port
app.listen(port, () => {
    console.log(`now listening ${port}`);
});
