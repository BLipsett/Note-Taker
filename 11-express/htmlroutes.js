let path = require("path")


module.exports = function(app) {
    
  

  



    app.get("*", function (req, res) {
        res.sendfile(path.join(__dirname, "../11-express/02-Homework/Develop/public/index.html"))
    })

    app.get("/notes", function (req, res) {
        res.sendfile(path.join(__dirname, "../11-express/02-Homework/Develop/public/notes.html"))
    })



}
//app.use('/static', express.static(path.join(__dirname, 'public')))