<script lang="ts">
  import { splitDate, toDate} from "../transactions/date";
  import type {dateType} from "../types";
  import type {SvelteHTMLElements} from "svelte/elements";

  export let date: dateType = {from: null, to: null};
  export let changeBalance;
  export let button = "none";
  let formattedFrom = splitDate(date.from);
  let formattedTo = splitDate(date.to);

  function lastMonthButton() {
    button = "month";
    date.to = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    date.from = lastMonth;
    changeBalance();
    formattedFrom = splitDate(date.from);
    formattedTo = splitDate(date.to);
  }

  function lastYearButton() {
    button = "year";
    date.to = new Date();
    const lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);
    date.from = lastYear;
    changeBalance();
    formattedFrom = splitDate(date.from);
    formattedTo = splitDate(date.to);
  }

  function allPeriodButton() {
    button = "all";
    date.to = null;
    date.from = null;
    changeBalance();
    formattedFrom = splitDate(date.from);
    formattedTo = splitDate(date.to);
  }

  function handleChange(type: 'from' | 'to', event: SvelteHTMLElements) {
    let value = event.target.value;
    if (type == 'from')
      date.from = toDate(value);
    else if (type == 'to')
      date.to = toDate(value);
    changeBalance();
    button = "none";
    formattedFrom = splitDate(date.from);
    formattedTo = splitDate(date.to);
  }
</script>

<div class="filter">
  <div class="range-input">
    <input type="date" on:change={() => handleChange('from', event)} bind:value={formattedFrom}>
    <span>-</span>
    <input type="date" on:change={() => handleChange('to', event)} bind:value={formattedTo}>
  </div>
  <div class="row">
    <button class:active={button === 'all'} on:click={allPeriodButton}>All period</button>
    <button class:active={button === 'month'} on:click={lastMonthButton}>Last month</button>
    <button class:active={button === 'year'} on:click={lastYearButton}>Last year</button>
  </div>
</div>


<style>
    .filter {
        position: absolute;
        z-index: 1;
        padding: 2px;
        border: 1px solid white;
        border-radius: 10px;
        background: linear-gradient(to top left, darkgreen, #444444);
    }

    .range-input {
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .active {
        background-color: green;
        border: 1px solid black;
    }

    button {
        all: unset;
        padding: 2px;
        border-radius: 10px;
        border: 1px solid black;
        font-size: 14px;
    }

    input {
        border-radius: 10px;
        background-color: #444444;
        padding: 2px;
        margin: 2px;
    }
</style>