<script lang="ts">
    import Transaction from "$lib/transaction_form.svelte"

    let showModal = true;
  
    function toggleModal() {
      showModal = !showModal;
    }
  </script>
  
  <button on:click={toggleModal}>Show Modal</button>
  
  {#if showModal}
    <div class="modal">
      <div class="modal-content">
        <span class="close" on:click={toggleModal}>&times;</span>
        asdas
      </div>
    </div>
  {/if}
  
  <style>
    /* CSS styles */
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
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
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
  </style>
  