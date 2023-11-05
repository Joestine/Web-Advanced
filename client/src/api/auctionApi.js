export const getAllAuctions = async () => {
	try {
		let response = await fetch("http://localhost:3000/api/auctions", {
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

export const getAuctionById = async (id) => {
	try {
		let response = await fetch(`http://localhost:3000/api/auctions/${id}`, {
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

export const getAllActiveAuctions = async () => {
	try {
		let response = await fetch(`http://localhost:3000/api/auctions?isActive="true"`, {
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

export const getAllWonAuctions = async (userId) => {
	try {
		let response = await fetch(`http://localhost:3000/api/auctions/won/${userId}`, {
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

export const getAuctionInfo = async (id) => {
	try {
		let response = await fetch(`http://localhost:3000/api/auctions/${id}`, {
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

export const createAuction = async (auction) => {
	try {
		let response = await fetch("http://localhost:3000/api/auctions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify(auction),
		});
		if (!response.ok) {
			throw response;
		}
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

export const deleteAuction = async (id) => {
	try {
		let response = await fetch(`http://localhost:3000/api/auctions/${id}`, {
			method: "DELETE",
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

export const updateAuction = async (id, auction) => {
	try {
		let response = await fetch(`http://localhost:3000/api/auctions/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify(auction),
		});
		if (!response.ok) {
			throw response;
		}
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};
