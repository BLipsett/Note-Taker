//"use strict";
const express = require("express");
const app = express();
let PORT = process.env.PORT || 8088;



app.use(express.static('public'));
//app.use(express.static('11-express'));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function () {
    console.log(`Hello word ha not world at ${PORT}`);
})

require("./htmlRoutes")(app);

// let path = require("path")


// module.exports = function(app) {
    
//     app.get("*", function (req, res) {
//         res.sendfile(path.join(__dirname, "../11-express/public/index.html"))
//     })

//     app.get("/notes", function (req, res) {
//         res.sendfile(path.join(__dirname, "../11-express/public/notes.html"))
//     })
// }


