import express from "express";
import {
  createBookHandler,
  deleteBookHandler,
  getAllBooksHandler,
  getBookHandler,
} from "../controllers/book.controller";
import {
  CreateBookSchema,
  DeleteBookSchema,
  ReadBookSchema,
  UpdateBookSchema,
} from "../schema/book.schema";
import { validator } from "../utils/validator";

const bookRouter = express.Router();

bookRouter
  .route("/")
  .post(validator(CreateBookSchema), createBookHandler)
  .get(getAllBooksHandler);

bookRouter
  .route("/:bookId")
  .get(validator(ReadBookSchema), getBookHandler)
  .put(validator(UpdateBookSchema), createBookHandler)
  .delete(validator(DeleteBookSchema), deleteBookHandler);

export { bookRouter };
