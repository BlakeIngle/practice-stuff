import { createUserSchema, getUserSchema, searchUsersSchema } from "api-types"
import express, { Router } from "express"
import { processRequest } from "zod-express-middleware"

import { createUser, getMe, getUser, searchUsers } from "@/users/handlers"

const users = express.Router()

function createUserRoutes(router: Router) {
  router.use("/users", users)
}

// GET
users.get("/me", getMe)
users.get("/search", processRequest(searchUsersSchema), searchUsers)
users.get("/:userId", processRequest(getUserSchema), getUser)

// POST
users.post("/", processRequest(createUserSchema), createUser)

// PUT

// DELETE

export default createUserRoutes
