import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "../services/book.service";

export const createBookHandler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const books = await createBook(req.body);
    res.status(200).json({ books });
  }
);
export const getBookHandler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const book = await getBook(req.params.bookId);
    res.status(200).json({ book });
  }
);
export const getAllBooksHandler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const books = await getAllBooks();
    res.status(200).json({ books });
  }
);
export const updateBookHandler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const books = await updateBook(req.params.bookId, req.body);
    res.status(200).json({ books });
  }
);
export const deleteBookHandler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    await deleteBook(req.params.bookId);
    res.status(200).json({ message: "oki" });
  }
);
