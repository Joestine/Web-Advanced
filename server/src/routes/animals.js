import express from "express";
import * as controller from "../controllers/animals.js";

const router = express.Router();

router.get("/", async (req, res) => {
    let animals = controller.getAllAnimals();
    const { species, group, region, age, gender, ownerId } = req.query;

    if (species) animals = controller.filterAnimalsBySpecies(animals, species);
    if (group) animals = controller.filterAnimalsByGroup(animals, group);
    if (region) animals = controller.filterAnimalsByRegion(animals, region);
    if (age) animals = controller.filterAnimalsByAge(animals, age);
    if (gender) animals = controller.filterAnimalsByGender(animals, gender);
    if (ownerId) animals = controller.filterAnimalsByOwner(animals, ownerId);

    res.json(animals);
});

router.get("/regions", async (req, res) => {
    res.json(controller.getAllRegions());
});

router.get("/groups", async (req, res) => {
    res.json(controller.getAllGroups());
});

router.get("/:id", async (req, res) => {
     res.json(controller.getAnimalById(req.params.id));
});


router.post("/", async (req, res) => {
    res.json(controller.createAnimal(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(controller.updateAnimal(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
    res.json(controller.deleteAnimal(req.params.id));
});

export default router;