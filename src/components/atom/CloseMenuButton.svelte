<script lang="ts">
  export let closeMenu: () => void
</script>

<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" on:click={closeMenu}>
  <span class="sr-only">Close menu</span>
  <svg
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
