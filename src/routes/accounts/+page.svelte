<script lang="ts">
  import SNS from '$components/accounts/SNS.svelte'
  import GoogleLoginButton from '$components/atom/GoogleLoginButton.svelte'
  import GoogleLogoutButton from '$components/atom/GoogleLogoutButton.svelte'
  import CardContainer from '$components/layout/CardContainer.svelte'
  import { googleUserName, instagramUserName, tikTokUserName, xUserName } from '$lib/store'
  import type { SvelteComponent } from 'svelte'

  type SnsServices = {
    id: number
    name: string
    userName: string | null
    loginButton: SvelteComponent
    logoutButton: SvelteComponent
  }

  let googleUser: string | null
  let instagramUser: string | null
  let tiktokUser: string | null
  let xUser: string | null

  googleUserName.subscribe((value) => {
    googleUser = value
  })

  instagramUserName.subscribe((value) => {
    instagramUser = value
  })

  tikTokUserName.subscribe((value) => {
    tiktokUser = value
  })

  xUserName.subscribe((value) => {
    xUser = value
  })
</script>

<!-- ↓DOM -->
<CardContainer>
  <!-- Youtube -->
  <SNS snsName={'Youtube'} accountName={googleUser}>
    <span slot="login"><GoogleLoginButton /></span>
    <span slot="logout"><GoogleLogoutButton /></span>
  </SNS>

  <!-- Instagram -->
  <!-- TODO 投稿APIを利用するためにはビジネスアカウントが必要 -->
  <!-- <SNS snsName={'Instagram'} accountName={instagramUser}>
    <span slot="login"><GoogleLoginButton /></span>
    <span slot="logout"><GoogleLogoutButton /></span>
  </SNS> -->

  <!-- TikTok -->
  <!-- <SNS snsName={'TikTok'} accountName={tiktokUser}>
    <span slot="login"><GoogleLoginButton /></span>
    <span slot="logout"><GoogleLogoutButton /></span>
  </SNS> -->

  <!-- X -->
  <!-- <SNS snsName={'X'} accountName={xUser}>
    <span slot="login"><GoogleLoginButton /></span>
    <span slot="logout"><GoogleLogoutButton /></span>
  </SNS> -->
</CardContainer>
<!-- ↑DOM -->
