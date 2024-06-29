import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import MenuBar from "./scenes/global/MenuBar";
import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team"
// import Invoices from "./scenes/invoices"
// import Contacts from "./scenes/contacts"
// import Form from "./scenes/form"
// import Line from "./scenes/line"
// import Pie from "./scenes/pie"
// import FAQ from "./scenes/faq"
// import Geography from "./scenes/geography"
// import Calender from "./scenes/calender"
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MenuBar></MenuBar>
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/Signin" element={<SignIn />}></Route>
              {/* <Route path="/team" element={<Team></Team>}></Route> */}
              {/* <Route path="/invoices" element={<Invoices></Invoices>}></Route> */}
              {/* <Route path="/contacts" element={<Contacts></Contacts>}></Route> */}
              {/* <Route path="/form" element={<Form></Form>}></Route> */}
              {/* <Route path="/line" element={<Line></Line>}></Route> */}
              {/* <Route path="/pie" element={<Pie></Pie>}></Route> */}
              {/* <Route path="/faq" element={<FAQ></FAQ>}></Route> */}
              {/* <Route path="/geography" element={<Geography></Geography>}></Route> */}
              {/* <Route path="/calender" element={<Calender></Calender>}></Route> */}
            </Routes>
          </main>
        </div>
        {/* <Sidebar/> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
