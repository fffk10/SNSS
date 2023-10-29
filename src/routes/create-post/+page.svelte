<script lang="ts">
  import type { ChangeEventHandler } from 'svelte/elements'

  let isSelectedVideo = false
  let targetVideo: File | null

  const handleSelectVideo: ChangeEventHandler<HTMLInputElement> = (e): void => {
    isSelectedVideo = !isSelectedVideo
    const inputElement = e.currentTarget
    if (inputElement) {
      targetVideo = inputElement.files?.[0] || null
    }
  }
</script>

<div class="m-4">
  <h1>動画アップロード</h1>

  <form
    method="post"
    action="?/create"
    class="flex flex-col m-3 shadow-md rounded px-8 pt-6 pb-8 mb-4"
  >
    {#if !isSelectedVideo}
      <div class="m-4 text-center items-center">
        アップロードする動画を選択、またはアップロードしてください
        <input type="file" id="video" accept="video/*" on:change={handleSelectVideo} />
      </div>
    {:else}
      <div class="mb-4">
        <h2 class="block text-gray-700 text-sm font-bold mb-2">選択した動画</h2>
        <p class="block text-gray-700 text-sm font-bold mb-2">{targetVideo?.name}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title"> タイトル </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="title"
          name="title"
          autocomplete="off"
          placeholder="タイトル"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="description"> 本文 </label>
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          name="description"
          placeholder="本文"
          rows="10"
        />
      </div>
      <div class="flex items-center justify-end">
        <button
          type="submit"
          class="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          次へ
        </button>
      </div>
    {/if}
  </form>
</div>
