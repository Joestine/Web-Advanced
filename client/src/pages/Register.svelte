<script>
	import router from "page";
	import { login } from "../api/authApi";
	import Button from "../components/Button.svelte";
	import Header from "../components/Header.svelte";
	import { user } from "../stores/authorizationStore";

	let firstname;
	let prefix;
	let lastname;
	let address;
	let housenumber;
	let city;
	let province;
	let postal;
	let email;
	let password;
	let errorMessage;

	const register = async () => {
		const response = await fetch("http://localhost:3000/api/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstname,
				prefix,
				lastname,
				address,
				housenumber,
				city,
				province,
				postal,
				email,
				password,
				role: "user",
			}),
		});

		const data = await response.json();

		if (data.error) {
			errorMessage = "Gegevens zijn niet correct ingevuld!";
		} else {
			login(email, password).then((result) => {
				if (result) {
					user.set(result);
					router.redirect("/");
				}
			});
		}
	};
</script>

<Header />

<div class="max-w-md mx-auto flex flex-col items-center mt-8">
	<h1 class="text-3xl font-bold mb-8">Registreren</h1>
	<form class="grid grid-cols-2 gap-4">
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="firstname"> Voornaam </label>
			<input
				class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="firstname"
				type="text"
				placeholder="Voornaam"
				bind:value={firstname}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="prefix"> Tussenvoegsel </label>
			<input
				class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="prefix"
				type="text"
				placeholder="Tussenvoegsel"
				bind:value={prefix}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="lastname"> Achternaam </label>
			<input
				class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="lastname"
				type="text"
				placeholder="Achternaam"
				bind:value={lastname}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="address"> Adres </label>
			<input
				class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="address"
				type="text"
				placeholder="Adres"
				bind:value={address}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="housenumber"> Huisnummer </label>
			<input
				class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="housenumber"
				type="text"
				placeholder="Huisnummer"
				bind:value={housenumber}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="city"> Stad </label>
			<input
				class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="city"
				type="text"
				placeholder="Stad"
				bind:value={city}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="province"> Provincie </label>
			<input
				class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="province"
				type="text"
				placeholder="Provincie"
				bind:value={province}
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="postal"> Postcode </label>
			<input
				class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="postal"
				type="text"
				placeholder="Postcode"
				bind:value={postal}
			/>
		</div>
		<div class="mb-4 col-span-2">
			<label class="block text-gray-700 font-bold mb-2" for="email"> E-mail </label>
			<input
				class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="email"
				type="email"
				placeholder="E-mail"
				bind:value={email}
			/>
		</div>
		<div class="mb-4 col-span-2">
			<label class="block text-gray-700 font-bold mb-2" for="password"> Wachtwoord </label>
			<input
				class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="password"
				type="password"
				placeholder="Wachtwoord"
				bind:value={password}
			/>
		</div>
		<div class="text-center col-span-2">
			<Button text="Registreren" handleClick={register} />
		</div>
	</form>
	{#if errorMessage}
		<p class="text-red-500 text-xl italic mt-5">{errorMessage}</p>
	{/if}
</div>
