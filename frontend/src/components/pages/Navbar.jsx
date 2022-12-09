import { Grid, AppBar, Toolbar, Container } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { ConnectionButton } from "components/utilities/ConnectButton";
const pages = [
  {
    title: "Register",
    route: "/register",
  },
  {
    title: "Login",
    route: "/dashboard/home",
  },
];

function Navbar() {
  const { isConnected } = useAccount();
  return (
    <AppBar
      position="static"
      component="nav"
      elevation={5}
      sx={{
        background: "inherit",
        px: 4,
        height: "80px",
        justifyContent: "center",

        borderBottom: "1px solid rgba(255,255,255,.3)",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Grid item container>
            <List
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                color: "#fff",
              }}
            >
              <ListItemButton
                sx={{ flexGrow: 0 }}
                disableRipple
                component={Link}
                to="/"
              >
                <ListItemIcon>
                  <AdbIcon
                    sx={{
                      color: "#fff",
                    }}
                  />
                </ListItemIcon>
                <ListItemText sx={{ color: "#fff" }}>Pay-Right</ListItemText>
              </ListItemButton>
              <ListItemButton
                sx={{ flexGrow: 0 }}
                disableRipple
                component={Link}
                to="/about"
              >
                <ListItemText sx={{ color: "#fff", fontSize: "2rem" }}>
                  About
                </ListItemText>
              </ListItemButton>
              {isConnected &&
                pages.map((page) => (
                  <ListItemButton
                    disableRipple
                    sx={{ flexGrow: 0 }}
                    key={page.route}
                    component={Link}
                    to={page.route}
                  >
                    <ListItemText>{page.title}</ListItemText>
                  </ListItemButton>
                ))}
              <ListItemButton
                disableRipple
                sx={{
                  flexGrow: 0,
                  background: "#fff",
                  borderRadius: "40rem",
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              >
                <ConnectionButton />
              </ListItemButton>
            </List>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
