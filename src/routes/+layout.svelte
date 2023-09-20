<script lang="ts">
  import { faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
  import Fa from 'svelte-fa'

  // darkモード未対応
  // const handleDarkMode = (): void => {
  //   if (document.documentElement.classList.contains('dark')) {
  //     document.documentElement.classList.remove('dark')
  //     localStorage.theme = 'light'
  //   } else {
  //     document.documentElement.classList.add('dark')
  //     localStorage.theme = 'dark'
  //   }
  // }
</script>

<div class="flex flex-col min-h-screen">
  <header>
    <div class="p-2 flex justify-between items-center shadow-md">
      <div class="flex items-center">
        <a href="/"><h1 class="font-semibold text-3xl">SNSS</h1></a>
      </div>
      <nav class="w-28">
        <ul class="flex">
          <!-- TODO リンク先を動的に-->
          <li class="flex-grow"><a href="#" /><Fa class="mx-auto" icon={faTiktok} /></li>
          <li class="flex-grow"><a href="#" /><Fa class="mx-auto" icon={faYoutube} /></li>
          <li class="flex-grow"><a href="#" /><Fa class="mx-auto" icon={faXTwitter} /></li>

          <!-- darkモード未対応 -->
          <!-- <li class="flex-grow">
            <button on:click={() => handleDarkMode()}><Fa class="mx-auto" icon={faMoon} /></button>
          </li> -->
        </ul>
      </nav>
    </div>
  </header>

  <main class="flex-grow">
    <slot />
  </main>

  <footer class="fixed bottom-0 w-full z-50 bg-white">
    <div class="flex justify-center text-sm">
      <p>&copy; 2023 fffk10</p>
    </div>
  </footer>
</div>
