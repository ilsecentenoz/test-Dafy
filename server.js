const express = require('express');
const app = express();

app.use("/", express.static('public'));
app.use('/static', express.static(__dirname + '/node_modules'));

app.listen(3000, () =>{
	console.log("ready 3000!!");
});

