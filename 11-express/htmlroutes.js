let path = require("path")

module.exports = function (app) {



    app.get("/index", function (req, res) {
        res.sendfile(path.join(__dirname, "../11-express/02-homework/Develop/public/index.html"))
    })

    app.get("/notes", function (req, res) {
        res.sendfile(path.join(__dirname, "../11-express/02-homework/Develop/public/notes.html"))
    })

}
