const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use([morgan('dev'), cors(), express.json()]);
app.use('/', routes);

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});
