let express = require("express");

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//let PORT = 8080;
let PORT = process.env.PORT || 8088;

app.listen(PORT, function () {

    console.log(`Hello word ha not world at ${PORT}`);
})

console.log("listening on " + PORT)


app.get('/index.html', function (req, res) {
    res.send('Hello, World!')
})


