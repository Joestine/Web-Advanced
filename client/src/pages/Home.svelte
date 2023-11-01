<script>
	import Auction from "../components/Auction.svelte";
	import Button from "../components/Button.svelte";
	import Filters from "../components/Filters.svelte";
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
		selectedRegion,
	} from '../stores/auctionStore';

    $: token = localStorage.getItem('token');

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
    <Filters 
        minPrice={minPrice}
        maxPrice={maxPrice}
        selectedGroup={selectedGroup}
        groups={groups}
        selectedRegion={selectedRegion}
        regions={regions}
        minAge={minAge}
        maxAge={maxAge}
        maleChecked={maleChecked}
        femaleChecked={femaleChecked}
    />

    <div class="flex flex-col gap-8 items-center w-2/3">
        <input type="text" placeholder="Zoeken..." class="rounded-2xl border-2 h-12 p-2 w-2/3" bind:value={$searchedName} />
        {#if token}
            <div class="grid grid-cols-4 gap-6 w-2/3 h-2/3 overflow-y-scroll">
                {#each $filteredAuctions as auction}
                    <Auction auction={auction} />
                {/each}
            </div>
        {:else}
            <p>Please log in to see the active auctions!</p>
        {/if}
        {#if token}
            <div class="flex gap-4">
                <Button text="Gewonnen Veilingen" handleClick=""></Button>
                <Button text="Dier Toevoegen" handleClick=""></Button>
                <Button text="Maak Veiling" handleClick=""></Button>
            </div>
        {/if}
    </div>
</section>