import { auctions } from "../data.js";

class Auction {
	constructor(startBid, startTime, endTime, animal_id, seller_id) {
		const requiredFields = [
			"bids",
			"startBid",
			"start",
			"end",
			"animal_id",
			"seller_id",
			"highest_bidder_id",
			"id",
		];
		if (requiredFields.some((field) => !auction[field])) {
			throw new Error("[ERROR] Missing required fields");
		}
		if (startBid < 0) {
			throw new Error("[ERROR] Invalid start bid");
		}
		if (start < 0) {
			throw new Error("[ERROR] Invalid start time");
		}
		if (end < 0) {
			throw new Error("[ERROR] Invalid end time");
		}
		if (animal_id < 0) {
			throw new Error("[ERROR] Invalid animal ID");
		}
		if (seller_id < 0) {
			throw new Error("[ERROR] Invalid seller ID");
		}
		if (highest_bidder_id < 0) {
			throw new Error("[ERROR] Invalid highest bidder ID");
		}
		if (id < 0) {
			throw new Error("[ERROR] Invalid auction ID");
		}
		if (start > end) {
			throw new Error("[ERROR] Start time is after end time");
		}
		if (start === end) {
			throw new Error("[ERROR] Start time is the same as end time");
		}

		this.bids = [];
		this.startBid = startBid;
		this.start = startTime;
		this.end = endTime;
		this.animal_id = animal_id;
		this.seller_id = seller_id;
		this.highest_bidder_id = null;
		this.id = auctions.length;
	}

	addBid(bid, buyer_id) {
		this.bids.push(bid);
		this.highest_bidder_id = buyer_id;
	}
}
