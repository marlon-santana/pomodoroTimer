import { useTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { TimerContainer } from "./templates/TimerContainer";

function App() {
  const theme = useTheme();

  return (
    <>
      <TimerContainer>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TimerContainer>
    </>
  );
}

export default App;
