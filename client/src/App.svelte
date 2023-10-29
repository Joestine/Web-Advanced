<script>
    import router from "page";
    import Auction from "./pages/Auction.svelte";
    import Home from "./pages/Home.svelte";
    import Login from "./pages/Login.svelte";
    import Register from "./pages/Register.svelte";
    let page;
    let route;
    let params;

    router("/", () => {
        page = Home;
    });

    router("/login", () => {
        page = Login;
    });

    router("/register", () => {
        page = Register;
    });

    router("/auction/:id", (ctx) => {
        page = Auction;
        route = ctx.pathname;
        params = ctx.params;
    });


    router.start();
</script>

<main>
    <svelte:component this={page} {...params} />
</main>
