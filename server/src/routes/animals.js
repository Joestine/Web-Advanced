import escape from "escape-html";
import express from "express";
import * as controller from "../controllers/animals.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

const router = express.Router();

router.get("/", isLoggedIn, async (req, res) => {
	try {
		let animals = controller.getAllAnimals();
		const { ownerId } = req.query;

		if (ownerId) animals = controller.filterAnimalsByOwner(animals, escape(ownerId));

		if (animals.length === 0) {
			res.status(404).json({ error: escape("[ERROR] No animals found") });
		} else {
			res.status(200).json(animals);
		}
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.get("/regions", async (req, res) => {
	try {
		const regions = controller.getAllRegions();
		if (regions.length === 0) {
			res.status(404).json({ error: escape("No regions found") });
		} else {
			res.status(200).json(regions);
		}
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.get("/groups", async (req, res) => {
	try {
		const groups = controller.getAllGroups();
		if (groups.length === 0) {
			res.status(404).json({ error: escape("No groups found") });
		} else {
			res.status(200).json(groups);
		}
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.get("/:id", isLoggedIn, async (req, res) => {
	try {
		let animal;
		try {
			animal = controller.getAnimalById(req.params.id);
		} catch (error) {
			return res.status(404).json({ error: escape("Animal not found") });
		}

		if (!animal) {
			res.status(404).json({ error: escape("Animal not found") });
		} else {
			if (animal.ownerId !== req.user.id) {
				res.status(403).json({ error: escape("You are not authorized to access this animal") });
			} else {
				res.status(200).json(animal);
			}
		}
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.post("/", isLoggedIn, async (req, res) => {
	try {
		const animal = controller.createAnimal(req.body);
		res.status(201).json(animal);
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

export default router;
