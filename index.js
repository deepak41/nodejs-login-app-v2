const express = require('express');
const { addRoutes } = require('./routes/index');
const { mongoConnect } = require('./services/mongoService');
const PORT = 7500;

const app = express();
app.use(express.json());

mongoConnect();
addRoutes(app);

app.listen(PORT, () => console.log(`The server is running at localhost:${PORT}`));
