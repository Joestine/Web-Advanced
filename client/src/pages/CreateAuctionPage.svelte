<script>
	import router from "page";
	import { onMount } from "svelte";
	import { getAllOwnedAnimals } from "../api/animalApi";
	import { createAuction } from "../api/auctionApi";
	import Header from "../components/Header.svelte";
	import { animals } from "../stores/animalStore";
	import { user } from "../stores/authorizationStore";

	let startingBid = "";
	let startTime = "";
	let endTime = "";
	let selectedAnimal = "";

	onMount(async () => {
		console.log($user.id);
		animals.set(await getAllOwnedAnimals($user.id));
	});

	const submitCreate = async (event) => {
		event.preventDefault();

		await createAuction({
			startBid: startingBid,
			startTime: new Date(startTime).getTime(),
			endTime: new Date(endTime).getTime(),
			animal: $animals.find((animal) => animal.name === selectedAnimal),
			seller: $user,
		});
		router.redirect("/");
	};
</script>

<Header />
<form on:submit={submitCreate} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
	<div class="mb-4">
		<select bind:value={selectedAnimal} required>
			{#each $animals as animal}
				<option>{animal.name}</option>
			{/each}
		</select>
	</div>
	<div class="mb-4">
		<input type="number" bind:value={startingBid} placeholder="Starting Bid" required />
	</div>
	<div class="mb-4">
		<input type="datetime-local" bind:value={startTime} required />
	</div>
	<div class="mb-4">
		<input type="datetime-local" bind:value={endTime} required />
	</div>
	<div class="flex items-center justify-between">
		<button
			type="submit"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		>
			Create Auction
		</button>
	</div>
</form>
