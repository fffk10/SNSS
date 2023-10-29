<script lang="ts">
  import { auth } from '$lib/firebase'
  import { googleUserName } from '$lib/store'
  import { signOut } from 'firebase/auth'

  const handleLogout = (): void => {
    signOut(auth)
      .then(() => {
        googleUserName.set('')
      })
      .catch((e) => {
        console.error(e.message)
      })
  }
</script>

<button on:click={handleLogout}>ログアウト</button>
