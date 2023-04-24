<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
	import { Tags } from "./types";
	import _ from "./APIHandler/fetchApi";


	let title: string = '';
	let amount: number = 0;
	let tags: string[] = [];
	let type: string = "income";
	let description: string = ""
	let datetime: string = '';

	function handleDatetimeChange(event: Event) {
		datetime = (event.target as HTMLInputElement).value;
	}

	onMount(() => {
		// Set the default datetime value to the current date and time
		datetime = new Date().toISOString().slice(0, 16);
	});

	
	const dispatch = createEventDispatcher();

	function tagClick(tag : string) {
		const tempTags = tags;
		if (tempTags.includes(tag))
			tempTags.splice(tempTags.indexOf(tag), 1);
		else
			tempTags.push(tag);
		tags = tempTags
	}

	function typeClick(typeChoosed : string) {
		type = typeChoosed
	}


	function handleSubmit(event: Event) {

		const tagList = tags.map((tag) => {
			return { name: tag };
		});

		event.preventDefault();
		const data = {
			title: title,
			amount: amount,
			tag: tagList,
			datetime: datetime,
			transaction_type: type,
			description: description
			};

		console.log(data);

		const response: any = _.postTransaction(data);

		if (response.success){
			console.log(data);
			const response: any = _.postTransaction(data);
			if (response.success){
				title = '';
				amount = 0;
				tags = [];
				type = "income";
				description = "";
				datetime = new Date().toISOString().slice(0, 16);
			}
		}

		// Clear form fields

		
	}

	
</script>

<div class="form-wrapper">
	<form on:submit={handleSubmit}>
		<label for="Title">Title:</label> <br />
		<input type="text" bind:value={title} placeholder="title of transaction" required /> <br />
		<label for="amount">Amount:</label> <br />
		<input type="number" bind:value={amount} placeholder="amount money" required /> <br />
		<b>Type:</b> <br />

		<button type="button" class="type income" class:active={type === 'income'} on:click={() => typeClick('income')}>
            income
          </button>
          <button type="button" class="type expense" class:active={type === 'expense'} on:click={() => typeClick('expense')}>
            expense
          </button>
		<br>
		<b>Tags</b>
		<br>
		{#each Tags as tag}
            <button type="button" class="tag" class:active={tags.includes(tag)} on:click={() => tagClick(tag)}>{tag.name}</button>
          {/each}
		
		<br>
		<label for="DateTime">Date and time:</label> 
		<br>
		<input type="datetime-local" bind:value={datetime} on:change={handleDatetimeChange} />
		<br>

		<label for="description">Description</label>  
		<input type="text" bind:value={description} placeholder="Description of transaction">
		<input type="submit" />
	</form>

</div>
<style>
	.form-wrapper {
		width: 40%;
		border-radius: 5px;
		background-color: #3d3b3b;
		padding: 3%;
	}

	label {
		color: white;
	}

	input[type='text'],
	input[type='number'] {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		display: inline-block;
		border: 1px solid #4b4545;
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

	button {
        all: unset;
        display: inline-block;
        margin: 5px;
        padding: 3px 8px;
        border-radius: 5px;
        font-size: 14px;
        background-color: #555;
        color: #fff;
    }
	
	.active {
        background-color: #4caf50;
    }

	.income {
        color: greenyellow;
    }

    .expense {
        color: red;
    }

	
</style>
