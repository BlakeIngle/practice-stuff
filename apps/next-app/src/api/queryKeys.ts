import { createQueryKeyStore } from "@lukemorales/query-key-factory"
import { GetMeResponse } from "api-types"

import api from "@/api"

export default createQueryKeyStore({
  users: {
    me: {
      queryKey: ["me"],
      queryFn: () => api.get<GetMeResponse>("/users/me"),
    },
  },
  // todos: {
  // 	detail: (todoId: string) => [todoId],
  // 	list: (filters: TodoFilters) => ({
  // 		queryKey: [{ filters }],
  // 		queryFn: (ctx) => api.getTodos({ filters, page: ctx.pageParam }),
  // 	}),
  // },
})
