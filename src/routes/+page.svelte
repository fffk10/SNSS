<script lang="ts">
  import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'

  /**
   * 投稿内容作成画面に遷移
   */
  const handlePost = (): void => {}
</script>

<div>
  <h1 class="text-2xl">dashboard</h1>

  <ul>
    <li>定型文1</li>
    <li>定型文2</li>
    <li>定型文3</li>
  </ul>

  <div class="p-1 fixed flex right-12 bottom-14 border-2 border-gray-200 rounded-xl">
    <a href="/create-post" class="flex-grow" on:click={() => handlePost()}
      ><Fa class="text-3xl text-yellow-500" icon={faPenToSquare} /></a
    >
  </div>
</div>
