import { useQuery } from '@tanstack/react-query';
import type { User } from 'packages/features/users/types'
import { QUERY_KEY } from '../../../common/constants/queryKey';

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('/api/users')
  return res.json()
}

export const useGetUsers = () => useQuery({
  queryKey: [QUERY_KEY.users],
  queryFn: fetchUsers,
})
