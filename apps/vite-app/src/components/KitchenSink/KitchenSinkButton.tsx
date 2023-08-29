import KitchenIcon from "@mui/icons-material/Kitchen"
import { Fab } from "@mui/material"
import { useState } from "react"

import KitchenSinkDialog from "@/components/kitchenSink/KitchenSinkDialog"

function KitchenSinkButton() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

  function openDialog() {
    setIsDialogOpen(true)
  }

  function closeDialog() {
    setIsDialogOpen(false)
  }

  function handleButtonClicked() {
    openDialog()
  }

  return (
    <>
      <Fab
        onClick={handleButtonClicked}
        size="medium"
        aria-label="add"
        sx={{
          backgroundColor: "#00cade",
          backgroundImage:
            "linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%)",
          color: "#fff",
        }}
      >
        <KitchenIcon />
      </Fab>
      <KitchenSinkDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
      />
    </>
  )
}

export default KitchenSinkButton
