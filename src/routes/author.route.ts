import express from "express";
import {
  createAuthorHandler,
  deleteAuthorHandler,
  getAuthorHandler,
  getAuthorsHandler,
  updateAuthorHandler,
} from "../controllers/author.controller";

const authorRouter = express.Router();

authorRouter.route("/authors").post(createAuthorHandler).get(getAuthorsHandler);

authorRouter
  .route("/authors/:authorId")
  .get(getAuthorHandler)
  .put(updateAuthorHandler)
  .delete(deleteAuthorHandler);

export default authorRouter;
