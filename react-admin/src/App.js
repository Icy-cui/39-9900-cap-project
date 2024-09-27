import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import TopBar from "./scenes/global/TopBar";
import MenuBar from "./scenes/global/MenuBar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Calendar from "./scenes/calendar";
import Geography from "./scenes/geography";
import FAQ from "./scenes/faq";

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
              <Route path="/team" element={<Team></Team>}></Route>
              <Route path="/contacts" element={<Contacts></Contacts>}></Route>
              <Route path="/invoices" element={<Invoices></Invoices>}></Route>
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/Bar" element={<Bar />} />
              <Route path="/Pie" element={<Pie />} />
              <Route path="/Line" element={<Line />} />
              <Route path="/calendar" element={<Calendar></Calendar>}></Route>
              <Route path="/Geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
        {/* <SignUp /> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
