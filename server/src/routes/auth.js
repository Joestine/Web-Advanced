import express from "express";
import { blockList, users } from "../data.js";
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
	const token = jwt.sign({ id: user.id, role: user.role, firstname: user.firstname }, process.env.JWT_SECRET);

	res.json({ token: token, user: user });
});

router.delete("/", (req, res) => {
	const header = req.headers.authorization;
	const token = header.split(" ")[1];
	blockList.push(token);
	res.json({ message: "Token has been blocked" });
});

export default router;
