import { auctions } from "../data.js";

export function getAllAuctions() {
	console.log("[SYSTEM]: Returning all auctions...");
	return auctions;
}

export function getAuctionById(id) {
	console.log("[SYSTEM]: Returning auction with id " + id + "...");
	if (id < 0 || id >= auctions.length) {
		throw new Error("[ERROR] Invalid auction ID");
	}
	return auctions[id];
}

export function filterAuctionsByActivity(auctions, isActive) {
	console.log("[SYSTEM]: Filtering auctions by activity...");
	if (typeof isActive !== "boolean") {
		throw new Error("[ERROR] Invalid isActive parameter");
	}
	return auctions.filter((auction) => auction.isActive === isActive);
}

export function filterAuctionsByPrice(priceUnder) {
	console.log("[SYSTEM]: Filtering auctions by price...");
	if (typeof priceUnder !== "number" || priceUnder < 0) {
		throw new Error("[ERROR] Invalid price");
	}
	return auctions.filter((auction) => auction.startBid <= priceUnder);
}

export function createAuction(auction) {
	console.log("[SYSTEM]: Creating auction...");
	let newAuction;

	try {
		newAuction = new Auction(auction);
	} catch (error) {
		throw new Error("[ERROR] Invalid auction object");
	}

	auctions.push(newAuction);
	return newAuction;
}

export function deleteAuction(id) {
	console.log("[SYSTEM]: Deleting auction with id " + id + "...");
	if (id < 0 || id >= auctions.length) {
		throw new Error("Invalid auction ID");
	}
	auctions.splice(id, 1);
}
