<script lang="ts">
    import { transactions } from '$lib/transactions/getTransactions'
    import { page } from '$app/stores'
    import _ from "$lib/APIHandler/fetchApi";
    import { splitDate } from "$lib/transactions/date"
    import type { responseTransaction } from '$lib/APIHandler/types';
    import type { Tag } from '$lib/types'

    const id = Number($page.params.id)

    let title : string;
    let amount : number
    let author : number
    let description : string
    let transaction_type : "income" | "expense"
    let tags : Tag[] | []
    let showModal = false;
  

    function toggleModal() {
        showModal = !showModal;
    }
    let transaction : Promise<responseTransaction> = _.getTransaction(id)
    
    async function setValues(){
      let response = await transaction
      if (response.data){ 
        title = response.data.title
        amount = response.data.amount
        author = response.data.author
        description = response.data.description
        transaction_type = response.data.transaction_type
        tags = response.data.tag
      }
    }

    function typeClick(typeChoosed : "income" | "expense") {
      transaction_type = typeChoosed
    }    

    async function handleUpdate(event : Event) {
      event.preventDefault();
      
		const data = {
      id: id,
			title: title,
			amount: amount,
			tag: tags,
			datetime: (await transaction).data?.datetime,
			transaction_type: transaction_type,
			description: description
			};
      _.postTransaction(data)
      toggleModal()
    }

    setValues()
</script>

<div class="item">
    {#await transaction}
        <p>Wating the transaction</p>
    {:then value} 
        <p> value. </p>
        {#if value.data}
        <div class="post">
            <h2 class="post-title">{value.data.title}</h2>
            <p class="post-meta">
              <span class="post-author">{value.data.author}</span>
              <span class="post-date"> {splitDate(value.data.datetime)}</span>
              {#each value.data.tag as tag}
                  <span class="post-tag">{tag.name}</span>
              {/each}
            </p>
            <div class="post-content">
              <p class="post-description">{value.data.description}</p>
              <p class="post-id">ID: {value.data.id}</p>
              <p class="post-amount">Amount: {value.data.amount}</p>
            </div>
          </div>
          <div class="buttons">
            <button class="edit-btn" on:click={toggleModal}>Edit</button>
            <a href="/history"> <button class="delete-btn" on:click={ () => _.deleteTransaction(id)}>  Delete </button>  <a>
          </div>
          
          {#if showModal}
          <div class="modal">
            <div class="modal-content">
              <span class="close" on:click={toggleModal}>&times;</span>
              <h2>Edit transaction</h2>
              <form on:submit={handleUpdate}>
                <label for="Title">Title:</label> <br />
                <input type="text" bind:value={title} placeholder="title of transaction" required /> <br />
                <label for="amount">Amount:</label> <br />
                <input type="number" bind:value={amount} placeholder="amount money" required /> <br />
                <label for="type">Type</label>
                <br />

                <button type="button" class="type income" class:active={transaction_type === 'income'} on:click={() => typeClick('income')}>
                        income
                      </button>
                      <button type="button" class="type expense" class:active={transaction_type === 'expense'} on:click={() => typeClick('expense')}>
                        expense
                      </button>
                <br>
                <label for="tags">Tags</label>
                <br>
                {#each tags as tag}
                        <button type="button" class="tag" class:active={tags.includes(tag.name)} on:click={() => tagClick(tag.name)}>{tag.name}</button>
                      {/each}
                
                    <br>
                <label for="description">Description</label>  
                <input type="text" bind:value={description} placeholder="Description of transaction">
                <input type="submit" />
              </form>
            
            </div>
          </div>
          {/if}
        {/if}
    {/await}
</div>

<style>

input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
		}
    input[type='text'],
	input[type='number'],
	input[type='date'] {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		display: inline-block;
		border: 1px solid #4b4545;
		border-radius: 4px;
		box-sizing: border-box;
	}
.modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    display: block;
    position: fixed;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #484242;
    padding: 20px;
    border-radius: 5px;
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
  .close {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 28px;
    font-weight: bold;
    color: #aaa;
    cursor: pointer;
  }


a{
  all : unset;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.edit-btn,
.delete-btn {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.edit-btn:hover,
.delete-btn:hover {
  background-color: #0062cc;
}

.delete-btn {
  background-color: #dc3545;
}

.delete-btn:hover {
  background-color: #c82333;
}


    .buttons {
        display: flex;


    }

    .item {
        border-radius: 5px;
        margin: 30px;
    }

.post {
}

.post:hover {
}

.post-title {
}

.post-meta {
}

.post-meta span {
}

.post-content {
}

.post-description {

}

.post-id,
.post-amount {
}



</style>