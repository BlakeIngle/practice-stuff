import "module-alias/register" // this makes the import path alias works

import { createServer } from "./server"

const port = process.env.PORT || 5001
const server = createServer()

server.listen(port, () => {
  console.log(`api running on ${port}`)
})
