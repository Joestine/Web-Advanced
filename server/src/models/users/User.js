import {users} from "../../data.js";

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
		password
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
		this.password = password;
		id = users.length;
	}
}

