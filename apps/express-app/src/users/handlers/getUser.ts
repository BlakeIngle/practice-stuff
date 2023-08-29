import { GetUserRequest, GetUserResponse } from "api-types"
import { Response } from "express"

import { assertUserExists } from "@/users/utils/assertUserExists"
import errorHandler from "@/utils/errorHandler"

export async function getUser(
  req: GetUserRequest,
  res: Response<GetUserResponse>
) {
  try {
    const { userId } = req.params

    const user = await assertUserExists({ userId })

    return res.json({
      data: user,
    })
  } catch (err) {
    return errorHandler(res, err, "There was an error getting a user")
  }
}
