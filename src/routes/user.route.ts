import { Router } from "express";
import { userCreate, userSearch } from "../controllers";

const router = Router();

router.get("/users/search", userSearch);
router.post("/users/create", userCreate)

export const userRouter = router;