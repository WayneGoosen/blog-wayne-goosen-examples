const express = require("express");
const app = express();

app.get("/", function(req, res) {
    return res.send("Hello World");
});

app.listen(8002, function(){
    console.log('Listening on port 8002');
});