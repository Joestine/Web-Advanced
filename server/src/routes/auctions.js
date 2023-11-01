import escape from "escape-html";
import express from "express";
import * as controller from "../controllers/auctions.js";
import isAdmin from "../middleware/isAdmin.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

const router = express.Router();

router.get("/", isLoggedIn, async (req, res) => {
	try {
		let auctions = controller.getAllAuctions();
		const { isActive, priceUnder, won } = req.query;
		if (isActive) auctions = controller.filterAuctionsByActivity(auctions, isActive === "true");
		if (priceUnder) auctions = controller.filterAuctionsByPrice(auctions, escape(priceUnder));
		if (won) auctions = controller.filterAuctionsWithHighestBidder(auctions, req.user);
		res.status(200).json(auctions);
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.get("/:id", isLoggedIn, async (req, res) => {
	const auction = controller.getAuctionById(req.params.id);
	if (!auction) {
		res.status(404).json({ error: escape("Auction not found") });
	} else {
		res.status(200).json(auction);
	}
});

router.post("/", isLoggedIn, async (req, res) => {
	try {
		const auction = controller.createAuction(req.body);
		res.status(201).json(auction);
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.post("/:id/bids", isLoggedIn, async (req, res) => {
	try {
		controller.addBidToAuction(req.params.id, req.body, req.user);
		res.status(201).json({ message: "Bid added successfully" });
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.delete("/:id", [isLoggedIn, isAdmin], async (req, res) => {
	try {
		const auction = controller.deleteAuction(req.params.id);
		res.status(200).json(auction);
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

export default router;
