const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api', (req, res) => {
    const data = {
        "set_attributes": {
            "existClient": true
        },
        "messages": [
            { "text": "Hello, how can I help you?" }
        ]
    }
    res.json(data);
});

app.post('/api/data', (req, res) => {
    const data = {
        "set_attributes": {
            "existClient": true
        },
        "messages": [
            { "text": "Hello, how can I help you?" }
        ]
    }
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});