<script>
	import router from "page";
	export let auction;

	function goToAuction() {
		router.redirect(`/auctions/${auction.id}`);
	}
</script>

<a href="./" on:click|preventDefault={goToAuction}>
	<div class="flex flex-col text-center items-center border-2px">
		<img src="https://picsum.photos/200" alt={auction.animal.name} class="rounded-2xl border-2" />
		<h3 class="text-3xl font-bold underline mb-2">{auction.animal.name}</h3>
		<p class="text-lg">Soort: {auction.animal.species}</p>
		<p class="text-lg">Door: {auction.seller.name}</p>
		<p class="text-lg">€{auction.bids[0] ? auction.bids[auction.bids.length - 1].bid : auction.startBid}</p>
	</div>
</a>
