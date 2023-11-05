<script>
	import router from "page";
	import { logout } from "../api/authApi.js";
	import { user } from "../stores/authorizationStore.js";
	import Button from "./Button.svelte";

	const toLoginPage = () => {
		router.redirect("/login");
	};

	const toAdminPage = () => {
		router.redirect("/admin");
	};
</script>

<header class="bg-emerald-300 flex items-center shadow h-32">
	<a href="/">
		<div class="flex-col p-3">
			<h1 class="text-5xl font-bold">BeestKopen.nl</h1>
			<h2 class="text-xl mt-1.5">Koop hier je nieuwe vriend!</h2>
		</div>
	</a>
	<div class="ml-auto mr-10">
		{#if $user.role === "admin"}
			<Button text="Admin" handleClick={toAdminPage} />
		{/if}
		{#if $user.id !== null}
			<Button text="Log Out" handleClick={logout} />
		{:else}
			<Button text="Log In" handleClick={toLoginPage} />
		{/if}
	</div>
</header>
