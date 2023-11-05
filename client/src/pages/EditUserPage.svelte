<script>
	import router from "page";
	import { onMount } from "svelte";
	import { getUserById, updateUser } from "../api/userApi";
	import Button from "../components/Button.svelte";
	import Header from "../components/Header.svelte";

	export let id;

	let user = {
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
		user = await getUserById(id);
		user.password = "";
	});

	const submitForm = async (event) => {
		const response = await updateUser(id, user);
		if (response.error) {
			alert(response.error);
		} else {
			router.redirect("/admin");
		}
	};
</script>

<Header />

<form on:submit={submitForm} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="firstname"> First Name </label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="firstname"
			type="text"
			bind:value={user.firstname}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="prefix"> Prefix </label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="prefix"
			type="text"
			bind:value={user.prefix}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="lastname"> Last Name </label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="lastname"
			type="text"
			bind:value={user.lastname}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="address"> Address </label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="address"
			type="text"
			bind:value={user.address}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="housenumber"> House Number </label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="housenumber"
			type="text"
			bind:value={user.housenumber}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="city"> City </label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="city"
			type="text"
			bind:value={user.city}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="city"> Province </label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="city"
			type="text"
			bind:value={user.province}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="postal"> Postal Code </label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="postal"
			type="text"
			bind:value={user.postal}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email Address </label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="email"
			type="email"
			bind:value={user.email}
		/>
	</div>
	<div class="mb-6">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
		<input
			class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
			id="password"
			type="password"
			bind:value={user.password}
		/>
		<p class="text-red-500 text-xs italic">Please choose a password.</p>
	</div>
	<div class="mb-6">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="role"> Role </label>
		<select
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
			bind:value={user.role}
		>
			<option value="admin">Admin</option>
			<option value="user">User</option>
		</select>
	</div>

	<div class="flex items-center justify-between">
		<Button text="Bewerken" handleClick={submitForm} />
	</div>
</form>
