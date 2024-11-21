const express = require("express");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
require("dotenv").config({ path: "./backend/.env" });
const productRoutes = require("./routes/productRoutes");

// dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
mongoose.set("debug", true);

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
