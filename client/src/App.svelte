<script>
	import router from "page";
	import AdminDashboard from "./pages/AdminDashboard.svelte";
	import AuctionDetails from "./pages/AuctionDetails.svelte";
	import CreateAnimalPage from "./pages/CreateAnimalPage.svelte";
	import CreateAuctionPage from "./pages/CreateAuctionPage.svelte";
	import EditAuctionPage from "./pages/EditAuctionPage.svelte";
	import EditUserPage from "./pages/EditUserPage.svelte";
	import Home from "./pages/Home.svelte";
	import Login from "./pages/Login.svelte";
	import Register from "./pages/Register.svelte";
	import WonAuctions from "./pages/WonAuctions.svelte";

	let page;
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

	router("/won", () => {
		page = WonAuctions;
	});

	router("/auctions/:id", (ctx) => {
		page = AuctionDetails;
		params = ctx.params;
	});

	router("/addAnimal", () => {
		page = CreateAnimalPage;
	});

	router("/createAuction", () => {
		page = CreateAuctionPage;
	});

	router("/admin", () => {
		page = AdminDashboard;
	});

	router("/admin/editUser/:id", (ctx) => {
		page = EditUserPage;
		params = ctx.params;
	});

	router("/admin/editAuction/:id", (ctx) => {
		page = EditAuctionPage;
		params = ctx.params;
	});

	router.start();
</script>

<main>
	<svelte:component this={page} {...params} />
</main>
