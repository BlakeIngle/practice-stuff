import AddIcon from "@mui/icons-material/Add"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import AlarmIcon from "@mui/icons-material/Alarm"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import FavoriteIcon from "@mui/icons-material/Favorite"
import MenuIcon from "@mui/icons-material/Menu"
import NavigationIcon from "@mui/icons-material/Navigation"
import ShareIcon from "@mui/icons-material/Share"
import {
  Alert,
  AppBar,
  Box,
  BoxProps,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  LinearProgress,
  MenuItem,
  PaletteColor,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material"
import { Variant } from "@mui/material/styles/createTypography"
import { camelize } from "inflection"
import { useState } from "react"

import TabPanel from "./TabPanel"

const ColorBox = ({ sx, ...props }: BoxProps) => (
  <Box
    sx={{
      height: 120,
      width: 120,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      p: 2,
      ...sx,
    }}
    {...props}
  />
)

const ColorBoxes = ({ name }: { name: string }) => {
  const theme = useTheme()
  const colorName = camelize(name.replace(" ", "_"), true)
  const themeColorPalette = theme?.palette?.[
    colorName as keyof typeof theme.palette
  ] as PaletteColor

  return (
    <Stack
      direction="row"
      spacing={2}
    >
      <ColorBox
        sx={{
          backgroundColor: themeColorPalette?.light,
        }}
      >
        {name} Light ({themeColorPalette?.light})
      </ColorBox>
      <ColorBox
        sx={{
          backgroundColor: themeColorPalette?.main,
        }}
      >
        {name} Main ({themeColorPalette?.main})
      </ColorBox>
      <ColorBox
        sx={{
          backgroundColor: themeColorPalette?.dark,
        }}
      >
        {name} Dark ({themeColorPalette?.dark})
      </ColorBox>
    </Stack>
  )
}

const MuiComponents = () => {
  const [tabValue, setTabValue] = useState(0)

  const theme = useTheme()

  const getCalculatedFontSize = (variant: Variant) => {
    const themeFontSize = theme.typography?.[variant]?.fontSize + ""
    if (themeFontSize) {
      try {
        const themeFontSizeAsNumber = Number(themeFontSize.replace("rem", ""))
        return `${themeFontSizeAsNumber * 16}px` // base html font size
      } catch (e) {
        return "none"
      }
    }
    return "none"
  }

  /* radio logic */
  const [radioValue, setRadioValue] = useState("")

  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogWithHeaderOpen, setDialogWithHeaderOpen] = useState(false)

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const handleOpenDialog = () => {
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  return (
    <>
      {/* BUTTONS */}
      <Box marginBottom={5}>
        <Typography variant="h2">Colors</Typography>
        <Divider />
        <Stack
          spacing={2}
          direction="column"
          sx={{
            marginBottom: 2,
            paddingTop: 1,
          }}
        >
          <ColorBoxes name="Primary" />
          <ColorBoxes name="Secondary" />
        </Stack>
        <Typography variant="h2">Alerts</Typography>
        <Divider />
        <Stack
          spacing={2}
          direction="column"
          sx={{
            marginBottom: 2,
            paddingTop: 1,
          }}
        >
          <Alert
            severity="info"
            variant="filled"
          >
            Info Alert
          </Alert>
          <Alert
            severity="warning"
            variant="filled"
          >
            Warning Alert
          </Alert>
          <Alert
            severity="error"
            variant="filled"
          >
            Error Alert
          </Alert>
          <Alert
            severity="success"
            variant="filled"
          >
            Success Alert
          </Alert>
        </Stack>
        <Typography variant="h2">Buttons</Typography>
        <Divider />
        <Typography variant="h4">Contained</Typography>
        <Stack spacing={1}>
          <Stack
            spacing={2}
            direction="row"
            sx={{
              marginBottom: 2,
            }}
          >
            <Button variant="contained">Default</Button>
            <Button
              variant="contained"
              disabled
            >
              Default
            </Button>
            <Button
              variant="contained"
              color="primary"
            >
              Primary
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled
            >
              Primary
            </Button>
            <Button
              variant="contained"
              color="secondary"
            >
              Secondary
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disabled
            >
              Secondary
            </Button>
            <Button
              variant="contained"
              href="#contained-buttons"
            >
              Link
            </Button>
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            sx={{
              marginBottom: 2,
            }}
          >
            <Button
              variant="contained"
              color="success"
            >
              Success
            </Button>
            <Button
              variant="contained"
              color="success"
              disabled
            >
              Success
            </Button>
            <Button
              variant="contained"
              color="warning"
            >
              Warning
            </Button>
            <Button
              variant="contained"
              color="warning"
              disabled
            >
              Warning
            </Button>
            <Button
              variant="contained"
              color="error"
            >
              Error
            </Button>
            <Button
              variant="contained"
              color="error"
              disabled
            >
              Error
            </Button>
          </Stack>
        </Stack>
        <Typography variant="h4">Text</Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            marginBottom: 2,
          }}
        >
          <Button>Default</Button>
          <Button disabled>Default</Button>
          <Button color="primary">Primary</Button>
          <Button
            color="primary"
            disabled
          >
            Primary
          </Button>
          <Button color="secondary">Secondary</Button>
          <Button
            color="secondary"
            disabled
          >
            Secondary
          </Button>
          <Button href="#text-buttons">Link</Button>
        </Stack>
        <Typography variant="h4">Outlined</Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            marginBottom: 2,
          }}
        >
          <Button variant="outlined">Default</Button>
          <Button
            variant="outlined"
            disabled
          >
            Default
          </Button>
          <Button
            variant="outlined"
            color="primary"
          >
            Primary
          </Button>
          <Button
            variant="outlined"
            color="primary"
            disabled
          >
            Primary
          </Button>
          <Button
            variant="outlined"
            color="secondary"
          >
            Secondary
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            disabled
          >
            Secondary
          </Button>
          <Button
            variant="outlined"
            href="#outlined-buttons"
          >
            Link
          </Button>
        </Stack>
        <Typography variant="h4">Sizes</Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            marginBottom: 2,
          }}
        >
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            marginBottom: 2,
          }}
        >
          <Button
            variant="outlined"
            size="small"
            color="primary"
          >
            Small
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
          >
            Medium
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
          >
            Large
          </Button>
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            marginBottom: 2,
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="primary"
          >
            Small
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="primary"
          >
            Medium
          </Button>
          <Button
            variant="contained"
            size="large"
            color="primary"
          >
            Large
          </Button>
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            marginBottom: 2,
          }}
        >
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            disabled
            color="primary"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="add an alarm"
          >
            <AlarmIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            marginBottom: 6,
          }}
        >
          <Fab aria-label="add">
            <AddIcon />
          </Fab>
          <Fab
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
          <Fab
            color="secondary"
            aria-label="edit"
          >
            <EditIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon />
            Navigate
          </Fab>
          <Fab
            disabled
            aria-label="like"
          >
            <FavoriteIcon />
          </Fab>
        </Stack>
        <Typography variant="h2">Chips</Typography>
        <Divider />
        <Stack
          direction="row"
          spacing={1}
          mb={4}
          mt={2}
        >
          <Chip
            label="SSI"
            variant="outlined"
          />
          <Chip
            label="DIB"
            color="warning"
          />
          <Chip
            label="33-68"
            color="success"
          />
        </Stack>
        <Typography variant="h2">Typography</Typography>
        <Divider />
        <Box>
          <Typography>
            700 = Bold | 600 = Semi-Bold | 500 = Medium | 400 = Regular
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
          >
            h1. Heading ({getCalculatedFontSize("h2")})(
            {theme.typography["h2"].fontWeight})
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
          >
            h2. Heading ({getCalculatedFontSize("h2")})(
            {theme.typography["h2"].fontWeight})
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
          >
            h3. Heading ({getCalculatedFontSize("h3")})(
            {theme.typography["h3"].fontWeight})
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
          >
            h4. Heading ({getCalculatedFontSize("h4")})(
            {theme.typography["h4"].fontWeight})
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
          >
            h5. Heading ({getCalculatedFontSize("h5")})(
            {theme.typography["h5"].fontWeight})
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
          >
            h6. Heading ({getCalculatedFontSize("h6")})(
            {theme.typography["h6"].fontWeight})
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
          >
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur ({getCalculatedFontSize("subtitle1")})(
            {theme.typography["subtitle1"].fontWeight})
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
          >
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur ({getCalculatedFontSize("subtitle2")})(
            {theme.typography["subtitle2"].fontWeight})
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
          >
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam. (
            {getCalculatedFontSize("body1")})(
            {theme.typography["body1"].fontWeight})
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
          >
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam. (
            {getCalculatedFontSize("body2")})(
            {theme.typography["body2"].fontWeight})
          </Typography>
          <Typography
            variant="button"
            display="block"
            gutterBottom
          >
            button text ({getCalculatedFontSize("button")})(
            {theme.typography["button"].fontWeight})
          </Typography>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
          >
            caption text ({getCalculatedFontSize("caption")})(
            {theme.typography["caption"].fontWeight})
          </Typography>
          <Typography
            variant="overline"
            display="block"
            gutterBottom
          >
            overline text ({getCalculatedFontSize("overline")})(
            {theme.typography["overline"].fontWeight})
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2">Elements</Typography>
          <Divider
            sx={{
              marginBottom: 2,
            }}
          />
          <Typography
            variant="h4"
            sx={{ marginBottom: 1 }}
          >
            AppBar
          </Typography>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Typography
            variant="h4"
            sx={{ marginTop: 1, marginBottom: 1 }}
          >
            Card
          </Typography>
          <Box
            marginBottom={2}
            maxWidth={345}
          >
            <Card sx={{ mb: 2 }}>
              <CardHeader title="Card Header" />
              <CardContent>
                <Typography variant="body1">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="show more">
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
          <Box>
            <Typography variant="h4">Tabs</Typography>
            <Box
              sx={{
                width: 320,
              }}
            >
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="simple tabs example"
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
            </Box>
            <TabPanel
              value={tabValue}
              index={0}
            >
              Item One
            </TabPanel>
            <TabPanel
              value={tabValue}
              index={1}
            >
              Item Two
            </TabPanel>
            <TabPanel
              value={tabValue}
              index={2}
            >
              Item Three
            </TabPanel>
          </Box>
          <Box>
            <Typography variant="h4">Progress</Typography>
            <CircularProgress />
            <CircularProgress color="secondary" />
            <LinearProgress style={{ marginBottom: 8 }} />
            <LinearProgress color="secondary" />
          </Box>
          <Box>
            <Typography variant="h4">Dialog</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenDialog}
            >
              Open Dialog
            </Button>
            <Dialog
              onClose={handleCloseDialog}
              aria-labelledby="simple-dialog-title"
              open={dialogOpen}
            >
              <DialogTitle id="simple-dialog-title">Dialog title</DialogTitle>
              <DialogContent>
                <Typography>Dialog content</Typography>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCloseDialog}
                >
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setDialogWithHeaderOpen(true)}
            >
              Open Dialog (with Header)
            </Button>
            <Dialog
              onClose={() => setDialogWithHeaderOpen(false)}
              aria-labelledby="simple-dialog-title"
              open={dialogWithHeaderOpen}
            >
              <DialogTitle color="primary">Dialog Title</DialogTitle>
              <DialogContent>
                <Typography>Dialog Content</Typography>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setDialogWithHeaderOpen(false)}
                >
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
        <Box>
          <Typography variant="h2">Form Elements</Typography>
          <Divider />
          <Grid container>
            <Grid
              item
              sm={6}
            >
              <Typography variant="h4">CheckBoxes</Typography>
              <Checkbox defaultChecked />
              <Checkbox
                defaultChecked
                color="primary"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    name="checkedB"
                  />
                }
                label="Primary"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    color="secondary"
                    name="checkedA"
                  />
                }
                label="Secondary"
              />
            </Grid>
            <Grid
              item
              sm={6}
            >
              <Typography variant="h4">Radio</Typography>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={radioValue}
                  onChange={(_e, value) => setRadioValue(value)}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="(Disabled option)"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Box>
            <Typography variant="h4">Select</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            maxWidth="sm"
          >
            <Typography
              variant="h4"
              sx={{ marginBottom: 2 }}
            >
              TextField
            </Typography>
            <Box
              marginBottom={1}
              width="100%"
            >
              <TextField
                id="standard-basic"
                label="Standard"
                fullWidth
                InputProps={{
                  size: "medium",
                }}
                // focused
              />
              <TextField
                id="standard-basic"
                label="Standard (small)"
                fullWidth
                size="small"
                // focused
              />
            </Box>
            <Box
              marginBottom={1}
              width="100%"
            >
              <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                fullWidth
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default MuiComponents
