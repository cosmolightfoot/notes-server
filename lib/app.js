const express = require('express');
const app = express();


app.use(require('cors')());

app.use(express.json());

app.use('/api/v1/notes', require('./routes/notes.js'));

app.use(require('./middleware/error-handling'));
app.use(require('./middleware/not-found'));

module.exports = app;
