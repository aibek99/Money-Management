<script lang="ts">
  import { transactions } from "../transactions/getTransactions";
  import { toDate } from "../transactions/date";
  import type { dateType, Transaction } from "../types";
  import BalanceFilterDropdown from "./DateFilterDropdown.svelte";

  let date: dateType = { from: null, to: null };

  let balance = 0;
  let button = "all";
  let openFilter = false;

  function changeBalance() {
    balance = 0;
    for (const transaction: Transaction of transactions) {
      if ((toDate(transaction.date) >= date.from && toDate(transaction.date) <= date.to)
        || (date.to == null && date.from == null) || (toDate(transaction.date) >= date.from && date.to == null)
        || (toDate(transaction.date) <= date.to && date.from == null)) {
        if (transaction.type == "income")
          balance += transaction.amount;
        else
          balance -= transaction.amount;
      }
    }
  }

  function toggleFilter() {
    openFilter = !openFilter;
  }
  changeBalance();
</script>

<div class="card">
  <div class="col left-col">
    <i class="fa-solid fa-wallet fa-lg"></i>
  </div>
  <div class="col right-col">
    <strong>Balance</strong>
    <button on:click={toggleFilter}>
      {#if openFilter}
        <i class="fa-solid fa-calendar-xmark"></i>
      {:else}
        <i class="fa-solid fa-calendar-check"></i>
      {/if}
    </button>
    {#if openFilter}
      <BalanceFilterDropdown changeBalance={changeBalance} date={date} bind:button={button}/>
    {/if}
    <div class="balance">{balance}</div>
  </div>
</div>

<style>
    .card {
        padding: 10px;
        display: flex;
        border-radius: 10px;
        background: linear-gradient(to bottom right, green, #121212);
        border: 1px solid white;
        width: 25%;
        gap: 10px;
        color: black;
        font-family: 'Kanit', sans-serif;
        font-size: 30px;
    }

    .col {
        display: inline-block;
    }

    .right-col {
        width: 100%;
    }

    .fa-wallet {
        width: 50px;
        height: 50px;
        display: grid;
        align-items: center;
        justify-items: center;
        border-radius: 100%;
        color: white;
    }

    .balance {
        text-align: right;
        color: white;
    }

    button {
        all: unset;
        float: right;
    }

</style>