import CloseIcon from "@mui/icons-material/Close"
import {
  AppBar,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material"
import { TransitionProps } from "@mui/material/transitions"
import { forwardRef } from "react"

import { DialogProps } from "@/components/dialogs"
import KitchenSinkContent from "@/components/kitchenSink/KitchenSinkContent"

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
    />
  )
})

interface KitchenSinkDialogProps extends DialogProps {}

function KitchenSinkDialog({ isOpen, onClose }: KitchenSinkDialogProps) {
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      fullScreen
      open={isOpen}
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
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <KitchenSinkContent />
      </DialogContent>
    </Dialog>
  )
}

export default KitchenSinkDialog
