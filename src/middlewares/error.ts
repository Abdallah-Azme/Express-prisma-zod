import { NextFunction, Request, Response } from "express";

async function errorHandler(
  error: Error,
  _: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);
  res.send("Something went wrong");
}

export default errorHandler;
