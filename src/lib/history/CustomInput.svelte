<script>

  export let label = "";
  export let onChange;
  export let error = false;
  export let placeholder = '';
  export let date = new Date();

  let formattedDate = date.toLocaleDateString();

  function handleChange(event) {
    let value = new Date(event.target.value);
    console.log(value);
    // onChange(label, splitDate(value));
  }
</script>

<div class="input-wrapper">
  <input
    type='date'
    bind:value={formattedDate}
    on:input={handleChange}
    placeholder={placeholder}
    class:error={error}
  />
</div>

<style>
    .input-wrapper {
        /*width: 15rem;*/
    }

    input {
        border-radius: 10px;
        background-color: #444444;
        padding: 2px;
        margin: 2px;
    }

    .error {
        background-color: darkred;
    }
</style>
