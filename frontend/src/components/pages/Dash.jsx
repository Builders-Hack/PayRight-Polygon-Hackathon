import { useState } from "react";
import { Box, Drawer } from "@mui/material";
import SideMenu from "components/utilities/SideMenu";
import MainRoutes from "components/Routes/Routes";
import Header from "components/dashboard/Header";
import { useEtherum } from "components/hooks/useEtherum";

const Dash = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { loading } = useEtherum();

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawerWidth = 200;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  if (loading) return <h2>Loading...</h2>;
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { md: "280px" }, flexShrink: { md: 0 } }}
        aria-label="sidebar_menu"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          elevation={0}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            "& .MuiBackdrop-root": {
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <SideMenu
            drawerWidth={drawerWidth}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Drawer>
        <Drawer
          variant="permanent"
          elevation={0}
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <SideMenu drawerWidth={drawerWidth} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flex: 1,
          p: 3,
          width: { xs: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Header
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
        />
        <MainRoutes />
      </Box>
      {/* </ScrollToView> */}
    </Box>
  );
};

export default Dash;
