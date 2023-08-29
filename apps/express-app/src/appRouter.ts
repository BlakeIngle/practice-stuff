import express, { Express } from "express"

import createUserRoutes from "@/users/router"

const appRouter = express.Router()

function createRoutes(app: Express) {
  app.use("/api", appRouter)

  createUserRoutes(appRouter)
}

export default createRoutes
