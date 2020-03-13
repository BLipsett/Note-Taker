const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



let public = {};
app.use(express.static("public", public));



let PORT = process.env.PORT || 8088;

app.listen(PORT, function () {

    console.log(`Hello word ha not world at ${PORT}`);
})

require("./htmlRoutes")(app);


