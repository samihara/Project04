const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRoutes = require('./routes/api');
const uiRoutes = require('./routes/ui');

const app = express();
const PORT = 3000;

app.use('/resources', express.static(path.join(__dirname, 'resources')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', apiRoutes);
app.use('/ui', uiRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
