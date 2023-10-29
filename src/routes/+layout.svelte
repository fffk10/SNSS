<script lang="ts">
  import Footer from '$components/layout/Footer.svelte'
  import Header from '../components/layout/Header.svelte'
</script>

<div class="flex flex-col min-h-screen">
  <Header />

  <main class="flex-grow m-2 p-2">
    <slot />
  </main>

  <Footer />
</div>
