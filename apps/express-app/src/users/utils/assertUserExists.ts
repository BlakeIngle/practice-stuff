import { Prisma } from "database"
import { User } from "models"

import { prisma } from "@/prismaClient"
import { StatusError } from "@/utils/errorHandler"

interface AssertUserExists {
  userId: string | number | undefined
  refinement?: {
    select: Prisma.UserSelect
  }
}

export async function assertUserExists({
  userId,
  refinement,
}: AssertUserExists): Promise<User> {
  if (!userId) {
    throw new StatusError(400, "You must provide a user id")
  }

  if (isNaN(Number(userId))) {
    throw new StatusError(400, "Invalid user id")
  }

  const user = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
    select: { ...refinement?.select, id: true, email: true },
  })

  if (!user) {
    throw new StatusError(404, "User not found")
  }

  return user
}
