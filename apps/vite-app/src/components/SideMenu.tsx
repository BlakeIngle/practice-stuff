import AccountBoxIcon from "@mui/icons-material/AccountBox"
import XIcon from "@mui/icons-material/CloseOutlined"
import HomeIcon from "@mui/icons-material/Home"
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Dispatch, ReactNode, SetStateAction } from "react"
import { Link } from "react-router-dom"

interface SideMenuProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function SideMenu({ isOpen, setIsOpen }: SideMenuProps) {
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  function toggleDrawer() {
    setIsOpen((currentValue) => !currentValue)
  }

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          width: smallScreen ? "100%" : "fit-content",
          minWidth: "300px",
          p: 2,
          pb: 5,
        },
      }}
    >
      <Box sx={{ p: 0, mx: 0 }}>
        <IconButton onClick={toggleDrawer}>
          <XIcon />
        </IconButton>
      </Box>

      {/* options */}
      <List sx={{ flexGrow: 1, width: "100%" }}>
        <StyledListItem
          linkTo="/"
          title="Home"
          onClick={toggleDrawer}
        >
          <HomeIcon fontSize="large" />
        </StyledListItem>

        <Divider />
      </List>

      <List>
        <StyledListItem
          linkTo="me"
          title="My Account"
          onClick={toggleDrawer}
        >
          <AccountBoxIcon fontSize="large" />
        </StyledListItem>
      </List>
      <Divider />
    </Drawer>
  )
}

interface StyledListItemProps {
  title: string
  children: ReactNode
  linkTo: string
  onClick: () => void
}
function StyledListItem({
  title,
  children,
  linkTo,
  onClick,
}: StyledListItemProps) {
  const theme = useTheme()

  return (
    <ListItem
      component={Link}
      to={linkTo}
      sx={{
        px: 0,
        py: 2,
        color: theme.palette.text.secondary,
        "&:hover": {
          color: theme.palette.primary.main,
        },
      }}
    >
      <ListItemButton
        disableRipple
        sx={{
          p: 0,
          "&:hover": {
            backgroundColor: "initial",
          },
        }}
      >
        <ListItemIcon sx={{ color: "inherit" }}>
          <IconButton
            color="inherit"
            sx={{ width: "100%", backgroundColor: "transparent", p: 0, m: 0 }}
            disableRipple
            onClick={onClick}
          >
            {children}
          </IconButton>
        </ListItemIcon>
        <ListItemText>
          <Typography
            variant="h5"
            color="inherit"
          >
            {title}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  )
}

export default SideMenu
