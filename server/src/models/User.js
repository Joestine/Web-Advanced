import bcrypt from "bcrypt";

export default class User {
	static nextUserId = 0;

	constructor(firstname, prefix, lastname, address, housenumber, city, province, postal, email, password, role) {
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
		this.id = User.nextUserId++;
		this.role = role;

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

		const validRoles = ["user", "admin"];
		if (!validRoles.includes(this.role)) {
			throw new Error(`[ERROR] Invalid role: ${this.role}`);
		}
	}

	verify(email, password) {
		console.log("[SYSTEM]: Verifying user...");
		return this.email === email && bcrypt.compareSync(password, this.password);
	}
}
