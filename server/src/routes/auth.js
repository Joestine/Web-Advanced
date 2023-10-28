import express from "express";
import { users } from "../data.js";
const router = express.Router();

import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

router.post("/", async (req, res) => {
	const { email, password } = req.body;
	const user = users.find((user) => user.verify(email, password));

	if (!user) {
		return res.status(401).json({ message: "Invalid credentials" });
	}
	const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);

	res.json({ token });
});

export default router;
