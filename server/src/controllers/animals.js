import {animals, groups, regions} from "../data.js";

export function getAllAnimals() {
    console.log("[SYSTEM]: Returning all animals...");
    return animals;
}

export function getAnimalById(id) {
    console.log("[SYSTEM]: Returning animal with id " + id + "...");
    return animals[id];
}

export function filterAnimalsBySpecies(animals, species) {
    console.log("[SYSTEM]: Filtering on animals with species " + species + "...");
    return animals.filter(animal => animal.species.toLowerCase() === species.toLowerCase());
}

export function filterAnimalsByGroup(animals, group) {
    console.log("[SYSTEM]: Filtering on animals with type " + group + "...");
    return animals.filter(animal => animal.group.toLowerCase() === group.toLowerCase());
}

export function filterAnimalsByRegion(animals, region) {
    console.log("[SYSTEM]: Filtering on animals with region " + region + "...");
    return animals.filter(animal => animal.region.toLowerCase() === region.toLowerCase());
}

export function filterAnimalsByAge(animals, age) {
    console.log("[SYSTEM]: Filtering on animals with age " + age + "...");
    return animals.filter(animal => animal.age.toLowerCase() === age.toLowerCase());
}

export function filterAnimalsByGender(animals, gender) {
    console.log("[SYSTEM]: Filtering on animals with gender " + gender + "...");
    return animals.filter(animal => animal.gender.toLowerCase() === gender.toLowerCase());
}

export function filterAnimalsByOwner(animals, ownerId) {
    console.log("[SYSTEM]: Filtering on animals with owner " + ownerId + "...");
    return animals.filter(animal => animal.ownerId === ownerId);
}

export function createAnimal(animal) {
    console.log("[SYSTEM]: Creating animal...");
    animals.push(animal);
}

export function updateAnimal(id, animal) {
    console.log("[SYSTEM]: Updating animal with id " + id + "...");
    animals.find(animal => animal.id === id).update(animal);
}

export function deleteAnimal(id) {
    console.log("[SYSTEM]: Deleting animal with id " + id + "...");
    animals.splice(id, 1);
}

export function getAllRegions() {
    console.log("[SYSTEM]: Returning all regions...");
    return regions;
}

export function getAllGroups() {
    console.log("[SYSTEM]: Returning all groups...");
    return groups;
}

