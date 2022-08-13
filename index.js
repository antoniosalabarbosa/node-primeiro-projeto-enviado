const express = require('./server/models/models').Express;
require('./server/routes');

const port = process.env.PORT || 3001;

express.listen(port);