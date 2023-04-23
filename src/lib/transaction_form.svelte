<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Tags } from "./types";

	let title: string = '';
	let amount: number = 0;
	let tags : string[] = [];
	let type : string = "income"
	let description : string = ""
	
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
	
</script>

<div class="form-wrapper">
	<form action="">
		<label for="Title">Title:</label> <br />
		<input type="text" bind:value={title} placeholder="title of transaction" required /> <br />
		<label for="amount">Amount:</label> <br />
		<input type="number" bind:value={amount} placeholder="amount money" required /> <br />
		<b>Type:</b> <br />

		<button class="type income" class:active={type === 'income'} on:click={() => typeClick('income')}>
            income
          </button>
          <button class="type expense" class:active={type === 'expense'} on:click={() => typeClick('expense')}>
            expense
          </button>
		<br>
		<b>Tags</b>
		<br>
		{#each Tags as tag}
            <button class="tag" class:active={tags.includes(tag)} on:click={() => tagClick(tag)}>{tag}</button>
          {/each}
		
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
