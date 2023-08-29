import { useQuery } from "@tanstack/react-query"

import queryKeys from "@/api/queryKeys"

function useGetMe() {
  return useQuery({
    ...queryKeys.users.me,
    select(data) {
      return data.data.data
    },
  })
}

export default useGetMe
