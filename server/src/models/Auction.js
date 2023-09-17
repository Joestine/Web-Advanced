class Auction {
    constructor(start, end, animal_id, seller_id) {
        this.bids = [];
        this.start = start;
        this.end = end;
        this.animal_id = animal_id;
        this.seller_id = seller_id;
        this.highest_bidder_id = null;
    }

    addBid(bid, buyer_id) {
        this.bids.push(bid);
        this.highest_bidder_id = buyer_id;
    }
}