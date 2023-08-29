import { prisma } from "@/prismaClient"
import { StatusError } from "@/utils/errorHandler"

export async function assertEmailIsAvailable(email: string): Promise<void> {
  if (!email) {
    return
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (user) {
    throw new StatusError(404, "That email already exists")
  }
}
