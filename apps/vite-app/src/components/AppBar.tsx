import BurgerIcon from "@mui/icons-material/LunchDiningOutlined"
import SearchIcon from "@mui/icons-material/Search"
import { AppBar as MuiAppBar, Box, IconButton, Toolbar } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import SideMenu from "@/components/SideMenu"

const AppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const { pathname: url } = useLocation()

  function closeDrawer() {
    setIsDrawerOpen(false)
  }

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen)
  }

  useEffect(() => {
    closeDrawer()
  }, [url])

  return (
    <>
      <MuiAppBar color="inherit">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box>
            <IconButton
              onClick={toggleDrawer}
              size="large"
              edge="start"
            >
              <BurgerIcon />
            </IconButton>
          </Box>

          <Box
            sx={{ flexGrow: 1 }}
            textAlign="center"
          >
            Project Logo
          </Box>

          <Box>
            <IconButton
              size="large"
              edge="start"
            >
              <SearchIcon color="secondary" />
            </IconButton>
          </Box>
        </Toolbar>
      </MuiAppBar>
      <SideMenu
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
      />
    </>
  )
}

export default AppBar
