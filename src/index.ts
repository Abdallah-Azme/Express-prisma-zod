import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authorRouter from "./routes/author.route";
import notFoundHandler from "./middlewares/notFound";
import errorHandler from "./middlewares/error";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// start of routes
app.use("/api/v1", authorRouter);

app.use("*", notFoundHandler);
app.use("*", errorHandler);

// start the server
const port = process.env.PORT || 1338;

app.listen(port, () => {
  console.log("Start listening on port " + port);
});
