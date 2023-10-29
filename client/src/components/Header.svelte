<script>
    import Button from "./Button.svelte";

    const toLoginPage = () => {
        window.location.href = "/login";
    }

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    }


    const token = localStorage.getItem("token");
</script>

<header class="bg-emerald-300 flex items-center shadow h-32">
    <a href="/">
        <div class="flex-col p-3">
            <h1 class="text-5xl font-bold">BeestKopen.nl</h1>
            <h2 class="text-xl mt-1.5">Koop hier je nieuwe vriend!</h2>
        </div>
    </a>
    <div class="ml-auto mr-10">
        {#if token}
            <Button text="Log Out" handleClick={logout}></Button>
        {:else}
            <Button text="Log In" handleClick={toLoginPage}></Button>
        {/if}
    </div>
</header>