import User from "../models/users/User.js";
import fs from "fs";

export function getAllUsers() {
	console.log("[SYSTEM]: Returning all users...");
	fs.readFile("./src/data/users.json", "utf8", (err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	});
}

export function getUserById(id) {
	console.log("[SYSTEM]: Returning user with id " + id + "...");
	return {msg: "TO BE IMPLEMENTED"};
}

export function filterUsersByRole(role) {
	console.log("[SYSTEM]: Returning all users with role " + role + "...");
	return {msg: "TO BE IMPLEMENTED"};
}

export function createUser(user) {
	console.log("[SYSTEM]: Creating user...");
	return {msg: "TO BE IMPLEMENTED"};
}

export function updateUser(id, user) {
	console.log("[SYSTEM]: Updating user with id " + id + "...");
	return {msg: "TO BE IMPLEMENTED"};
}

export function deleteUser(id) {
	console.log("[SYSTEM]: Deleting user with id " + id + "...");
	return {msg: "TO BE IMPLEMENTED"};
}