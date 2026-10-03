import { Hono } from 'hono'
import { getUsers } from '../../../../packages/src/features/users/database/getUsers'

export const usersRoute = new Hono()

usersRoute.get('/', (c) => c.json(getUsers()))
