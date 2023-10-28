<script>
    import router from "page";
    import Home from "./pages/Home.svelte";
    import Login from "./pages/Login.svelte";

    let page;

    router("/", () => {
        page = Home;
    });

    router("/login", () => {
        page = Login;
    });

    router.start();
</script>

<main>
    <svelte:component this={page} />
</main>
