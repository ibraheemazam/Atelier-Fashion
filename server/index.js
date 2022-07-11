const express = require('express');
const path = require('path');
const router = require('./routes');
const logger = require('./middleware/logger');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(logger);

app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
