import User from "../models/users/User.js";
import fs from "fs";
import {users} from "../data.js";
import Seller from "../models/users/Seller.js";
import Buyer from "../models/users/Buyer.js";
import Admin from "../models/users/Admin.js";

export function getAllUsers() {
	console.log("[SYSTEM]: Returning all users...");
	return users;
}

export function getUserById(id) {
	console.log("[SYSTEM]: Returning user with id " + id + "...");
	return users[id];
}

export function filterUsersByRole(role) {
	console.log("[SYSTEM]: Filtering all users with role " + role + "...");
	switch (role) {
		case "seller": return users.filter(user => user instanceof Seller);
		case "buyer": return users.filter(user => user instanceof Buyer);
		case "admin": return users.filter(user => user instanceof Admin);
	}
}

export function createUser(user) {
	console.log("[SYSTEM]: Creating user...");
	users.push(user);
}

export function updateUser(id, user) {
	console.log("[SYSTEM]: Updating user with id " + id + "...");
	users.find(user => user.id === id).update(user);
}

export function deleteUser(id) {
	console.log("[SYSTEM]: Deleting user with id " + id + "...");
	users.splice(id, 1);
}