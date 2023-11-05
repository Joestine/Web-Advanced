<script>
	import { onMount } from "svelte";
	import { getAllGroups, getAllRegions } from "../api/animalApi";
	import { filter } from "../stores/filterStore";

	let groups = [];
	let regions = [];

	let filterValue = {
		minPrice: 0,
		maxPrice: 0,
		group: "all",
		region: "all",
		minAge: 0,
		maxAge: 0,
		gender: "all",
	};

	const updateFilter = () => {
		filter.set(filterValue);
	};

	onMount(async () => {
		groups = await getAllGroups();
		regions = await getAllRegions();
	});
</script>

<div class="flex flex-col gap-8 items-center bg-gray-300 w-1/3 h-2/3 ml-8 p-6 pb-10 rounded-2xl">
	<h3 class="text-3xl font-bold mb-4">Filters</h3>

	<div class="flex flex-col items-center w-2/3">
		<h4 class="text-xl font-bold mb-2">Prijs</h4>
		<div class="flex justify-center gap-3 mt-2 w-full">
			<input
				class="w-1/2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="number"
				placeholder="0"
				bind:value={filterValue.minPrice}
				on:input={updateFilter}
			/>
			<input
				class="w-1/2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="number"
				placeholder="0"
				bind:value={filterValue.maxPrice}
				on:input={updateFilter}
			/>
		</div>
	</div>

	<div class="flex flex-col items-center w-2/3">
		<h4 class="text-xl font-bold mb-2">Groep</h4>
		<select
			class="mt-2 w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			bind:value={filterValue.group}
			on:change={updateFilter}
		>
			<option value="all">Alle groepen</option>
			{#each groups as group}
				<option value={group}>{group}</option>
			{/each}
		</select>
	</div>

	<div class="flex flex-col items-center w-2/3">
		<h4 class="text-xl font-bold mb-2">Regio</h4>
		<select
			class="mt-2 w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			bind:value={filterValue.region}
			on:change={updateFilter}
		>
			<option value="all">Alle regio's</option>
			{#each regions as region}
				<option value={region}>{region}</option>
			{/each}
		</select>
	</div>

	<div class="flex flex-col items-center w-2/3">
		<h4 class="text-xl font-bold mb-2">Leeftijd</h4>
		<div class="flex justify-center gap-3 mt-2 w-full">
			<input
				class="w-1/2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="number"
				placeholder="Min"
				bind:value={filterValue.minAge}
				on:input={updateFilter}
			/>
			<input
				class="w-1/2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="number"
				placeholder="Max"
				bind:value={filterValue.maxAge}
				on:input={updateFilter}
			/>
		</div>
	</div>

	<div class="flex flex-col items-center w-2/3">
		<label class="text-xl font-bold mb-2" for="gender">Geslacht</label>
		<select
			class="mt-2 w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="gender"
			bind:value={filterValue.gender}
			on:change={updateFilter}
		>
			<option value="all">Alle</option>
			<option value="male">Man</option>
			<option value="female">Vrouw</option>
		</select>
	</div>
</div>
