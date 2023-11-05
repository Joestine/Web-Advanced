export default class Auction {
	static nextAuctionId = 0;

	constructor(startBid, startTime, endTime, animal, seller) {
		this.bids = [];
		this.startBid = startBid;
		this.startTime = startTime;
		this.endTime = endTime;
		this.animal = animal;
		this.seller = { name: seller.firstname, id: seller.id };
		this.highestBidder = null;
		this.id = Auction.nextAuctionId++;

		const requiredFields = ["startBid", "startTime", "endTime", "animal", "seller"];
		for (const field of requiredFields) {
			if (!this[field] && this[field] !== 0) {
				throw new Error(`[ERROR] Missing required field: ${field}`);
			}
		}
		if (startBid < 0) {
			throw new Error("[ERROR] Invalid start bid");
		}
		if (startTime < 0) {
			throw new Error("[ERROR] Invalid start time");
		}
		if (endTime < 0) {
			throw new Error("[ERROR] Invalid end time");
		}
		if (!animal) {
			throw new Error("[ERROR] Invalid animal ID");
		}
		if (!seller) {
			throw new Error("[ERROR] Invalid seller ID");
		}
		if (startTime > endTime) {
			throw new Error("[ERROR] Start time is after end time");
		}
		if (startTime === endTime) {
			throw new Error("[ERROR] Start time is the same as end time");
		}
	}

	addBid(bid) {
		this.bids.push(bid);
		this.highestBidder = bid.user;
	}
}
