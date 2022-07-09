const express = require('express');
const path = require('path');
const router = require('./routes.js');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
