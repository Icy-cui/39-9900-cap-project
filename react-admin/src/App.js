import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import TopBar from "./scenes/global/TopBar";
import MenuBar from "./scenes/global/MenuBar";
import Dashboard from "./scenes/dashboard";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MenuBar></MenuBar>
          <main className="content">
            <TopBar></TopBar>
            <Routes>
              <Route path="/" element={<Dashboard></Dashboard>}></Route>
              <Route path="/signup" element={<SignUp></SignUp>}></Route>
              <Route path="/signin" element={<SignIn></SignIn>}></Route>
            </Routes>
          </main>
        </div>
        {/* <SignUp /> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
