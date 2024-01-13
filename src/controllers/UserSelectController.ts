import { Request, Response, NextFunction } from "express";
import { UserSelectForm } from "../forms";
import { UserSelectService } from "../services";

const UserSelectController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userSelectService = new UserSelectService();
    const form: UserSelectForm = {
      id: parseInt(req.query.id as string),
    }
    const users = await userSelectService.execute(form);
    res.json(users);
  } catch (error) {
    next(error);
  }
}

export default UserSelectController;
