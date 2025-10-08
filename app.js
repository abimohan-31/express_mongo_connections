import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoute.js";

const app = express();

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/first_app")
      .then(() => console.log("Connected!"));
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

connectDB();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Express test");
});

const PORT = 7000;
app.listen(PORT, () =>
  console.log(`Server is running in http://localhost:${PORT}`)
);
