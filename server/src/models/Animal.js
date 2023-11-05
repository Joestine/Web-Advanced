export default class Animal {
	static nextAnimalId = 0;

	constructor(name, species, group, region, age, gender, description, ownerId) {
		if (!name || !species || !group || !region || !age || !gender) {
			throw new Error("Missing required fields");
		}

		if (
			typeof name !== "string" ||
			typeof species !== "string" ||
			typeof group !== "string" ||
			typeof region !== "string" ||
			typeof gender !== "string" ||
			typeof description !== "string"
		) {
			throw new Error("Invalid field types");
		}

		if (typeof age !== "number" || age < 0) {
			throw new Error("Invalid age");
		}
		this.name = name;
		this.species = species;
		this.group = group;
		this.region = region;
		this.age = age;
		this.gender = gender;
		this.description = description;
		this.ownerId = ownerId;
		this.id = Animal.nextAnimalId++;
	}
}
