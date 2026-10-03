import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { PACKAGE_TEST } from 'packages/common/constants'
import { usersRoute } from './features/users/route'

const app = new Hono()
const port = Number(process.env.PORT ?? 3000)

app.get('/', (c) => c.text(PACKAGE_TEST))

app.route('/api/users', usersRoute)

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`listening on http://localhost:${info.port}`)
})
