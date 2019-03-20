const express = require("express");
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require("morgan")
// Initialize Express
const app = express();

const PORT = process.env.PORT || 5000;
const db = require("./models");
//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routes
const apiRoutes = require("./routes/API");
app.use("/api", apiRoutes);
// API
// app.use('/api', apiRoutes);
// app.use("/auth", authRoutes);
// app.use("/authorize", dashRoutes)

// Configure middleware
    // Use morgan
    app.use(logger("dev"));
    // Use body parser
    app.use(bodyParser.json());
    // Use cors
    app.use(cors());

// Connecting to DB

// Serve up static assets (usually on heroku)
// 


db.sequelize.sync({})

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

    app.listen(PORT, function(){
        console.log(`APP listening on PORT ${PORT}`)
 });