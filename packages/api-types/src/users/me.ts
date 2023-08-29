import { Request } from "express"
import { User } from "models"
import { z } from "zod"

import { DefaultResponse } from "../common/api"

export const getMeSchema = z.object({})

export type GetMeRequest = Request<never, never, never, never>

export type GetMeResponse = DefaultResponse<User | null>
