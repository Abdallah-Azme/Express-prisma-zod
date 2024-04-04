import { object, string } from "zod";

const authorPayload = {
  body: object({
    firstName: string({
      required_error: "The first name is required",
    }).min(2, "Enter a valid first name"),
    lastName: string({
      required_error: "The last name is required",
    }).min(2, "Enter a valid last name"),
  }),
};

const authorParams = {
  params: object({
    authorId: string({
      required_error: "The author ID is required",
    }),
  }),
};

export const CreateAuthorSchema = object({
  ...authorPayload,
});
export const ReadAuthorSchema = object({
  ...authorParams,
});
export const UpdateAuthorSchema = object({
  ...authorPayload,
  ...authorParams,
});
export const DeleteAuthorSchema = object({
  ...authorParams,
});
