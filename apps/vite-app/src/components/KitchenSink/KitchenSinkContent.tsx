import { Box, Container, Tab, Tabs } from "@mui/material"
import { useState } from "react"

import CustomComponents from "@/components/kitchenSink/CustomComponents"
import MuiComponents from "@/components/kitchenSink/MuiComponents"
import TabPanel from "@/components/kitchenSink/TabPanel"

function KitchenSinkContent() {
  /* Main Page Tabs Logic */
  const [mainPageTabValue, setMainPageTabValue] = useState(0)
  const handleChangeMainPageTab = (
    _event: React.SyntheticEvent,
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

export default KitchenSinkContent
