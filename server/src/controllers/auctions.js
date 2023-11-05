import { auctions } from "../data.js";
import Bid from "../models/Bid.js";
import Auction from "../models/auction.js";

export function getAllAuctions() {
	console.log("[SYSTEM]: Returning all auctions...");
	return auctions;
}

export function getAuctionById(id) {
	console.log("[SYSTEM]: Returning auction with id " + id + "...");
	if (id < 0 || !auctions.find((auction) => auction.id === parseInt(id))) {
		throw new Error("[ERROR] Invalid auction ID");
	}
	return auctions.find((auction) => auction.id === parseInt(id));
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

export function filterWonAuctions(auctions, userId) {
	console.log("[SYSTEM]: Returning won auctions for user with id " + userId + "...");
	if (typeof userId !== "number") {
		throw new Error("[ERROR] Invalid userId");
	}
	return auctions.filter((auction) => {
		if (auction.highestBidder) {
			return auction.highestBidder.id === userId;
		}
	});
}

export function addBidToAuction(id, bid, user) {
	console.log("[SYSTEM]: Adding bid to auction with id " + id + "...");
	if (id < 0 || !auctions.find((auction) => auction.id === parseInt(id))) {
		throw new Error("[ERROR] Invalid auction ID");
	}
	if (typeof bid.bid !== "number" || bid.bid < 0) {
		throw new Error("[ERROR] Invalid bid");
	}
	auctions
		.find((auction) => auction.id === parseInt(id))
		.addBid(new Bid(bid.bid, { id: user.id, name: user.firstname }));
}

export function createAuction(auction) {
	console.log("[SYSTEM]: Creating auction...");
	let newAuction;

	try {
		newAuction = new Auction(auction.startBid, auction.startTime, auction.endTime, auction.animal, auction.seller);
		console.log(newAuction);
	} catch (error) {
		console.log(error);
		throw new Error("[ERROR] Invalid auction object");
	}

	auctions.push(newAuction);
	return newAuction;
}

export function deleteAuction(id) {
	console.log("[SYSTEM]: Deleting auction with id " + id + "...");
	if (id < 0 || !auctions.find((auction) => auction.id === parseInt(id))) {
		throw new Error("Invalid auction ID");
	}
	auctions.splice(
		auctions.findIndex((auction) => auction.id === parseInt(id)),
		1
	);
}

export function updateAuction(id, auction) {
	console.log("[SYSTEM]: Updating auction with id " + id + "...");
	auction.startBid = parseInt(auction.startBid);
	auction.startTime = new Date(auction.startTime);
	auction.endTime = new Date(auction.endTime);
	if (id < 0 || !auctions.find((auction) => auction.id === parseInt(id))) {
		throw new Error("Invalid auction ID");
	}
	if (typeof parseInt(auction.startBid) !== "number" || parseInt(auction.startBid) < 0) {
		throw new Error("Invalid startBid");
	}
	if (typeof auction.startTime !== "object") {
		throw new Error("Invalid startTime");
	}
	if (typeof auction.endTime !== "object") {
		throw new Error("Invalid endTime");
	}
	if (typeof auction.animal !== "object") {
		throw new Error("Invalid animal object");
	}
	if (typeof auction.seller !== "object") {
		throw new Error("Invalid seller object");
	}

	const auctionToUpdate = auctions.find((auction) => auction.id === parseInt(id));
	Object.assign(auctionToUpdate, auction);
	return auctionToUpdate;
}

export function deleteBidFromAuction(id, amount, user) {
	console.log("[SYSTEM]: Deleting bid from user " + user.id + " from auction with id " + id + "...");
	const auction = auctions.find((auction) => auction.id === parseInt(id));
	if (id < 0 || !auction) {
		throw new Error("Invalid auction ID");
	}
	const bidIndex = auction.bids.findIndex((bid) => bid.user.id === parseInt(user.id) && bid.bid === amount);
	if (bidIndex === -1) {
		throw new Error("Invalid user");
	}
	auction.bids.splice(bidIndex, 1);
}
