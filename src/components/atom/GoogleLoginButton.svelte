<script lang="ts">
  import googleLoginLogo from '$lib/assets/google_login_logo.svg'
  import { auth, googleProvider } from '$lib/firebase'
  import { googleUserName } from '$lib/store'
  import { signInWithPopup } from 'firebase/auth'

  const handleLogin = (): void => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        if (result.user.displayName) {
          googleUserName.set(result.user.displayName)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
</script>

<button on:click={handleLogin}
  ><img class="w-2/3 h-auto md:w-full" src={googleLoginLogo} alt="googleログイン" /></button
>
