const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const customerRoutes = require("./routes/customerRoutes");
const app = express();
const PORT = process.env.PORT || 3030;

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://anuragmourya975:9BFAHBwfOf9j0SnM@cluster0.cqfxczt.mongodb.net/customer"
  )
  .then(() => {
    console.log("connection to mongodb successfull");
  })
  .catch((error) => {
    console.log(error);
  });
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// Use the customer routes
app.use("/api/customer", customerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
