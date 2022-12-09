import { shortAccount } from "components/helpers";
import { Grid, Button, Typography } from "@mui/material";
import { useEtherum } from "components/hooks/useEtherum";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [state, setState] = useState("");
  const { address, contract } = useEtherum();
  const [total, setTotal] = useState(0);

  const getEmployeeDetails = async () => {
    try {
      if (address) {
        const data = await contract?.getEmployeeDetails(address);
        setState(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getEmployeeDetails();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await contract?.totalRegisteredEmployee();
      if (data) {
        setTotal(data?.toNumber());
      }
    };
    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
    <Grid item container justifyContent="space-between" alignItems="center">
      <h1>
        Welcome {""} {shortAccount(address)}
      </h1>
      <Button
        sx={{ background: "#fff", p: 2, "&:hover": { background: "#fff" } }}
        component={Link}
        to="/"
      >
        Home
      </Button>
      <Typography
        sx={{
          fontSize: "2rem",
        }}
      >
        {"Approval Status"}
        {"   "} -{" "}
        <span style={{ color: state?.approved === true ? "green" : "red" }}>
          {state?.approved === true ? "Approved" : "Not Approved"}
        </span>
      </Typography>
      <Typography
        sx={{
          fontSize: "2rem",
        }}
      >
        {"Total Employees"}
        {"   "} -{" "}
        <span style={{ color: total > 0 ? "green" : "red" }}>{total}</span>
      </Typography>
    </Grid>
  );
};

export default Header;
