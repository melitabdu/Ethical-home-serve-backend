import express from "express";
import { loginOwner } from "../controllers/OwnerAuthController.js";

const router = express.Router();

// Owner login route
router.post("/login", loginOwner);

export default router;
