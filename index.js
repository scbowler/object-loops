const express = require('express');
const { resolve } = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.static(resolve(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server running at localhost: ${PORT}`);
}).on('error', err => {
    console.log('Error starting server:', err.message);
    console.log('Verify you don\'t already have a server running on PORT:%d', PORT);
});
