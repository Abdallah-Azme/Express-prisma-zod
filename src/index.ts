import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import errorHandler from "./middlewares/error";
import notFoundHandler from "./middlewares/notFound";
import authorRouter from "./routes/author.route";
import { bookRouter } from "./routes/book.route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// start of routes
app.use("/api/v1/authors", authorRouter);
app.use("/api/v1/books", bookRouter);

app.use("*", notFoundHandler);
app.use("*", errorHandler);

// start the server
const port = process.env.PORT || 1338;

app.listen(port, () => {
  console.log("Start listening on port " + port);
});
