import escape from "escape-html";
import express from "express";
import * as controller from "../controllers/auctions.js";
import isAdmin from "../middleware/isAdmin.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

const router = express.Router();

router.get("/", isLoggedIn, async (req, res) => {
	try {
		let auctions = controller.getAllAuctions();
		const { isActive } = req.query;
		if (isActive) auctions = controller.filterAuctionsByActivity(auctions, isActive === "true");
		res.status(200).json(auctions);
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

router.get("/:id", isLoggedIn, async (req, res) => {
	let auction;
	try {
		auction = controller.getAuctionById(req.params.id);
	} catch (error) {
		return res.status(404).json({ error: escape("Auction not found") });
	}
	if (!auction) {
		res.status(404).json({ error: escape("Auction not found") });
	} else {
		res.status(200).json(auction);
	}
});

router.get("/won/:userId", isLoggedIn, async (req, res) => {
	try {
		let auctions = controller.getAllAuctions();
		auctions = controller.filterWonAuctions(auctions, parseInt(req.params.userId));
		res.status(200).json(auctions);
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
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

router.put("/:id", [isLoggedIn, isAdmin], async (req, res) => {
	try {
		const auction = controller.updateAuction(req.params.id, req.body);
		res.status(200).json(auction);
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

router.delete("/:id/bids/", isLoggedIn, async (req, res) => {
	try {
		controller.deleteBidFromAuction(req.params.id, req.body.bid.bid, req.user);
		res.status(200).json({ message: "Bid deleted successfully" });
	} catch (error) {
		res.status(400).json({ error: escape(error.message) });
	}
});

export default router;
