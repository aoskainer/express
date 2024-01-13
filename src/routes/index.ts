import express from "express";
import { HomeController, UserSelectController } from "../controllers";

const router = express.Router();

router.get("/", HomeController);
router.get("/user", UserSelectController);

export default router;
