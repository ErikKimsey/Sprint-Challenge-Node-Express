const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const actionRoutes = require('./actions/actionRoutes.js');
const projectRoutes = require('./projects/projectRoutes.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan());
app.use(helmet());

app.use('/actions', actionRoutes);



app.listen(9000, () => console.log("Listening on 9000"));