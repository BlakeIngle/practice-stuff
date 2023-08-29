import "dotenv/config"

import cookies from "cookie-parser"
import cors from "cors"
import express from "express"

import createRoutes from "@/appRouter"

const app = express()

app.use(express.json())
app.use(cookies())
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
)

app.get("/", (req, res) => {
  res.status(200).json({ message: "API base url" })
})

createRoutes(app)

export function createServer() {
  return app
}
