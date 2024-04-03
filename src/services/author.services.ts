import { db } from "../utils/db.server";

type Author = {
  id: number;
  firstName: string;
  lastName: string;
};

export const createAuthor = async (author: Omit<Author, "id">) => {
  return db.author.create({ data: author });
};

export const getListAuthors = async () => {
  return db.author.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });
};

export const getAuthor = async (authorId: string) => {
  return db.author.findUnique({
    where: {
      id: +authorId,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });
};

export const updateAuthor = async (
  author: Omit<Author, "id">,
  authorId: string
) => {
  return db.author.update({
    where: {
      id: +authorId,
    },
    data: {
      firstName: author.firstName,
      lastName: author.lastName,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });
};

export const deleteAuthor = async (authorId: string) => {
  return db.author.delete({
    where: {
      id: +authorId,
    },
  });
};
