import { makeStyles } from "@mui/styles";
import "@lottiefiles/lottie-player";
import { Avatar, Grid, Typography } from "@mui/material";

import Navbar from "./Navbar";
import Banner from "images/polygon.avif";

const LandingPage = () => {
  const useStyles = makeStyles((theme) => ({
    gridContainer: {
      minHeight: "100%",
      height: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.gridContainer}
      sx={{ p: 0 }}
      justifyContent="center"
    >
      <Navbar />

      <Grid
        item
        container
        gap={2}
        flexWrap="nowrap"
        sx={{ height: "calc(100vh - 80px)", px: 4 }}
      >
        <Grid
          item
          xs={6}
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              lineHeight: 2,
              textAlign: "center",
              mt: 4,
              fontSize: "5rem",
              "&::first-letter": {
                color: "red",
                fontSize: "200%",

                lineHeight: 0,
              },
            }}
          >
            Pay Right with Ease
          </Typography>
          <Typography variant="h4" sx={{ color: "#fff", textAlign: "center" }}>
            Every Employee has legitimate right to be paid accordingly,
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Avatar
            src={Banner}
            variant="square"
            sx={{ br: 0, width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LandingPage;
