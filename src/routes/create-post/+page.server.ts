import type { Actions } from './$types'

export const actions: Actions = {
  create: async ({ request }) => {
    const data = await request.formData()
    const movie = data.get('movie')
    const title = data.get('title')
    const content = data.get('content')
  }
}
