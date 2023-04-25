<script lang="ts">
    import { transactions } from '$lib/transactions/getTransactions'
    import { page } from '$app/stores'
    import _ from "$lib/APIHandler/fetchApi";
    import { splitDate } from "$lib/transactions/date"
    import type { responseTransaction } from '$lib/APIHandler/types';

    const id = Number($page.params.id)


    let showModal = false;
  
    function toggleModal() {
        showModal = !showModal;
    }
    let transaction : Promise<responseTransaction> = _.getTransaction(id)
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
            <button class="edit-btn" on:click={ () => toggleModal}>Edit</button>
            <a href="/history"> <button class="delete-btn" on:click={ () => _.deleteTransaction(id)}>  Delete </button>  <a>
          </div>

          {#if showModal}
            <Transaction />
          {/if}
        {/if}
    {/await}
</div>

<style>

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