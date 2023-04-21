<script lang="ts">

	import { onMount } from 'svelte';

	let title: string = '';
	let amount: number = 0;
	let tag: string = '';
	let scoops: number = 1;

	function handleSubmit(event: Event) {

		const tagList = tag.split(',').map(tag => {
			return {"name": tag.trim()}
		});

		event.preventDefault();

		const data = {
			title: title,
			amount: amount,
			tag: tagList,
			datetime: new Date().toISOString(),
			transaction_type: scoops === 1 ? 'expense' : 'income',
			};

		console.log(data);

		// Clear form fields
		title = '';
		amount = 0;
		tag = '';
		scoops = 1;

		// fetch('/api/transactions/', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify(data),
		// })
		// .then((response) => {
		// 	if (!response.ok) {
		// 	throw new Error(response.statusText);
		// 	}
		// 	return response.json();
		// })
		// .then((data) => {
		// 	console.log('Transaction created successfully:', data);
		// 	// Clear form fields
		// 	title = '';
		// 	amount = 0;
		// 	tag = '';
		// 	scoops = 1;
		// })
		// .catch((error) => {
		// 	console.error('Error creating transaction:', error);
		// });
	}


	onMount(() => {
		// Set the default datetime value to the current date and time
		const now = new Date().toISOString().slice(0, 16);
		(document.querySelector('input[type="datetime-local"]') as HTMLInputElement).value = now;
	});
</script>

<div>
	<form on:submit={handleSubmit}>
		<label for="Title">Title:</label> <br />
		<input type="text" bind:value={title} placeholder="title of transaction" /> <br />
		<label for="amount">amount:</label> <br />
		<input type="number" bind:value={amount} placeholder="amount money" /> <br />
		<b>Type:</b> <br />

		<label>
			<input type="radio" bind:group={scoops} name="scoops" value={1} />
			expense
		</label> <br />

		<label>
			<input type="radio" bind:group={scoops} name="scoops" value={2} />
			income
		</label> <br />

		<label for="Tag">Tag:</label> <br />
		<input type="text" bind:value={tag} /> <br />
		<label for="DateTime">Date and time:</label> <br />
		<input type="datetime-local" /> <br />

		<input type="submit" />
	</form>
</div>

<style>
	div {
		width: 250px;
		border-radius: 5px;
		background-color: #f2f2f2;
		padding: 20px;
	}

	input[type='text'],
	input[type='number'],
	input[type='datetime-local'] {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
	}

	input[type='submit'] {
		width: 100%;
		background-color: #4caf50;
		color: white;
		padding: 14px 20px;
		margin: 8px 0;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	input[type='submit']:hover {
		background-color: #45a049;
	}
</style>
