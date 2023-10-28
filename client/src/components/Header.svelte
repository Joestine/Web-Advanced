<script>
    import Button from "./global/Button.svelte";

    const handleClick = () => {
        return console.log("clicked")
    }
</script>

<header class="bg-emerald-300 flex items-center shadow h-32">
    <div class="flex-col p-3">
        <h1 class="text-5xl font-bold">BeestKopen.nl</h1>
        <h2 class="text-xl mt-1.5">Koop hier je nieuwe vriend!</h2>
    </div>
    <div class="ml-auto mr-10">
        <Button text="Log In" handleClick={handleClick}></Button>
    </div>
</header>