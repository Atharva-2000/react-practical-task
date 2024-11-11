import { createTheme, ThemeProvider } from "@mui/material";
import LandingPage from "./pages/LandingPage/LandingPage";


function App() {
  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            xxs: 0,
            xs: 320,
            sm: 769,
            md: 1152,
            lg: 1440,
            xl: 1920,
          },
        },
      })} 
    >
      <div>
        <LandingPage/>
      </div>
    </ThemeProvider>
  );
}

export default App;
