import { createQueryKeyStore } from "@lukemorales/query-key-factory"

export default createQueryKeyStore({
  users: {
    me: {
      queryKey: ["me"],
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
