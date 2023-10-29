import type { Actions } from './$types'

export const actions: Actions = {
  create: async ({ request }) => {
    const data = await request.formData()
    const video = data.get('video')
    const title = data.get('title')?.toString()
    const description = data.get('description')?.toString()
    console.log(`video=${video}`)
    console.log(`title=${title}`)
    console.log(`description=${description}`)
  }
}
