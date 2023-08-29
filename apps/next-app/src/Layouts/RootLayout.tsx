import { Box } from "@mui/material"
import { ReactNode } from "react"

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <Box sx={{ height: "100%" }}>{children}</Box>
}

export default RootLayout
