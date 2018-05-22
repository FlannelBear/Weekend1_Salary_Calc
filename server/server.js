// Source in express
const express = require('express');
// Set app as the express function
const app = express();
// tell the server to use the public folder when responding to browser requests
app.use(express.static('server/public'));
// set the port
const port = 5000;
// tell the server to listen for req from the port
app.listen( port, function(){
    console.log(`Listening to port ${port}`);
});