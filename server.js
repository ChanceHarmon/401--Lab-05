'use strict';

const express = require('express');

const app = express();

app.use('/docs', express.static('./docs'));

app.get('/', (req, res) => {
  res.send('Affirmative');
});

app.listen(3000, () => console.log(`Listening on 3000`));