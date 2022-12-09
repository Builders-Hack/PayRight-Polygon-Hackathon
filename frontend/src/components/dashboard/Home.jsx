import { Grid, Typography } from "@mui/material";
import useAlert from "components/hooks/useAlert";
import { useEtherum } from "components/hooks/useEtherum";
import { useEffect } from "react";
import { useState } from "react";
const Home = () => {
  const [state, setState] = useState("");
  const { displayAlert } = useAlert();
  const { contract, address } = useEtherum();
  const getEmployeeDetails = async () => {
    try {
      if (address) {
        const data = await contract?.getEmployeeDetails(address);
        setState(data);
      }
    } catch (error) {
      console.error(error);
      displayAlert("error", error.message);
    }
  };
  useEffect(() => {
    getEmployeeDetails();
    //eslint-disable-next-line
  }, []);

  const getLevel = (level) => {
    return level === 0
      ? "Beginner"
      : level === 1
      ? "Intermediate"
      : level === 2
      ? "Senior"
      : "Not define";
  };
  return (
    <Grid item container sx={{ py: 2 }}>
      <Grid item container flexDirection="column" gap={2}>
        {state?.name && (
          <Typography variant="h3">
            Name: {state !== "" ? state?.name : "No Name"}
          </Typography>
        )}

        <Typography variant="h3">
          level: {"   "} {state ? getLevel(state?.level) : "No Level"}
        </Typography>

        {state?.post && (
          <Typography variant="h3">
            Post:{state ? state?.post : "No Post"}
          </Typography>
        )}

        <Typography variant="h3">
          Status:
          {state?.status === 0
            ? "Junior"
            : state?.status === 1
            ? "Intermediate"
            : "Senior"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
