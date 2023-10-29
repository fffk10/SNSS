<script lang="ts">
  import type { SvelteComponent } from 'svelte'

  type Component = $$Generic<typeof SvelteComponent>
  // ↓===== props ===== //
  export let snsName: string
  export let accountName: string | null
  // ↑===== props ===== //
</script>

<div class="md:flex justify-between p-4">
  <div class="flex-1"><h1 class="font-semibold">{snsName}</h1></div>
  {#if accountName}
    <div class="sm:flex flex-1 justify-between">
      <p class="text-gray-500">{accountName}</p>
      <slot name="logout" />
    </div>
  {:else}
    <div class="flex justify-end flex-1">
      <slot name="login" />
    </div>
  {/if}
</div>
