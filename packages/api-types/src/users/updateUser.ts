import { Request } from "express"
import { z } from "zod"

import { DefaultResponse } from "../common/api"

export const updateUserSchema = {
  params: z.object({
    userId: z.string(),
  }),
  body: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    profilePic: z.string().optional(),
  }),
}

type UpdateUserRequestParams = z.input<typeof updateUserSchema.params>
type UpdateUserRequestBody = z.input<typeof updateUserSchema.body>

export type UpdateUserRequest = Request<
  UpdateUserRequestParams,
  never,
  UpdateUserRequestBody,
  never
>

export type UpdateUserResponse = DefaultResponse<never>
