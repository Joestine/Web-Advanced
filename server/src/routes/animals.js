import escape from "escape-html";
import express from "express";
import * as controller from "../controllers/animals.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		let animals = controller.getAllAnimals();
		const { species, group, region, age, gender, ownerId } = req.query;

		if (species) animals = controller.filterAnimalsBySpecies(escape(species));
		if (group) animals = controller.filterAnimalsByGroup(escape(group));
		if (region) animals = controller.filterAnimalsByRegion(escape(region));
		if (age) animals = controller.filterAnimalsByAge(escape(age));
		if (gender) animals = controller.filterAnimalsByGender(escape(gender));
		if (ownerId) animals = controller.filterAnimalsByOwner(escape(ownerId));

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

router.get("/:id", async (req, res) => {
	try {
		const animal = controller.getAnimalById(req.params.id);
		if (!animal) {
			res.status(404).json({ error: escape("Animal not found") });
		} else {
			res.status(200).json(animal);
		}
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.post("/", async (req, res) => {
	try {
		const animal = controller.createAnimal(req.body);
		res.status(201).json(animal);
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const updatedAnimal = controller.updateAnimal(req.params.id, req.body);
		res.status(200).json(updatedAnimal);
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		controller.deleteAnimal(req.params.id);
		res.status(202).json({ message: escape("Animal deleted successfully") });
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

export default router;
