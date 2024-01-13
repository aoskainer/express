import { Request, Response, NextFunction } from "express";

const HomeController = (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("Hello World!");
  } catch (error) {
    next(error);
  }
}

export default HomeController;
