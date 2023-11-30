const express = require("express");
const router = express.Router();


router.use(logger);

const ppl = []
//put static routes before dynamic ones to prevent binding issues
router.get('/', (req, res) => {
    if (!ppl.length) {
        res.send("No users");
    }
    else {
        res.send(String(ppl));
    }
})

router.get("/new", (req, res) => {
    //req.query includes stuff in query (ex. )
    if (req.query.name) {
        res.render("users/new", { firstName: req.query.name})
    }
    else {
        res.render("users/new", { firstName : "John Deer" })
    }
})

router.post("/", (req, res) => {
    //req.body contains the name of the data sent by form
    console.log("posted")
    userName = req.body.firstName;
    if (userName) {
        ppl.push(userName)
        res.redirect(`/users/${ppl.length}`)
        console.log(`Successfully added ${userName}`)
    }
})

//combine all routes with similar url
router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get User: ${ppl[req.params.id - 1]}`);
  })
  .put((req, res) => {
    res.send(`Update User: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User: ${req.params.id}`);
  })

function logger(req, res, next) {
    // console.log(req.originalUrl);
    next();
}



module.exports = router