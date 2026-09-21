import { Router } from 'express'
import { getUsers } from '../../../../packages/src/features/users/database/getUsers'

export const usersRoute = Router()

usersRoute.get('/', (_req, res) => {
  res.json(getUsers())
})
