const express = require('express');
const app = express();
const port = 3000;

app.get('/api/tempNumbers', function (req, res) {
    res.json({ message: "Hello!!!" })
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
