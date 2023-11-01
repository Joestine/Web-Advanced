<!-- Auction.svelte -->
<script>
    import { onMount } from 'svelte';
    import Button from '../components/Button.svelte';
    import Header from '../components/Header.svelte';
    import Timer from '../components/Timer.svelte';

    export let id;

    let auctionInfo;
    let timeLeft;
    let bid;

    async function fetchAuctionInfo() {
        const response = await fetch(`http://localhost:3000/api/auctions/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        auctionInfo = await response.json();
        timeLeft = +new Date(auctionInfo.endTime) - Date.now();
    }

    onMount(() => {
        fetchAuctionInfo();
    });

    async function placeBid() {
        const highestBid = auctionInfo.bids.slice(-1)[0]?.bid || auctionInfo.startBid;
        if (bid <= highestBid) {
            alert('Je bod moet hoger zijn dan het huidige bod!');
            return;
        } else if (bid <= auctionInfo.startBid) {
            alert('Je bod moet hoger zijn dan de startprijs!');
            return;
        }

        const response = await fetch(`http://localhost:3000/api/auctions/${id}/bids`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ bid }),
        });

        const data = await response.json();
        if (data.error) {
            alert(data.error);
        } else {
            fetchAuctionInfo();
        }
    }
</script>

<Header />

{#if auctionInfo}
    <div class="mt-16 px-32 flex justify-between w-screen">
        <div>
            <h1 class="text-6xl font-bold underline mb-8">{auctionInfo.animal.name}</h1>
            <img class="rounded-2xl border-2" src="https://picsum.photos/600" alt="">
        </div>

        <ul class="text-3xl mt-20 space-y-4">
                <li><span class="font-bold">Soort:</span> {auctionInfo.animal.species}</li>
                <li><span class="font-bold">Groep:</span> {auctionInfo.animal.group}</li>
                <li><span class="font-bold">Leeftijd:</span> {auctionInfo.animal.age}</li>
                <li><span class="font-bold">Regio:</span> {auctionInfo.animal.region}</li>
                <li><span class="font-bold">Geslacht:</span> {auctionInfo.animal.gender}</li>
                <li><span class="font-bold">Omschrijving:</span> {auctionInfo.animal.description}</li>
                <li><span class="font-bold">Door:</span> {auctionInfo.seller.name}</li>
                <li><span class="font-bold">Startprijs:</span> €{auctionInfo.startBid}</li>
            <li><Timer timeLeft={timeLeft} /></li>
        </ul>

        <div class="w-1/3 mt-16 text-right">
            <h1 class="text-4xl font-bold">Hoogste Biedingen</h1>
            {#if auctionInfo.bids.length > 0}
                <ul class="my-8 space-y-6">
                    {#each auctionInfo.bids.slice(-5).reverse() as bid}
                        <li class="text-2xl"><span class="font-bold">€{bid.bid}</span> door {bid.user.name}</li>
                    {/each}
                </ul>
            {:else}
                <p class="text-2xl text-green-600 my-8">Er zijn nog geen biedingen geplaatst, wees de eerste!</p>
            {/if}
            <input type="number" class="border border-gray-400 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" bind:value={bid}>
            <Button text="Bieden" handleClick={placeBid}></Button>

            {#if auctionInfo.bids.length > 5}
                <p class="text-2xl text-green-600 mt-8">Er zijn nog {auctionInfo.bids.length - 5} biedingen geplaatst</p>
            {/if}

            {#if auctionInfo.bids.length > 0}
                <p class="text-2xl underline text-green-600 mt-8">Hoogste bod: €{auctionInfo.bids[0].bid}</p>
            {/if}
        </div>
    </div>
{/if}