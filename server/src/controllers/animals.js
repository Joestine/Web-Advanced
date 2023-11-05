import { animals, groups, regions, users } from "../data.js";
import Animal from "../models/Animal.js";

export function getAllAnimals() {
	console.log("[SYSTEM]: Returning all animals...");
	return animals;
}

export function getAnimalById(id) {
	console.log("[SYSTEM]: Returning animal with id " + id + "...");
	if (id < 0 || !animals.find((animal) => animal.id === parseInt(id))) {
		throw new Error("[ERROR] Invalid animal ID");
	}
	return animals.find((animal) => animal.id === parseInt(id));
}

export function filterAnimalsByOwner(animals, ownerId) {
	console.log("[SYSTEM]: Filtering on animals with owner " + ownerId + "...");
	if (!ownerId || !users.find((user) => user.id === parseInt(ownerId))) {
		throw new Error("[ERROR] Invalid owner ID");
	}
	return animals.filter((animal) => animal.ownerId === parseInt(ownerId));
}

export function createAnimal(animal) {
	console.log("[SYSTEM]: Creating animal...");
	let newAnimal;

	try {
		newAnimal = new Animal(
			animal.name,
			animal.species,
			animal.group,
			animal.region,
			animal.age,
			animal.gender,
			animal.description,
			animal.ownerId
		);
	} catch (error) {
		throw new Error("[ERROR] Invalid animal object");
	}

	animals.push(newAnimal);
	return newAnimal;
}

export function updateAnimal(id, animal) {
	console.log("[SYSTEM]: Updating animal with id " + id + "...");
	const animalToUpdate = animals.find((a) => a.id === id);
	if (!animalToUpdate) throw new Error("[ERROR] Animal not found");
	if (!animal || !Object.keys(animal).length) throw new Error("[ERROR] Missing update fields");

	const fields = ["name", "species", "group", "region", "gender", "description"];
	fields.forEach((field) => {
		if (animal[field] && typeof animal[field] !== "string") throw new Error(`[ERROR] Invalid ${field}`);
	});

	if (animal.age && (typeof animal.age !== "number" || animal.age < 0)) throw new Error("[ERROR] Invalid age");
	if (animal.ownerId && typeof animal.ownerId !== "number") throw new Error("[ERROR] Invalid owner ID");
	Object.assign(animalToUpdate, animal);
}

export function deleteAnimal(id) {
	console.log("[SYSTEM]: Deleting animal with id " + id + "...");
	if (id < 0 || !animals.find((animal) => animal.id === id)) {
		throw new Error("[ERROR] Invalid animal ID");
	}
	const index = animals.findIndex((animal) => animal.id === id);
	animals.splice(index, 1);
}

export function getAllRegions() {
	console.log("[SYSTEM]: Returning all regions...");
	return regions;
}

export function getAllGroups() {
	console.log("[SYSTEM]: Returning all groups...");
	return groups;
}
