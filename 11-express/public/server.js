//"use strict";
const express = require("express");
const app = express();
let PORT = process.env.PORT || 8088;
let path = require("path")

app.use(express.static("public"));

//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/index.html"))
})

app.get("/notes", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/notes.html"))
})

app.listen(PORT, function () {
    console.log(`Hello word ha not world at ${PORT}`);
})

//require("./htmlRoutes")(app);



// module.exports = function(app) {
    
//     app.get("*", function (req, res) {
//         res.sendfile(path.join(__dirname, "../11-express/public/index.html"))
//     })

//     app.get("/notes", function (req, res) {
//         res.sendfile(path.join(__dirname, "../11-express/public/notes.html"))
//     })
// }


