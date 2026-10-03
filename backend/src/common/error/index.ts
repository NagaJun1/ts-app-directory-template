import type { ErrorHandler, NotFoundHandler } from 'hono'
import { HTTPException } from 'hono/http-exception'

export const errorHandler: ErrorHandler = (err, c) => {
  if (err instanceof HTTPException) {
    return c.json({ message: err.message }, err.status)
  }

  console.error(err)
  return c.json({ message: 'Internal Server Error' }, 500)
}

export const notFoundHandler: NotFoundHandler = (c) =>
  c.json({ message: 'Not Found' }, 404)
