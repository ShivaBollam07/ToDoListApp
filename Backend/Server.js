const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();



const routes = require("./routes/ToDoRoute");

const app = express();
const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Listening on : ${PORT}`))

app.use(express.json());
app.use(cors());

mongoose
 .connect(process.env.MONGODB_URL)
 .then(() => console.log(`connected to mongoDb`))
 .catch((err) => console.log(err))
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log("Mongodb Connected..."))
//     .catch((err) => console.error(err));

// // Routes
app.use(routes);

// app.listen(PORT, () => console.log("Server running on port " + PORT));