const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/auth', require('./routes/auth'));
app.use('/events', require('./routes/events'));
app.use('/register', require('./routes/registrations'));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

