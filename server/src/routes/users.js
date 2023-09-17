import express from "express";
import * as controller from "../controllers/users.js";
import User from "../models/users/User.js";
const router = express.Router();

router.get("/", async (req, res) => {
	const role = req.query.role;
	let users = controller.getAllUsers();
	if (role) users = controller.filterUsersByRole(role);
	res.json(users);
});

router.get("/:id", async (req, res) => {
	res.json(controller.getUserById(req.params.id));
});

router.post("/", async (req, res) => {
	const user = new User("test", "test", "test", "test", "test", "test", "test", "test", "test", "test");
	res.json(controller.createUser(user));
});

router.put("/:id", async (req, res) => {
	res.json(controller.updateUser(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
	res.json(controller.deleteUser(req.params.id));
});

export default router;
