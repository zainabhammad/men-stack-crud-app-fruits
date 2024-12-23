//we will create our server first, make sure express is installed 

//here is where we import modules
const dotenv = require("dotenv")
dotenv.config()
//we begin by loading express 
const express = require('express')
const { default: mongoose } = require("mongoose")
const mangoose = require("mongoose")

const app = express()

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });

  //Import the Fruit model 
  const Fruit = require("./models/fruit.js")
  app.use(express.urlencoded({ extended: false }));

 // server.js

 // server.js

// POST /fruits
// server.js

// POST /fruits
app.post("/fruits", async (req, res) => {
    if (req.body.isReadyToEat === "on") {
      req.body.isReadyToEat = true;
    } else {
      req.body.isReadyToEat = false;
    }
    await Fruit.create(req.body);
    res.redirect("/fruits/new");
  });
  
  
  app.get("/fruits", (req, res) => {
    res.send("Welcome to the index page!")
  })
// GET /fruits/new
app.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs");
  });
  
//Get / 
app.get("/", async(req,res) => {
    res.render('index.ejs')
})


app.listen(3000, () => {
    console.log('Listening on port 3000')
})