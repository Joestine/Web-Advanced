import { users } from "../data.js";
import User from "../models/User.js";

export function getAllUsers() {
	console.log("[SYSTEM]: Returning all users...");
	return users;
}

export function getUserById(id) {
	console.log("[SYSTEM]: Returning user with id " + id + "...");
	if (id < 0 || id >= users.length) {
		throw new Error("[ERROR] Invalid user ID");
	}
	return users[id];
}

export function filterUsersByRole(role) {
	console.log("[SYSTEM]: Filtering all users with role " + role + "...");
	if (typeof role !== "string") {
		throw new Error("[ERROR] Invalid role");
	}
	switch (role) {
		case "user":
			return users.filter((user) => user.role === "user");
		case "admin":
			return users.filter((user) => user.role === "admin");
		default:
			throw new Error("[ERROR] Invalid role");
	}
}

export function createUser(user) {
	console.log("[SYSTEM]: Creating user...");
	let newUser;

	try {
		newUser = new User(user);
	} catch (error) {
		throw new Error("[ERROR] Invalid user object");
	}

	users.push(newUser);
	return newUser;
}

export function updateUser(id, user) {
	console.log("[SYSTEM]: Updating user with id " + id + "...");
	if (id < 0 || id >= users.length) {
		throw new Error("[ERROR] Invalid user ID");
	}

	const updatedUser = new User(user);

	if (!updatedUser.isValid()) {
		throw new Error("[ERROR] Invalid user object");
	}

	users[id] = updatedUser;
	return updatedUser;
}

export function deleteUser(id) {
	console.log("[SYSTEM]: Deleting user with id " + id + "...");
	if (id < 0 || id >= users.length) {
		throw new Error("[ERROR] Invalid user ID");
	}
	users.splice(id, 1);
}
