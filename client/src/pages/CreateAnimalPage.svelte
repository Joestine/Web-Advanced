<script>
	import router from "page";
	import { onMount } from "svelte";
	import { getAllGroups, getAllRegions } from "../api/animalApi";
	import Button from "../components/Button.svelte";
	import Header from "../components/Header.svelte";
	import { user } from "../stores/authorizationStore";

	let name = "";
	let species = "";
	let group = "";
	let age = "";
	let region = "";
	let gender = "";
	let description = "";
	let image = "";

	let regions = [];
	let groups = [];

	onMount(async () => {
		regions = await getAllRegions();
		groups = await getAllGroups();
	});

	async function createAnimal(event) {
		event.preventDefault();

		const animal = { name, species, group, age, region, gender, description, ownerId: $user.id };

		const response = await fetch("http://localhost:3000/api/animals", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify(animal),
		});

		if (!response.ok) {
			console.error("Error:", response.statusText);
		} else {
			console.log("Animal created successfully");
			router.redirect("/");
		}
	}
</script>
{#if $user.id === null}
	<h1 class="text-2xl font-bold mb-4">Je mag deze pagina niet bekijken</h1>
	<Button text="Go back" handleClick={() => router.redirect("/")} />
{:else}
	<Header />
	<form on:submit={createAnimal} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-2 gap-4">
		<div class="mb-4">
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				bind:value={name}
				placeholder="Naam"
				required
			/>
		</div>
		<div class="mb-4">
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				bind:value={species}
				placeholder="Soort"
				required
			/>
		</div>
		<div class="mb-4">
			<select
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				bind:value={group}
				required
			>
				{#each groups as group}
					<option>{group}</option>
				{/each}
			</select>
		</div>
		<div class="mb-4">
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="number"
				bind:value={age}
				placeholder="Leeftijd"
				required
			/>
		</div>
		<div class="mb-4">
			<select
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				bind:value={region}
				required
			>
				{#each regions as region}
					<option>{region}</option>
				{/each}
			</select>
		</div>
		<div class="mb-4">
			<select
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				bind:value={gender}
				required
			>
				<option>M</option>
				<option>V</option>
			</select>
		</div>
		<div class="mb-4">
			<textarea
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				bind:value={description}
				placeholder="Beschrijving"
				required
			/>
		</div>
		<div class="mb-4">
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="url"
				bind:value={image}
				placeholder="Image URL"
				required
			/>
		</div>
		<div class="flex items-center justify-between">
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Create Animal
			</button>
		</div>
	</form>
{/if}