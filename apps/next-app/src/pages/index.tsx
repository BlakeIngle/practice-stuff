import { Container, Typography } from "@mui/material"

import RootLayout from "@/Layouts/RootLayout"

export default function Page() {
  return (
    <RootLayout>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1">Hello Next.js App!</Typography>
      </Container>
    </RootLayout>
  )
}
