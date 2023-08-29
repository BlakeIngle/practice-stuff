import { GetMeResponse } from "api-types"
import { Request, Response } from "express"

import { assertUserExists } from "@/users/utils/assertUserExists"
import errorHandler from "@/utils/errorHandler"
import { AuthLocals } from "@/utils/locals"

export async function getMe(
  req: Request,
  res: Response<GetMeResponse, Partial<AuthLocals>>
) {
  try {
    const userId = res.locals?.user?.id

    const me = await assertUserExists({ userId })

    return res.status(200).json({
      message: "success",
      data: me,
    })
  } catch (err) {
    return errorHandler(res, err, "Error getting user")
  }
}
