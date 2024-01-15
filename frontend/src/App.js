import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

// Define the theme for the entire application
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* {/ Use BrowserRouter to enable routing in the application /} */}
      <BrowserRouter>
        <Routes>
          {/* {/ Define routes for different pages /} */}
          <Route path="/" element={<SignUp />} /> {/* Sign Up page */}
          <Route path="/signin" element={<SignIn />} /> {/* Sign In page */}
          <Route path="/note" element={<Notes />} /> {/* Notes page */}
          <Route path="/create" element={<Create />} /> {/* Create page */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
