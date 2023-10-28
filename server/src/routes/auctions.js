import escape from "escape-html";
import express from "express";
import * as controller from "../controllers/auctions.js";
import isAdmin from "../middleware/isAdmin.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

const router = express.Router();

router.get("/", isLoggedIn, async (req, res) => {
	let auctions = controller.getAllAuctions();
	const { isActive, priceUnder } = req.query;
	try {
		if (isActive) auctions = controller.filterAuctionsByActivity(auctions, escape(isActive));
		if (priceUnder) auctions = controller.filterAuctionsByPrice(auctions, escape(priceUnder));
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
	res.status(200).json(auctions);
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

router.delete("/:id", [isLoggedIn, isAdmin], async (req, res) => {
	try {
		const auction = controller.deleteAuction(req.params.id);
		res.status(200).json(auction);
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

export default router;
