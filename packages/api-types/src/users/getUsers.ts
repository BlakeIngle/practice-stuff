import { Prisma } from "database"
import { Request } from "express"
import { User } from "models"
import { z } from "zod"

import { DefaultResponse } from "../common/api"

export const getUserSchema = {
  params: z.object({
    userId: z.string(),
  }),
}

type GetUserRequestParams = z.input<typeof getUserSchema.params>
export type GetUserRequest = Request<GetUserRequestParams, never, never, never>

const select = {
  id: true,
  email: true,
} satisfies Prisma.UserSelect

const userSelect = Prisma.validator<Prisma.UserArgs>()({
  select,
})

interface UserSelected extends Prisma.UserGetPayload<typeof userSelect> {}

export type GetUserResponse = DefaultResponse<User, UserSelected>
