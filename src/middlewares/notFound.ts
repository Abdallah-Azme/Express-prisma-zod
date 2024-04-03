import { Request, Response } from "express";

async function notFoundHandler(_: Request, res: Response) {
  res.status(404).send("This router does not exist");
}

export default notFoundHandler;
