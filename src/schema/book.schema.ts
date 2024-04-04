import { boolean, object, string } from "zod";

const bookPayload = {
  body: object({
    title: string({
      required_error: "The title is required",
    }),
    datePublished: string({
      required_error: "The date of publication is required",
    }),
    isFiction: boolean({
      required_error: "The isFiction is required",
    }),
    authorId: string({
      required_error: "The authorId is required",
    }),
  }),
};

const bookParams = {
  params: object({
    bookId: string({
      required_error: "The bookId is required",
    }),
  }),
};

export const CreateBookSchema = object({
  ...bookPayload,
});
export const ReadBookSchema = object({
  ...bookParams,
});
export const ReadAllBooksSchema = object({});

export const UpdateBookSchema = object({
  ...bookPayload,
  ...bookParams,
});
export const DeleteBookSchema = object({
  ...bookParams,
});
