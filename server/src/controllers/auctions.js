import { auctions } from "../data.js";
import Bid from "../models/Bid.js";

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
	return auctions.filter((auction) => auction.startTime < Date.now() && auction.endTime > Date.now());
}

export function filterAuctionsWithHighestBidder(auctions, user) {
	console.log("[SYSTEM]: Filtering auctions with highest bidder...");
	if (typeof user !== "object") {
		throw new Error("[ERROR] Invalid user object");
	}
	return auctions.filter((auction) => auction.highestBidder.id === user.id);
}

export function addBidToAuction(id, bid, user) {
	console.log("[SYSTEM]: Adding bid to auction with id " + id + "...");
	if (id < 0 || id >= auctions.length) {
		throw new Error("[ERROR] Invalid auction ID");
	}
	if (typeof bid.bid !== "number" || bid.bid < 0) {
		throw new Error("[ERROR] Invalid bid");
	}
	auctions[id].addBid(new Bid(bid.bid, { id: user.id, name: user.firstname }));
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
