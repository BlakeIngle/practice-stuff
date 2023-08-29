import CloseIcon from "@mui/icons-material/Close"
import KitchenIcon from "@mui/icons-material/Kitchen"
import {
  AppBar,
  Box,
  Container,
  Dialog,
  DialogContent,
  Fab,
  IconButton,
  Slide,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material"
import { TransitionProps } from "@mui/material/transitions"
import { forwardRef, ReactElement, Ref, SyntheticEvent, useState } from "react"

import CustomComponents from "./CustomComponents"
import MuiComponents from "./MuiComponents"
import TabPanel from "./TabPanel"

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement
  },
  ref: Ref<unknown>
) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
    />
  )
})

export const KitchenSink = () => {
  /* Main Page Tabs Logic */
  const [mainPageTabValue, setMainPageTabValue] = useState(0)
  const handleChangeMainPageTab = (
    _event: SyntheticEvent,
    newValue: number
  ) => {
    setMainPageTabValue(newValue)
  }

  return (
    <Container sx={{ pt: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={mainPageTabValue}
          onChange={handleChangeMainPageTab}
        >
          <Tab label="Themed MUI Components" />
          <Tab label="Custom Components" />
        </Tabs>
      </Box>
      <TabPanel
        value={mainPageTabValue}
        index={0}
      >
        <MuiComponents />
      </TabPanel>
      <TabPanel
        value={mainPageTabValue}
        index={1}
      >
        <CustomComponents />
      </TabPanel>
    </Container>
  )
}

const KitchenSinkDialog = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <AppBar
            position="fixed"
            color="default"
          >
            <Toolbar
              variant="dense"
              sx={{ justifyContent: "space-between" }}
            >
              <Typography>Kitchen Sink</Typography>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <KitchenSink />
        </DialogContent>
      </Dialog>
      <Fab
        onClick={() => setOpen(true)}
        size="medium"
        aria-label="add"
        sx={{
          backgroundColor: "#00cade",
          backgroundImage:
            "linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%)",
          color: "#fff",
          position: "fixed",
          bottom: (theme) =>
            `calc(${theme.spacing(1)} + ${
              process.env.NEXT_PUBLIC_SHOW_QUERY_DEVTOOLS === "true"
                ? "52px"
                : "0px"
            })`,
          right: (theme) => theme.spacing(1),
        }}
      >
        <KitchenIcon />
      </Fab>
    </>
  )
}

export default KitchenSinkDialog
