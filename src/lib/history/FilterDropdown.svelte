<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Filter, Tag, TransType } from "../types";
  import { Tags } from "../types";
  import { toDate } from "../transactions/date";
  import type { SvelteHTMLElements } from "svelte/elements";

  export let filter: Filter;
  let formattedFrom = '';
  let formattedTo = '';

  const dispatch = createEventDispatcher();

  function typeClick(type: TransType) {
    if (filter.type != null)
      filter.type = filter.type === type ? null : type;
    else
      filter.type = type;
    dispatch("change", filter);
  }

  function tagClick(tag: Tag) {
    const tags = [...filter.tags];
    if (tags.includes(tag.name))
      tags.splice(tags.indexOf(tag.name), 1);
    else
      tags.push(tag.name);
    filter.tags = tags;
    dispatch("change", filter);
  }

  function amountClick(type : 'from' | 'to', event: SvelteHTMLElements) {
    let value = event.target.value;
    if (type == "from")
      filter.amount.from = value == "" ? null : value;
    else if (type == "to")
      filter.amount.to = value == "" ? null : value;
    dispatch("change", filter);
  }

  function dateClick(type: 'from' | 'to', event: SvelteHTMLElements) {
    let value = event.target.value;
    if (type == "from") {
      filter.date.from = toDate(value);
      formattedFrom = value;
    } else if (type == "to") {
      filter.date.to = toDate(value);
      formattedTo = value;
    }
    dispatch("change", filter);
  }
</script>

<div class="filter-dropdown">
  <table>
    <tr>
      <th>Type</th>
      <td>
        <button class="type income" class:active={filter.type === 'income'} on:click={() => typeClick('income')}>
          income
        </button>
        <button class="type expense" class:active={filter.type === 'expense'} on:click={() => typeClick('expense')}>
          expense
        </button>
      </td>
    </tr>
    <tr>
      <th>Amount</th>
      <td>
        <div class="range-input">
          <input type="number" on:input={() => amountClick('from', event)} bind:value={filter.amount.from}>
          <span>-</span>
          <input type="number" on:input={() => amountClick('to', event)} bind:value={filter.amount.to}>
        </div>
      </td>
    </tr>
    <tr>
      <th>Tags</th>
      <td>
        {#each Tags as tag}
          <button class="tag" class:active={filter.tags.includes(tag.name)} on:click={() => tagClick(tag)}>{tag.name}</button>
        {/each}
      </td>
    </tr>
    <tr>
      <th>
        <div>Date</div>
      </th>
      <td>
        <div class="range-input">
          <input type="date" on:change={() => dateClick("from", event)} bind:value={formattedFrom}>
          <span>-</span>
          <input type="date" on:change={() => dateClick("to", event)} bind:value={formattedTo}>
        </div>
      </td>
    </tr>
  </table>
</div>

<style>
    .filter-dropdown {
        position: absolute;
        z-index: 1;
        right: 0;
        background-color: #222222;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid gray;
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

    .range-input {
        display: flex;
        flex-direction: row;
        align-items: center;
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

    input {
        all: unset;
        border-radius: 10px;
        background-color: #444444;
        padding: 3px;
        margin: 2px;
        width: 120px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        appearance: textfield;
        -moz-appearance: textfield;
    }
</style>