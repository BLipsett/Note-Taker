const express = require("express");
let path = require("path")
const app = express();

app.use(express.static('public'));


module.exports = function(app) {
    
  

  



    app.get("*", function (req, res) {
        res.sendfile(path.join(__dirname, "../11-express/public/index.html"))
    })

    app.get("/notes", function (req, res) {
        res.sendfile(path.join(__dirname, "../11-express/public/notes.html"))
    })



}
//app.use('/static', express.static(path.join(__dirname, 'public')))