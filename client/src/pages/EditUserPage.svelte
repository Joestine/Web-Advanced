<script>
	import router from "page";
	import { onMount } from "svelte";
	import { getUserById, updateUser } from "../api/userApi";
	import Button from "../components/Button.svelte";
	import Header from "../components/Header.svelte";
	import { user } from "../stores/authorizationStore";


	export let id;

	let newUser = {
		firstname: "",
		prefix: "",
		lastname: "",
		address: "",
		housenumber: "",
		city: "",
		province: "",
		postal: "",
		email: "",
		password: "",
		role: "",
	};

	onMount(async () => {
		newUser = await getUserById(id);
		newUser.password = "";
	});

	const submitForm = async (event) => {
		const response = await updateUser(id, newUser);
		if (response.error) {
			alert(response.error);
		} else {
			router.redirect("/admin");
		}
	};
</script>
{#if $user.role !== "admin"}
		<h1 class="text-2xl font-bold mb-4">Je mag deze pagina niet bekijken</h1>
		<Button text="Go back" handleClick={() => router.redirect("/")} />
{:else}
	<Header />

	<form on:submit={submitForm} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="firstname"> First Name </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="firstname"
				type="text"
				bind:value={newUser.firstname}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="prefix"> Prefix </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="prefix"
				type="text"
				bind:value={newUser.prefix}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="lastname"> Last Name </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="lastname"
				type="text"
				bind:value={newUser.lastname}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="address"> Address </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="address"
				type="text"
				bind:value={newUser.address}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="housenumber"> House Number </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="housenumber"
				type="text"
				bind:value={newUser.housenumber}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="city"> City </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="city"
				type="text"
				bind:value={newUser.city}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="city"> Province </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="city"
				type="text"
				bind:value={newUser.province}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="postal"> Postal Code </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="postal"
				type="text"
				bind:value={newUser.postal}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email Address </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="email"
				type="email"
				bind:value={newUser.email}
			/>
		</div>
		<div class="mb-6">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
			<input
				class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="password"
				type="password"
				bind:value={newUser.password}
			/>
			<p class="text-red-500 text-xs italic">Please choose a password.</p>
		</div>
		<div class="mb-6">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="role"> Role </label>
			<select
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				bind:value={newUser.role}
			>
				<option value="admin">Admin</option>
				<option value="user">User</option>
			</select>
		</div>

		<div class="flex items-center justify-between">
			<Button text="Bewerken" handleClick={submitForm} />
		</div>
	</form>
{/if}