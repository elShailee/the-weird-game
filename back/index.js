const express = require('express');
const path = require('path');
const cors = require('cors');

/*----------------*\
|   Backend App    |
\-----------------*/
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 4001;
app.listen(PORT, () => console.log(`Listening for requests on port ${PORT}...`));

/*-----------------*\
|   Frontend App    |
\------------------*/

app.use(express.static(path.join(__dirname, 'build')));

app.get('/weird/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
