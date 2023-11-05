export const getAllOwnedAnimals = async (userId) => {
	try {
		let response = await fetch(`http://localhost:3000/api/animals?ownerId=${userId}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		if (!response.ok) {
			throw response;
		}
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

export const getAllRegions = async () => {
	try {
		let response = await fetch("http://localhost:3000/api/animals/regions", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		if (!response.ok) {
			throw response;
		}
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

export const getAllGroups = async () => {
	try {
		let response = await fetch("http://localhost:3000/api/animals/groups", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		if (!response.ok) {
			throw response;
		}
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

export const addAnimal = async (animal) => {
	try {
		let response = await fetch("http://localhost:3000/api/animals", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify(animal),
		});
		if (!response.ok) {
			throw response;
		}
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};
