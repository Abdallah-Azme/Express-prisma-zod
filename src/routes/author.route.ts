import express from "express";
import {
  createAuthorHandler,
  deleteAuthorHandler,
  getAuthorHandler,
  getAuthorsHandler,
  updateAuthorHandler,
} from "../controllers/author.controller";
import { validator } from "../utils/validator";
import {
  CreateAuthorSchema,
  DeleteAuthorSchema,
  ReadAuthorSchema,
  UpdateAuthorSchema,
} from "../schema/author.schema";

const authorRouter = express.Router();

authorRouter
  .route("/")
  .post(validator(CreateAuthorSchema), createAuthorHandler)
  .get(getAuthorsHandler);

authorRouter
  .route("/:authorId")
  .get(validator(ReadAuthorSchema), getAuthorHandler)
  .put(validator(UpdateAuthorSchema), updateAuthorHandler)
  .delete(validator(DeleteAuthorSchema), deleteAuthorHandler);

export default authorRouter;
