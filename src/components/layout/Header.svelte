<script lang="ts">
  import CloseMenuButton from '../atom/CloseMenuButton.svelte'
  import HumbergerButton from '../atom/HumbergerButton.svelte'

  let mobileOpenMenu = false
  const handleClickMenuButton = () => {
    mobileOpenMenu = !mobileOpenMenu
  }
</script>

<!-- DOM -->
<!-- <header>
    <div class="p-2 flex justify-between items-center shadow-md">
      <div class="flex items-center">
        <a href="/"><h1 class="font-semibold text-2xl">SNSS</h1></a>
      </div>
      <nav class="w-28">
        <ul class="flex">
          <li class="flex-grow"><a href="#" /><Fa class="mx-auto" icon={faTiktok} /></li>
          {#if isLogin}
            <li class="flex-grow">
              <button on:click={handleLogout}><img src={user?.photoURL} alt="User Icon" /></button>
            </li>
          {:else}
            <button on:click={handleLogin}><Fa class="mx-auto" icon={faYoutube} /></button>
          {/if}
          <button on:click={handleLogin}><Fa class="mx-auto" icon={faYoutube} /></button>
          <li class="flex-grow"><a href="#" /><Fa class="mx-auto" icon={faXTwitter} /></li>
        </ul>
      </nav>
    </div>
  </header> -->

<header class="bg-white shadow-md">
  <nav
    class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
    aria-label="Global"
  >
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <h1 class="text-3xl">SNSS</h1>
      </a>
    </div>

    <HumbergerButton openMenu={handleClickMenuButton} />

    <div class="hidden lg:flex lg:gap-x-12">
      <div class="relative" />

      <a href="/accounts" class="text-sm font-semibold leading-6 text-gray-900">accounts</a>
    </div>
  </nav>
  <!-- Mobile menu. -->
  {#if mobileOpenMenu}
    <div role="dialog" aria-modal="true">
      <!-- Background backdrop. -->
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <h1>SNSS</h1>
          </a>
          <CloseMenuButton closeMenu={handleClickMenuButton} />
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <div class="-mx-3" />
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Youtube</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Instagram</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >X</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >TikTok</a
              >
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Log in</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
