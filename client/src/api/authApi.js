import { user } from "../stores/authorizationStore";

export const login = async (email, password) => {
	try {
		let response = await fetch("http://localhost:3000/api/auth", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
		if (!response.ok) {
			throw response;
		}
		const { token, user } = await response.json();
		localStorage.setItem("token", token);
		return user;
	} catch (error) {
		throw error;
	}
};

export const logout = async () => {
	let response = await fetch("http://localhost:3000/api/auth", {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});
	if (!response.ok) {
		throw response;
	}
	localStorage.removeItem("token");
	user.set(null);
	window.location.href = "/";
};
