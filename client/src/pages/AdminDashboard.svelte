<script>
	import router from "page";
	import { onMount } from "svelte";
	import { deleteAuction, getAllAuctions } from "../api/auctionApi";
	import { deleteUser, getAllUsers } from "../api/userApi";
	import Button from "../components/Button.svelte";
	import Header from "../components/Header.svelte";
	import { auctions } from "../stores/auctionStore";
	import { user } from "../stores/authorizationStore";
	import { users } from "../stores/userStore";

	onMount(async () => {
		users.set(await getAllUsers());
		auctions.set(await getAllAuctions());
	});

	const submitDeleteUser = async (id) => {
		await deleteUser(id);
		users.set(await getAllUsers());
	};

	const submitDeleteAuction = async (id) => {
		await deleteAuction(id);
		auctions.set(await getAllAuctions());
	};

	const toEditUser = (id) => {
		router.redirect(`/admin/editUser/${id}`);
	};

	const toEditAuction = (id) => {
		router.redirect(`/admin/editAuction/${id}`);
	};
</script>

<Header />

<div class="container mt-6 mx-auto px-4">
	<h2 class="text-2xl font-bold mb-4">Users</h2>
	<div class="overflow-x-auto">
		<table class="min-w-full divide-y divide-gray-200">
			<thead class="bg-gray-50">
				<tr>
					<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
					<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th
					>
					<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>Actions</th
					>
				</tr>
			</thead>
			<tbody class="bg-white divide-y divide-gray-200">
				{#each $users as otherUser (otherUser.id)}
					<tr>
						<td class="px-6 py-4 whitespace-nowrap">{otherUser.firstname} {otherUser.lastname}</td>
						<td class="px-6 py-4 whitespace-nowrap">{otherUser.email}</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<Button text="Edit" handleClick={() => toEditUser(otherUser.id)} />
							{#if otherUser.id !== $user.id}
								<Button text="Delete" handleClick={() => submitDeleteUser(otherUser.id)} />
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<h2 class="text-2xl font-bold mb-4 mt-8">Auctions</h2>
	<div class="overflow-x-auto">
		<table class="min-w-full divide-y divide-gray-200">
			<thead class="bg-gray-50">
				<tr>
					<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
					<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>Animal</th
					>
					<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>Starting Bid</th
					>
					<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>Actions</th
					>
				</tr>
			</thead>
			<tbody class="bg-white divide-y divide-gray-200">
				{#each $auctions as auction (auction.id)}
					<tr>
						<td class="px-6 py-4 whitespace-nowrap">{auction.id}</td>
						<td class="px-6 py-4 whitespace-nowrap">{auction.animal.name}</td>
						<td class="px-6 py-4 whitespace-nowrap">{auction.startBid}</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<Button text="Edit" handleClick={() => toEditAuction(auction.id)} />
							<Button text="Delete" handleClick={() => submitDeleteAuction(auction.id)} />
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
