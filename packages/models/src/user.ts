import { z } from "zod"

const emailSchema = z.string().email()

export const passwordSchema = z
  .string()
  .regex(
    /^(?=.*[\d])(?=.*[!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/])(?=.*[A-Z])[A-Za-z\d!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/]{8,}$/
  )

export const userSchema = {
  email: emailSchema,
  password: passwordSchema,
}

export interface User {
  id: number
  email: string
  emailVerified?: Date | null

  // password?: never // do not include password in any api get requests

  created?: Date
  updated?: Date
}
