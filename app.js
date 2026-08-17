import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoute.js";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Express test");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`Server is running in http://localhost:${PORT}`)
);
