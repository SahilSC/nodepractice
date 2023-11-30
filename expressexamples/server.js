const express = require('express')

const app = express()
//renders static webpages
app.use(express.static("public"))
//allows express to access bodies of forms
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")

// app.get('/', (req, res) => {
//     res.render("index", {tex1t: "yooo"})
// })

const userRoutes = require("./routes/users")

app.use('/users', userRoutes)

app.listen(3000);

