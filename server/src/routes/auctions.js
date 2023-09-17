import express from "express";
import * as controller from "../controllers/auctions.js";

const router = express.Router();

router.get("/", async (req, res) => {
    let auctions = controller.getAllAuctions();

    const { isActive, priceUnder } = req.query;

    if (isActive) auctions = controller.filterAuctionsByActivity(auctions, isActive);
    if (priceUnder) auctions = controller.filterAuctionsByPrice(auctions, priceUnder);

    res.json(auctions);
});

router.get("/:id", async (req, res) => {
    res.json(controller.getAuctionById(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(controller.createAuction(req.body));
});

router.delete("/:id", async (req, res) => {
    res.json(controller.deleteAuction(req.params.id));
});

export default router;