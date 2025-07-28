const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'build/www')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/www/404.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
