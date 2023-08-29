import { SearchUsersRequest, SearchUsersResponse } from "api-types"
import { Response } from "express"

import { prisma } from "@/prismaClient"
import errorHandler, { StatusError } from "@/utils/errorHandler"

export async function searchUsers(
  req: SearchUsersRequest,
  res: Response<SearchUsersResponse>
) {
  try {
    const { searchTerm } = req.query

    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            email: {
              contains: searchTerm,
            },
          },
        ],
      },
      select: {
        id: true,
        email: true,
      },
    })

    if (!users || users.length === 0) {
      throw new StatusError(404, "No users found.")
    }

    return res.json({
      data: users,
    })
  } catch (err) {
    return errorHandler(res, err, "There was an error searching users.")
  }
}
