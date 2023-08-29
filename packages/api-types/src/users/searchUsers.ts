import { Request } from "express"
import { User } from "models"
import { z } from "zod"

import { DefaultResponse } from "../common/api"

export const searchUsersSchema = {
  query: z.object({
    searchTerm: z.string(),
  }),
}

type SearchUsersRequestQuery = z.input<typeof searchUsersSchema.query>

export type SearchUsersRequest = Request<
  never,
  never,
  never,
  SearchUsersRequestQuery
>

export type SearchUsersResponse = DefaultResponse<User[]>
