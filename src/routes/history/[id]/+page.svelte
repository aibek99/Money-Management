<script lang="ts">
    import { transactions } from '$lib/transactions/getTransactions'
    import { page } from '$app/stores'
    import type { Transaction } from '$lib/types';
    const id = $page.params.id
    
    let show_transactions: Transaction[] = transactions;
</script>


<div >
    {#each show_transactions as transaction}
        {#if transaction.name == id}
            <p>{transaction.name}</p>
            <p>{transaction.type}</p>
            <p>{transaction.amount}</p>
            <p>{transaction.tags}</p>
        {/if }
    {/each}


</div>

<style>

    div{
        margin: 30px;
    }

</style>