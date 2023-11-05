<script>
	import router from "page";
	import { onMount } from "svelte";
	import { getAllActiveAuctions } from "../api/auctionApi.js";
	import Auction from "../components/Auction.svelte";
	import Button from "../components/Button.svelte";
	import Filter from "../components/Filter.svelte";
	import Header from "../components/Header.svelte";
	import { auctions } from "../stores/auctionStore.js";
	import { user } from "../stores/authorizationStore.js";
	import { filter } from "../stores/filterStore.js";
	import { searchTerm } from "../stores/searchStore.js";

	let loading = true;
	let filteredAuctions = [];

	const toWonAuctionsPage = () => {
		router.redirect("/won");
	};

	const toCreateAnimalPage = () => {
		router.redirect("/addAnimal");
	};

	const toCreateAuctionPage = () => {
		router.redirect("/createAuction");
	};

	onMount(async () => {
		try {
			auctions.set(await getAllActiveAuctions());
			loading = false;
		} catch (error) {
			console.log(error);
		}
	});

	$: {
		if ($auctions && $filter) {
			filteredAuctions = $auctions.filter((auction) => {
				const minBid = auction.bids[0] ? auction.bids[auction.bids.length - 1].bid : auction.startBid;
				const { group, region, age, gender } = auction.animal;

				if ($filter.minPrice && minBid < $filter.minPrice) return false;
				if ($filter.maxPrice && minBid > $filter.maxPrice) return false;
				if ($filter.group !== "all" && group !== $filter.group) return false;
				if ($filter.region !== "all" && region !== $filter.region) return false;
				if ($filter.minAge && age < $filter.minAge) return false;
				if ($filter.maxAge && age > $filter.maxAge) return false;
				if ($filter.gender === "male" && gender !== "M") return false;
				if ($filter.gender === "female" && gender !== "V") return false;

				return true;
			});
		}
		if ($searchTerm) {
			filteredAuctions = filteredAuctions.filter((auction) => {
				const { name } = auction.animal;
				return name.toLowerCase().includes($searchTerm.toLowerCase());
			});
		}
	}
</script>

<Header />

<main>
	<section class="flex mt-24">
		<Filter />

		<div class="flex flex-col gap-8 items-center w-2/3">
			<input
				type="text"
				placeholder="Zoeken..."
				class="rounded-2xl border-2 h-12 p-2 w-2/3"
				bind:value={$searchTerm}
			/>
			{#if $user.id !== null}
				<div class="grid grid-cols-4 gap-6 w-2/3 h-3/5 overflow-y-scroll">
					{#each filteredAuctions as auction}
						<Auction {auction} />
					{/each}
				</div>
			{:else}
				<p>Please log in to see the active auctions!</p>
			{/if}
			{#if $user.id !== null}
				<div class="flex gap-4">
					<Button text="Gewonnen Veilingen" handleClick={toWonAuctionsPage} />
					<Button text="Dier Toevoegen" handleClick={toCreateAnimalPage} />
					<Button text="Maak Veiling" handleClick={toCreateAuctionPage} />
				</div>
			{/if}
		</div>
	</section>
</main>
