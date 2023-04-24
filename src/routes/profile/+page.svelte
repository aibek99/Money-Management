<script lang="ts">
	import Balance from "../../lib/profile/Balance.svelte";
	import Income from "../../lib/profile/Income.svelte";
	import Expense from "../../lib/profile/Expense.svelte";
	import Chart from '../../lib/charts/pie.svelte';
	import Line from '../../lib/charts/line.svelte';
	import _ from '../../lib/APIHandler/fetchApi';
	import { onMount } from 'svelte';
	import type {responseUser, userData} from '../../lib/APIHandler/types'; 

	let name = 'DefaultName';
	let surname = 'DefaultSurname';
	let email = 'Default@mail.ru';

	let data: userData | null;

	onMount(async () => {
		const response: responseUser = await _.getUser();

		if (response.success) {
			data = response.data;
			if (data){
				name = data.first_name;
				surname = data.last_name;
				email = data.email;
			}
			
		} else {
			console.log("Not Loaded")
		}
	});

</script>

<svelte:head>
    <title>Profile</title>
</svelte:head>

<div class="profile-wrapper">
    <div class="profile-page">
        <div class="information">
            <p>Hi {name} {surname}</p>
            <p>email: {email}</p>
        </div>
    </div>
    <div class="cards">
        <Balance/>
        <Income/>
        <Expense/>
    </div>
    <div class="charts">
        <Chart numbers={[300, 50, 100, 40, 120]} names={['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey']}/>
        <Line names={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
              numbers={[12, 19, 3, 5, 2, 3, 8]}/>
    </div>
</div>

<style>
    .profile-wrapper {
        font-family: Kanit, sans-serif;
    }


    .profile-page {
        display: flex;
        justify-content: space-between;
        margin: 50px;
    }

    .information {
        border: 1px solid white;
        border-radius: 10px;
        background: linear-gradient(to bottom right, #444444, black);
        flex: 2;
        display: flex;
        flex-direction: column;
        padding: 15px;
        font-size: 20px;
        line-height: 8px;
    }

    .charts {
        flex: 4
    }

    .cards {
        display: flex;
        justify-content: space-evenly;
    }

</style>
