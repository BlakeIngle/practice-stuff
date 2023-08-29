import { Request } from "express"
import { User } from "models"
import { z } from "zod"

import { DefaultResponse } from "../common/api"

export const createUserSchema = {
  body: z.object({
    name: z.string(),
    email: z.string().email(),
  }),
}

type CreateUserRequestBody = z.input<typeof createUserSchema.body>

export type CreateUserRequest = Request<
  never,
  never,
  CreateUserRequestBody,
  never
>

export type CreateUserResponse = DefaultResponse<User>
