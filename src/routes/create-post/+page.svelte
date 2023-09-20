<div class="m-4">
  <h1>投稿作成画面</h1>

  <form
    method="post"
    action="?/create"
    class="flex flex-col m-3 shadow-md rounded px-8 pt-6 pb-8 mb-4"
  >
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="movie">動画選択</label>
      <input
        class="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="movie"
        name="movie"
        type="file"
      />
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
      <label class="block text-gray-700 text-sm font-bold mb-2" for="content"> 本文 </label>
      <textarea
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="content"
        name="content"
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
  </form>
</div>
