<script lang="ts">
	import Balance from "../../lib/profile/Balance.svelte";
	import Income from "../../lib/profile/Income.svelte";
	import Expense from "../../lib/profile/Expense.svelte";

	let name = 'DefaultName';
	let surname = 'DefaultSurname';
	let email = 'Default@mail.ru';
	let username = 'DefaultUsername';
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>

<div>
	<div class="profile-page">
		<div class="information">
			<p>Hi {name} {surname}</p>
			<p>Username: {username}</p>
			<p>email: {email}</p>
			<p>What did you spend this time</p>
			<button class="edit-profile"><i class="fa-solid fa-gears"></i></button>
		</div>
	</div>
	<div class="cards">
			<Balance class="card"/>
			<Income class="card"/>
			<Expense class="card"/>
	</div>
	<div>
		<div class="add-transaction">

		</div>
		<div class="history-transactions">

		</div>
	</div>
</div>

<style>
	button {
		all: unset;
	}

	.profile-page {
		display: flex;
		justify-content: space-between;
		margin: 50px;
	}

	.information {
		border: 2px black;
		border-style: solid;
		border-radius: 10px;
		flex: 2;
		display: flex;
		flex-direction: column;
		padding: 15px;
	}

	.cards {
		display: flex;
		justify-content: space-evenly;
	}


	.edit-profile {
		position: absolute;
		float: right;
	}

</style>
