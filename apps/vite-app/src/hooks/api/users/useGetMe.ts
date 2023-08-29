import { useQuery } from "@tanstack/react-query"

import queryKeys from "@/api/queryKeys"
import { getMe } from "@/api/UserService"

function useGetMe() {
  return useQuery({
    queryKey: queryKeys.users.me.queryKey,
    queryFn: getMe,
  })
}

export default useGetMe
