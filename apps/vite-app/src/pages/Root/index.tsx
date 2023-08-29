import { Container, Typography } from "@mui/material"

const Root = () => {
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1">Hello Vite App!</Typography>
    </Container>
  )
}

export default Root
