<script>
	import router from "page";
	import { login } from "../api/authApi";
	import Button from "../components/Button.svelte";
	import Header from "../components/Header.svelte";
	import { user } from "../stores/authorizationStore.js";

	let email;
	let password;
	let errorMessage;

	const submitLogin = async () => {
		try {
			login(email, password).then((result) => {
				if (result) {
					user.set(result);
					router.redirect("/");
				}
			});
		} catch (error) {
			errorMessage = "Er was een probleem met inloggen: " + error.message;
			alert(errorMessage);
		}
	};

	const toRegisterPage = () => {
		router.redirect("/register");
	};
</script>

<Header />
<div class="flex flex-col justify-center items-center">
	<form class="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mt-32">
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="username"> Email </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="Email"
				type="text"
				placeholder="Email"
				bind:value={email}
			/>
		</div>
		<div class="mb-6">
			<label class="block text-gray-700 font-bold mb-2" for="password"> Password </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="password"
				type="password"
				placeholder="**********"
				bind:value={password}
			/>
		</div>
		<div class="flex items-center justify-between">
			<Button text="Log In" handleClick={submitLogin} />
			<Button text="Registreer" handleClick={toRegisterPage} />
		</div>
	</form>
	{#if errorMessage}
		<p class="text-red-500 text-xl italic mt-5">{errorMessage}</p>
	{/if}
</div>
