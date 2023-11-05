import { writable } from "svelte/store";

export const user = writable({
	id: null,
	email: null,
	firstName: null,
	role: null,
});
