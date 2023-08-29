import { CreateUserRequest, CreateUserResponse } from "api-types"
import { Response } from "express"

import { prisma } from "@/prismaClient"
import { assertEmailIsAvailable } from "@/users/utils/assertEmailIsAvailable"

export async function createUser(
  req: CreateUserRequest,
  res: Response<CreateUserResponse>
) {
  const { email } = req.body

  await assertEmailIsAvailable(email)

  const newUser = await prisma.user.create({
    data: {
      email,
    },
  })

  return res.json({
    data: newUser,
  })
}
