import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import { muiTheme } from "components/muiTheme";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage, RegisterPage } from "components/pages";
import { PrivateRoute } from "components/Routes";
import { ThemeProvider } from "@mui/material/styles";
import Dash from "components/pages/Dash";

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                  <Dash />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PrivateRoute>
                  <RegisterPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
