import {auctions} from "../data.js";

class Auction {
    constructor(startBid, startTime, endTime, animal_id, seller_id) {
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