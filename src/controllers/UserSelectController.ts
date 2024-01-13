import { Request, Response, NextFunction } from "express";
import { UserSelectForm } from "../forms";

const UserSelectController = (req: Request, res: Response, next: NextFunction) => {
  try {
    const form: UserSelectForm = {
      id: parseInt(req.query.id as string),
    }
    res.json(form);
  } catch (error) {
    next(error);
  }
}

export default UserSelectController;
