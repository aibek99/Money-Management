<script lang="ts">
  import { transactions } from "../../lib/transactions/getTransactions.ts";
  import TableHeader from "../../lib/history/TableHeader.svelte";
  import FilterDropdown from "../../lib/history/FilterDropdown.svelte";
  import type { Filter, Transaction } from "../../lib/types";
  import { toDate } from "../../lib/transactions/date";


  let show_transactions: Transaction[] = transactions;

  let sort = { column: "Date", asc: true };

  function sortBy(column) {
    if (sort.column === column) sort.asc = !sort.asc;
    else {
      sort.column = column;
      sort.asc = true;
    }
    sorting();
  }

  function sorting() {
    show_transactions = show_transactions.sort((a, b) => {
      let cmp = 0;
      if (sort.column === "Title") cmp = a.title.localeCompare(b.title);
      else if (sort.column === "Type") cmp = a.transaction_type.localeCompare(b.transaction_type);
      else if (sort.column === "Amount") cmp = a.amount - b.amount;
      else if (sort.column === "Date") cmp = toDate(a.datetime) - toDate(b.datetime);
      else if (sort.column === "Description") cmp = a.description.localeCompare(b.description);
      return sort.asc ? cmp : -cmp;
    });
  }

  let filter: Filter = { transaction_type: null, amount: { from: null, to: null }, tag: [], datetime: { from: null, to: null } };
  let filterOpen = false;

  function toggleFilter() {
    filterOpen = !filterOpen;
  }

  function filterBy(f: Filter) {
    show_transactions = transactions;
    if (f.transaction_type != null)
      show_transactions = show_transactions.filter(a => a.transaction_type === f.transaction_type);
    if (f.amount.from != null && f.amount.to != null)
      show_transactions = show_transactions.filter(a => a.amount >= f.amount.from && a.amount <= f.amount.to);
    else if (f.amount.from != null)
      show_transactions = show_transactions.filter(a => a.amount >= f.amount.from);
    else if (f.amount.to != null)
      show_transactions = show_transactions.filter(a => a.amount <= f.amount.to);
    if (f.tag.name.length)
      show_transactions = show_transactions.filter(a => {
        for (const tag of f.tag)
          if (!a.tag.includes(tag.name))
            return false;
        return true;
      });
    if (f.datetime.from != null && f.datetime.to != null)
      show_transactions = show_transactions.filter(a => toDate(a.datetime) >= toDate(<string>f.datetime.from) && toDate(a.datetime) <= toDate(<string>f.date.to));
    if (f.datetime.from != null)
      show_transactions = show_transactions.filter(a => toDate(a.datetime) >= toDate(<string>f.datetime.from));
    if (f.datetime.to != null)
      show_transactions = show_transactions.filter(a => toDate(a.datetime) <= toDate(<string>f.datetime.to));
    sorting();
  }
</script>

<svelte:head>
  <title>History</title>
</svelte:head>

<div class="container">
  <div class="table-filter-wrapper">
    <strong>History of transactions</strong>
    <div class="table-filter">
      <button on:click={toggleFilter}>
        <i class="fa-solid fa-filter-circle-dollar fa-xl"></i>
      </button>
      <FilterDropdown on:change={() => filterBy(filter)} filter={filter} visible={filterOpen} />
    </div>
  </div>
  <table>
    <thead>
    <tr>
      <TableHeader column="Name" {sort} {sortBy} />
      <TableHeader column="Type" {sort} {sortBy} />
      <TableHeader column="Amount" {sort} {sortBy} />
      <TableHeader column="Date" {sort} {sortBy} />
      <TableHeader column="Tags" />
      <TableHeader column="Description" {sort} {sortBy} />
    </tr>
    </thead>
    <tbody>
    {#each show_transactions as transaction}
      <tr>
        <td>{transaction.title}</td>
        <td class={transaction.transaction_type}>{transaction.transaction_type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.datetime}</td>
        <td>
          {#each transaction.tag as tag}<span>{tag.name}</span>{/each}
        </td>
        <td class="description">{transaction.description}</td>
      </tr>
    {/each}
    </tbody>
  </table>
</div>

<style>
    button {
        all: unset;
    }

    .container {
        background-color: #121212;
        color: white;
        font-family: 'Roboto', sans-serif;
    }

    .table-filter-wrapper {
        height: 40px;
        display: grid;
        align-items: center;
        justify-content: center;
    }

    .table-filter {
        position: absolute;
        right: 10px;
    }

    table {
        /*border-collapse: collapse;*/
        width: 100%;
    }

    td {
        padding: 12px 15px;
        text-align: left;
    }

    tbody tr:nth-child(even) {
        background-color: #222;
    }

    tbody tr:hover {
        background-color: #444;
    }

    tbody td span {
        display: inline-block;
        margin-right: 5px;
        padding: 3px 8px;
        border-radius: 5px;
        font-size: 14px;
        background-color: #555;
        color: #fff;
    }

    .income {
        color: green;
    }

    .expense {
        color: red;
    }

    .description {
        font-size: 15px;
        color: gray;
    }
</style>
