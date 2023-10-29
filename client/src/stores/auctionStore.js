import { derived, writable } from "svelte/store";

export const minPrice = writable("");
export const maxPrice = writable("");
export const selectedGroup = writable("all");
export const selectedRegion = writable("all");
export const minAge = writable("");
export const maxAge = writable("");
export const maleChecked = writable(false);
export const femaleChecked = writable(false);
export const searchedName = writable("");

export const auctions = writable([]);

const fetchAuctions = async () => {
	const token = localStorage.getItem("token");
	try {
		const response = await fetch("http://localhost:3000/api/auctions?isActive=true", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
fetchAuctions().then((data) => auctions.set(data));

const filterAuctions = (auctions, filters) => {
	const [
		minPrice,
		maxPrice,
		selectedGroup,
		selectedRegion,
		minAge,
		maxAge,
		maleChecked,
		femaleChecked,
		searchedName,
	] = filters;

	return auctions.filter((auction) => {
		const minBid = auction.bids[0] ? auction.bids[auction.bids.length - 1].bid : auction.startBid;
		const { group, region, age, gender, name } = auction.animal;

		if (minPrice && minBid < minPrice) return false;
		if (maxPrice && minBid > maxPrice) return false;
		if (selectedGroup !== "all" && group !== selectedGroup) return false;
		if (selectedRegion !== "all" && region !== selectedRegion) return false;
		if (minAge && age < minAge) return false;
		if (maxAge && age > maxAge) return false;
		if (maleChecked && gender !== "M") return false;
		if (femaleChecked && gender !== "V") return false;
		if (searchedName && !name.toLowerCase().includes(searchedName.toLowerCase())) return false;
		return true;
	});
};

export const filteredAuctions = derived(
	[
		auctions,
		minPrice,
		maxPrice,
		selectedGroup,
		selectedRegion,
		minAge,
		maxAge,
		maleChecked,
		femaleChecked,
		searchedName,
	],
	([auctionsData, ...filters]) => filterAuctions(auctionsData, filters)
);