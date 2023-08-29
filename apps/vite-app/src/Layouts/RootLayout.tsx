import { Box, Stack } from "@mui/material"
import { Outlet } from "react-router-dom"

import AppBar from "@/components/AppBar"

const RootLayout = () => {
  return (
    <Stack sx={{ minHeight: "100%" }}>
      <AppBar />
      <Box pt={8}>
        <Outlet />
      </Box>
    </Stack>
  )
}

export default RootLayout
