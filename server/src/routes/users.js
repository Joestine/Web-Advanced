import escape from "escape-html";
import express from "express";
import * as controller from "../controllers/users.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const role = req.query.role;
		let users = controller.getAllUsers();
		if (role) {
			users = controller.filterUsersByRole(escape(role));
		}
		if (users.length === 0) {
			res.status(404).json({ error: escape("No users found") });
		} else {
			res.status(200).json(users);
		}
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const user = controller.getUserById(req.params.id);
		if (!user) {
			res.status(404).json({ error: escape("User not found") });
		} else {
			res.status(200).json(user);
		}
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.post("/", async (req, res) => {
	try {
		const user = controller.createUser(req.body);
		res.status(201).json(user);
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const user = controller.updateUser(req.params.id, req.body);
		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const user = controller.deleteUser(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

export default router;
