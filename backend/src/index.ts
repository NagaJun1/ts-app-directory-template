import express from 'express'
import { PACKAGE_TEST } from 'packages/common/constants'

const app = express()
const port = process.env.PORT ?? 3000

app.get('/', (_req, res) => {
  res.send(PACKAGE_TEST)
})

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})
