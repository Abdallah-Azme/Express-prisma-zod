import { Book } from "@prisma/client";
import { db } from "../utils/db.server";

export const createBook = async (bookData: Omit<Book, "id">) => {
  return db.book.create({
    data: {
      title: bookData.title,
      datePublished: bookData.datePublished,
      isFiction: bookData.isFiction,
      authorId: +bookData.authorId,
    },
  });
};
export const getBook = async (bookId: string) => {
  return db.book.findUnique({
    where: {
      id: +bookId,
    },
  });
};
export const getAllBooks = async () => {
  return db.book.findMany({});
};
export const updateBook = async (
  bookId: string,
  bookData: Omit<Book, "id">
) => {
  return db.book.update({
    where: {
      id: +bookId,
    },
    data: {
      title: bookData.title,
      datePublished: bookData.datePublished,
      isFiction: bookData.isFiction,
      authorId: bookData.authorId,
    },
  });
};
export const deleteBook = async (bookId: string) => {
  return db.book.delete({
    where: {
      id: +bookId,
    },
  });
};
