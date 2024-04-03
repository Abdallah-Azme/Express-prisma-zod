import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
  createAuthor,
  deleteAuthor,
  getAuthor,
  getListAuthors,
  updateAuthor,
} from "../services/author.services";

export const getAuthorsHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const authors = await getListAuthors();
    res.status(200).json({ authors });
  }
);
export const getAuthorHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const author = await getAuthor(req.params.authorId);
    res.status(200).json({ author });
  }
);
export const createAuthorHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { firstName, lastName } = req.body;
    const author = await createAuthor({ firstName, lastName });
    res.status(201).json({ author });
  }
);
export const updateAuthorHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { firstName, lastName } = req.body;
    const { id } = req.params;
    const author = await updateAuthor({ firstName, lastName }, id);
    res.status(200).json({ author });
  }
);
export const deleteAuthorHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { authorId } = req.params;
    await deleteAuthor(authorId);
    res.status(200).json({ message: "The author has been deleted" });
  }
);
