<script>
    import Auction from "../components/Auction.svelte";
    import Header from "../components/Header.svelte";
    import {
    	femaleChecked,
    	filteredAuctions,
    	maleChecked,
    	maxAge,
    	maxPrice,
    	minAge,
    	minPrice,
    	searchedName,
    	selectedGroup,
    	selectedRegion
    } from '../stores/auctionStore';

    const fetchGroupsAndRegions = async () => {
        try {
            const groupsResponse = await fetch('http://localhost:3000/api/animals/groups');
            const groupsData = await groupsResponse.json();
            const regionsResponse = await fetch('http://localhost:3000/api/animals/regions');
            const regionsData = await regionsResponse.json();
            return { groups: groupsData, regions: regionsData };
        } catch (error) {
            console.log(error);
        }
    };

    let { groups, regions } = { groups: [], regions: [] };
    fetchGroupsAndRegions().then(data => {
        groups = data.groups;
        regions = data.regions;
    });

</script>

<Header />

<section class="flex mt-24">
    <div class="flex flex-col gap-8 items-center bg-gray-300 w-1/3 ml-8 p-6 pb-10 rounded-2xl">
        <h3 class="text-3xl font-bold">Filters</h3>

        <!-- Price Range -->
        <div class="flex flex-col items-center w-2/3">
            <h4 class="text-xl font-bold">Prijs</h4>
            <div class="flex justify-center gap-3 mt-2 w-full">
                <input class="w-1/2" type="text" placeholder="Min" bind:value={$minPrice} />
                <input class="w-1/2" type="text" placeholder="Max" bind:value={$maxPrice} />
            </div>
        </div>

        <!-- Group Selection -->
        <div class="flex flex-col items-center w-2/3">
            <h4 class="text-xl font-bold">Groep</h4>
            <select class="mt-2 w-full" bind:value={$selectedGroup}>
                <option value="all">Alle groepen</option>
                {#each groups as group}
                    <option value={group}>{group}</option>
                {/each}
            </select>
        </div>

        <!-- Region Selection -->
        <div class="flex flex-col items-center w-2/3">
            <h4 class="text-xl font-bold">Regio</h4>
            <select class="mt-2 w-full" bind:value={$selectedRegion}>
                <option value="all">Alle regio's</option>
                {#each regions as region}
                    <option value={region}>{region}</option>
                {/each}
            </select>
        </div>

        <!-- Age Range -->
        <div class="flex flex-col items-center w-2/3">
            <h4 class="text-xl font-bold">Leeftijd</h4>
            <div class="flex justify-center gap-2 mt-2 w-full">
                <input class="w-1/2" type="text" placeholder="Min" bind:value={$minAge} />
                <input class="w-1/2" type="text" placeholder="Max" bind:value={$maxAge} />
            </div>
        </div>

        <!-- Gender Selection -->
        <div class="flex flex-col items-center w-full mb-16">
            <h4 class="text-xl font-bold">Geslacht</h4>
            <div class="flex justify-center w-full mt-2">
                <label for="male" class="mr-1">Man</label>
                <input type="checkbox" id="male" class="mr-10" bind:checked={$maleChecked} />
                <label for="female" class="mr-1">Vrouw</label>
                <input type="checkbox" id="female" bind:checked={$femaleChecked} />
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-8 items-center w-2/3">
        <input type="text" placeholder="Zoeken..." class="rounded-2xl border-2 h-12 p-2 w-2/3" bind:value={$searchedName} />
        {#if $filteredAuctions.length > 0}
            <div class="grid grid-cols-4 gap-6 w-2/3 h-2/3 overflow-y-scroll">
                {#each $filteredAuctions as auction}
                    <Auction auction={auction} />
                {/each}
            </div>
        {:else}
            <p>Please log in to see the active auctions!</p>
        {/if}
    </div>
</section>