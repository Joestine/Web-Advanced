<script>
	import Button from "../components/Button.svelte";
	import Header from "../components/Header.svelte";

	let email;
	let password;
	let errorMessage;

	const login = async () => {
		const response = await fetch("http://localhost:3000/api/auth", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});

		const data = await response.json();
		if (response.ok) {
			localStorage.setItem("token", data.token);
			window.location.href = "/";
		} else {
			errorMessage = "Incorrect email or password!";
		}
	}

	const toRegister = () => {
		window.location.href = "/register";
	}
</script>

<Header />
<div class="flex flex-col justify-center items-center">
	<form class="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mt-32">
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="username">
				Email
			</label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="Email"
				type="text"
				placeholder="Email"
				bind:value={email}
			/>
		</div>
		<div class="mb-6">
			<label class="block text-gray-700 font-bold mb-2" for="password">
				Password
			</label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="password"
				type="password"
				placeholder="**********"
				bind:value={password}
			/>
		</div>
		<div class="flex items-center justify-between">
			<Button text="Log In" handleClick={login}></Button>
			<Button text="Registreer" handleClick={toRegister}></Button>
		</div>
	</form>
	{#if errorMessage}
		<p class="text-red-500 text-xl italic mt-5">{errorMessage}</p>
	{/if}
</div>
