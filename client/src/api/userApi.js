export const getAllUsers = async () => {
	try {
		let response = await fetch("http://localhost:3000/api/users", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		if (!response.ok) {
			throw response;
		}
		const users = await response.json();
		return users;
	} catch (error) {
		throw error;
	}
};

export const getUserById = async (id) => {
	try {
		let response = await fetch(`http://localhost:3000/api/users/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		if (!response.ok) {
			throw response;
		}
		const user = await response.json();
		return user;
	} catch (error) {
		throw error;
	}
};

export const deleteUser = async (id) => {
	try {
		let response = await fetch(`http://localhost:3000/api/users/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		if (!response.ok) {
			throw response;
		}
		if (!response.ok) {
			throw response;
		}
		return true;
	} catch (error) {
		throw error;
	}
};

export const updateUser = async (id, data) => {
	try {
		let response = await fetch(`http://localhost:3000/api/users/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify(data),
		});
		if (!response.ok) {
			throw response;
		}
		const user = await response.json();
		return user;
	} catch (error) {
		throw error;
	}
};
