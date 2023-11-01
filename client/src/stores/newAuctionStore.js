import { derived, writable } from "svelte/store";
import { femaleChecked, maleChecked } from "./auctionStore";

const auctions = await fetch("http://localhost:3000/api/auctions", {
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
}).then((res) => res.json());

export const filters = writable({
    minPrice : "", maxPrice: "", selectedGroup : "all", selectedRegion: "all", minAge: "", maxAge: "", maleChecked: false, femaleChecked: false, searchedName: "", won: false
});

const filterAuctions = (auctions, filters) => {
    return auctions.filter((auction) => {
        const minBid = auction.bids[0] ? auction.bids[auction.bids.length - 1].bid : auction.startBid;
        const { group, region, age, gender, name } = auction.animal;

        if (filters.minPrice && minBid < filters.minPrice) return false;
        if (filters.maxPrice && minBid > filters.maxPrice) return false;
        if (filters.selectedGroup !== "all" && group !== filters.selectedGroup) return false;
        if (filters.selectedRegion !== "all" && region !== filters.selectedRegion) return false;
        if (filters.minAge && age < filters.minAge) return false;
        if (filters.maxAge && age > filters.maxAge) return false;
        if (maleChecked && gender !== "M") return false;
        if (femaleChecked && gender !== "V") return false;
        if (filters.searchedName && !name.toLowerCase().includes(filters.searchedName.toLowerCase())) return false;
        
