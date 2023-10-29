<!-- Filters.svelte -->
<script>
    export let minPrice;
    export let maxPrice;
    export let selectedGroup;
    export let groups;
    export let selectedRegion;
    export let regions;
    export let minAge;
    export let maxAge;
    export let maleChecked;
    export let femaleChecked;
</script>

<div class="flex flex-col gap-8 items-center bg-gray-300 w-1/3 ml-8 p-6 pb-10 rounded-2xl">
    <h3 class="text-3xl font-bold mb-4">Filters</h3>

    <div class="flex flex-col items-center w-2/3">
        <h4 class="text-xl font-bold mb-2">Prijs</h4>
        <div class="flex justify-center gap-3 mt-2 w-full">
            <input class="w-1/2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Min" bind:value={$minPrice} />
            <input class="w-1/2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Max" bind:value={$maxPrice} />
        </div>
    </div>

    <div class="flex flex-col items-center w-2/3">
        <h4 class="text-xl font-bold mb-2">Groep</h4>
        <select class="mt-2 w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" bind:value={$selectedGroup}>
            <option value="all">Alle groepen</option>
            {#each groups as group}
                <option value={group}>{group}</option>
            {/each}
        </select>
    </div>

    <div class="flex flex-col items-center w-2/3">
        <h4 class="text-xl font-bold mb-2">Regio</h4>
        <select class="mt-2 w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" bind:value={$selectedRegion}>
            <option value="all">Alle regio's</option>
            {#each regions as region}
                <option value={region}>{region}</option>
            {/each}
        </select>
    </div>

    <div class="flex flex-col items-center w-2/3">
        <h4 class="text-xl font-bold mb-2">Leeftijd</h4>
        <div class="flex justify-center gap-3 mt-2 w-full">
            <input class="w-1/2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Min" bind:value={$minAge} />
            <input class="w-1/2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Max" bind:value={$maxAge} />
        </div>
    </div>

    <div class="flex flex-col items-center w-full">
        <h4 class="text-xl font-bold mb-2">Geslacht</h4>
        <div class="flex justify-center w-full mt-2">
            <label for="male" class="mr-2">Man</label>
            <input type="checkbox" id="male" class="mr-4" bind:checked={$maleChecked} />
            <label for="female" class="mr-2">Vrouw</label>
            <input type="checkbox" id="female" bind:checked={$femaleChecked} />
        </div>
    </div>
</div>