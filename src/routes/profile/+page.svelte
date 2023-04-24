<script lang="ts">
	import Balance from "../../lib/profile/Balance.svelte";
	import Income from "../../lib/profile/Income.svelte";
	import Expense from "../../lib/profile/Expense.svelte";
	import Chart from '$lib/charts/pie.svelte'; 
	import Line from '$lib/charts/line.svelte';     
	import _ from '../../lib/APIHandler/fetchApi';

	let name = 'DefaultName';
	let surname = 'DefaultSurname';
	let email = 'Default@mail.ru';
	let username = 'DefaultUsername';

	let data: any = _.getUser();

	console.log(data)

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
			<Balance />
			<Income />
			<Expense />
  </div>
  <div class="charts">
    <Chart numbers={[300, 50, 100, 40, 120]} names={['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey']} />
    <Line names={['January', 'February', 'March', 'April', 'May', 'June', 'July']} numbers={[12, 19, 3, 5, 2, 3, 8]} />
	</div>
</div>

<style>
  button {
    width: 40%
  }

  .profile-page{
    display: flex;
    justify-content: space-between;
    margin: 50px;
  }

  .information {
    height: 300px;
		border: 2px solid black;
		border-radius: 10px;
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  .charts {
    flex: 4
  } 
  
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
