<script lang="ts">
  import CustomInput from "../history/CustomInput.svelte";
  import { isDate, toDate } from "../transactions/date";
  import { splitDate } from "$lib/transactions/date.js";

  export let date;
  export let changeBalance;
  let error = false;
  let button = "";

  function lastMonthButton() {
    button = "month";
    date.to = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    date.from = lastMonth;
    changeBalance();
  }

  function lastYearButton() {
    button = "year";
    date.to = new Date();
    const lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);
    date.from = lastYear;
    changeBalance();
  }

  function allButton() {
    button = "all";
    date.to = null;
    date.from = null;
    changeBalance();
  }

  function dateChange(type, value) {
    error = value != "" && !isDate(value);
    if (type == "From")
      date.from = value == "" ? null : toDate(value);
    else if (type == "To")
      date.to = value == "" ? null : toDate(value);
    if (error)
      date.from = date.to = null;
    button = date.from == null && date.to == null ? "all" : "none";
    changeBalance();
  }

  function dateSave(value) {

  }
</script>

<div class="filter">
  <div class="range-input">
    <CustomInput label="From" type="text" onChange={dateChange} error={error} value={splitDate(date.from)}/>
    <span>-</span>
    <CustomInput label="To" type="text" onChange={dateChange} error={error} value={splitDate(date.to)}/>
  </div>
  <div class="rules">mm.dd.yyyy</div>
  <div class="row">
    <button class:active={button === 'all'} on:click={allButton}>All period</button>
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

    .rules {
        display: grid;
        justify-items: center;
        font-size: 10px;
        color: gray;
    }
</style>