const express = require("express");
const path = require("path");

var app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

var port = process.env.PORT || 3000;

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
