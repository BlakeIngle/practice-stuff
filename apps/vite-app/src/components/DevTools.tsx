import { Stack } from "@mui/material"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import KitchenSinkDevTools from "@/components/kitchenSink/KitchenSinkDevTools"

function DevTools() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        p: 1,
        position: "fixed",
        bottom: 0,
        right: 0,
      }}
    >
      <KitchenSinkDevTools />
      <ReactQueryDevtools
        initialIsOpen={false}
        toggleButtonProps={{
          style: {
            position: "static",
            margin: 0, // fixes spacing
          },
        }}
      />
    </Stack>
  )
}

export default DevTools
