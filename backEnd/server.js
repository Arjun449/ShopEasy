const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const { authorization } = require("paypal-rest-sdk");

//creating database connection(we could also create a different file for it and import that)
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://Arjun449:messi94@shopeasy.68xyu.mongodb.net/")
  .then(() => console.log("mongoDB is connected successfully"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "conten-type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.listen(PORT, () => console.log(`server is running at ${PORT}`));
