import {auctions} from "../data.js";

export function getAllAuctions() {
    console.log("[SYSTEM]: Returning all auctions...");
    return auctions;
}

export function getAuctionById(id) {
    console.log("[SYSTEM]: Returning auction with id " + id + "...");
    return auctions[id];
}

export function filterAuctionsByActivity(auctions, isActive) {
    console.log("[SYSTEM]: Filtering auctions by activity...");
    return auctions.filter(auction => auction.isActive === isActive);
}

export function filterAuctionsByPrice(auctions, priceUnder) {
    console.log("[SYSTEM]: Filtering auctions by price...");
    return auctions.filter(auction => auction.startBid <= priceUnder);
}

export function createAuction(auction) {
    console.log("[SYSTEM]: Creating auction...");
    auctions.push(auction);
}

export function deleteAuction(id) {
    console.log("[SYSTEM]: Deleting auction with id " + id + "...");
    auctions.splice(id, 1);
}
