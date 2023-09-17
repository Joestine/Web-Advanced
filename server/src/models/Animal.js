import {animals} from "../data.js";

export default class Animal {
    constructor(name, species, group, region, age, gender, description, ownerId) {
        this.name = name;
        this.species = species;
        this.group = group;
        this.region = region;
        this.age = age;
        this.gender = gender;
        this.description = description;
        this.ownerId = ownerId;
        this.id = animals.length;
    }
}