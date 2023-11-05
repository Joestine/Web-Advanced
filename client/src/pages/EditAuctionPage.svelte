<script>
	import router from "page";
	import { onMount } from "svelte";
	import { getAuctionById, updateAuction } from "../api/auctionApi";
	import Button from "../components/Button.svelte";
	import Header from "../components/Header.svelte";

	export let id;

	let auction = {
		startBid: "",
		startTime: "",
		endTime: "",
		bids: [],
	};

	onMount(async () => {
		auction = await getAuctionById(id);
		auction.startTime = new Date(auction.startTime).toISOString().substring(0, 16);
		auction.endTime = new Date(auction.endTime).toISOString().substring(0, 16);
	});

	const submitForm = async () => {
		const response = await updateAuction(id, auction);
		if (response.error) {
			alert(response.error);
		} else {
			router.redirect("/admin");
		}
	};
</script>

<Header />

<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="startBid">Startbod</label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="startBid"
			type="text"
			bind:value={auction.startBid}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="startTime">Starttijd</label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="startTime"
			type="datetime-local"
			bind:value={auction.startTime}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="endTime">Eindtijd</label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="endTime"
			type="datetime-local"
			bind:value={auction.endTime}
		/>
	</div>
	<div class="flex items-center justify-between">
		<Button text="Opslaan" handleClick={submitForm} />
	</div>
</form>
