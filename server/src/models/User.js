import bcrypt from "bcrypt";
import { users } from "../data.js";

export default class User {
	constructor(
		firstname,
		prefix,
		lastname,
		address,
		housenumber,
		city,
		province,
		postal,
		email,
		password,
		role,
		company,
		iban
	) {
		this.firstname = firstname;
		this.prefix = prefix;
		this.lastname = lastname;
		this.address = address;
		this.housenumber = housenumber;
		this.city = city;
		this.province = province;
		this.postal = postal;
		this.email = email;
		this.password = bcrypt.hashSync(password, 10);
		this.id = users.length + 1;
		this.role = role;
		this.company = company;
		this.iban = iban;

		const requiredFields = [
			"firstname",
			"lastname",
			"address",
			"housenumber",
			"city",
			"province",
			"postal",
			"email",
			"password",
			"role",
		];
		for (const field of requiredFields) {
			if (!this[field]) {
				throw new Error(`[ERROR] Missing required field: ${field}`);
			}
		}

		const validRoles = ["seller", "buyer", "admin"];
		if (!validRoles.includes(this.role)) {
			throw new Error(`[ERROR] Invalid role: ${this.role}`);
		}

		if (this.role === "seller" && (!this.company || !this.iban)) {
			throw new Error("[ERROR] Missing required fields for seller");
		}
	}
}
