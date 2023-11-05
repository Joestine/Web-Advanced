import { writable } from "svelte/store";

export const filter = writable({
	minPrice: 0,
	maxPrice: 0,
	group: "all",
	region: "all",
	minAge: 0,
	maxAge: 0,
	gender: "",
});
