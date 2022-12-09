import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { List, ListItemText, ListItemButton, Grid } from "@mui/material";
import { useDisconnect } from "wagmi";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const { disconnect } = useDisconnect();
  const [selectedMenu, setSelectedMenu] = useState(1);

  const useStyles = makeStyles((theme) => ({
    aside: {
      width: "280px",
      background: "#fff",
      paddingLeft: "2em",
      paddingRight: "2em",
      paddingTop: "1em",
      minHeight: "100vh",
      height: "100%",
      position: "fixed",
      overflow: "hidden",
      zIndex: theme.zIndex.appBar + 1,

      "& .MuiListItemButton-root": {
        display: "flex",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "0.5em",
        padding: "10px 14px",

        "&:hover": {
          background: theme.palette.common.lightBlue,

          "& .MuiTypography-root": {
            color: "#0e0e4e",
          },
        },
      },

      "& .MuiListItemIcon-root": {
        display: "flex",
        alignItems: "center",
        minWidth: 22,
      },

      "& .MuiTypography-root": {
        fontWeight: 400,
        fontSize: "2rem",
        lineHeight: "20px",
        color: "#0e0e4e",
      },

      "& .MuiListItemButton-root.Mui-selected": {
        backgroundColor: theme.palette.common.lightBlue,
        color: theme.palette.common.blue,

        "& .MuiSvgIcon-root": {
          stroke: "#3E5EA9",
          fill: "transparent",
        },

        "&:hover": {
          backgroundColor: theme.palette.common.lightRed,
        },

        "& .MuiListItemIcon-root": {
          color: theme.palette.common.red,
        },

        "& .MuiTypography-root": {
          color: "#0e0e4e",
          fontWeight: 600,
        },
      },

      "&::-webkit-scrollbar": {
        width: ".85rem",
      },

      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 1rem rgba(0, 0, 0, 0.2)",
      },

      "&::-webkit-scrollbar-thumb": {
        borderRadius: ".5rem",
        background: theme.palette.common.lightGrey,
      },
    },
    logoWrapper: {
      paddingTop: "0.2rem",
      paddingBottom: "0.5em",
      paddingLeft: "1em",
    },
    logout: {
      "&.MuiListItemButton-root": {
        marginTop: "5rem",

        "& .MuiTypography-root": {
          color: "#ED3237 !important",
        },
      },
    },
  }));
  const classes = useStyles();

  const menu = [
    {
      name: "Home",
      href: "/home",
      id: 1,
    },
    {
      name: "Add Invoice",
      href: "/add",
      id: 2,
    },
    {
      name: "Withdraw",
      href: "/withdraw",
      id: 3,
    },
    {
      name: "Deposit",
      href: "/deposit",
      id: 4,
    },
  ];

  return (
    <Grid
      className={classes.aside}
      sx={{
        borderRight: "1px solid rgba(229, 229, 229, 0.5)",
      }}
    >
      <List sx={{ height: "100%", pt: 5 }}>
        {menu.map((menu) => {
          return (
            <ListItemButton
              disableRipple
              key={menu.id}
              onClick={() => setSelectedMenu(menu.id)}
              selected={selectedMenu === menu.id}
              component={Link}
              to={`/dashboard${menu.href}`}
            >
              <ListItemText sx={{ fontSize: "4rem" }}>{menu.name}</ListItemText>
            </ListItemButton>
          );
        })}
        <ListItemButton
          disableRipple
          onClick={() => {
            setSelectedMenu(5);
            disconnect();
          }}
          selected={selectedMenu === 5}
        >
          <ListItemText>{"Logout"}</ListItemText>
        </ListItemButton>
      </List>
    </Grid>
  );
};

SideMenu.propTypes = {
  drawerWidth: PropTypes.number,
  handleDrawerToggle: PropTypes.func,
};

export default SideMenu;
