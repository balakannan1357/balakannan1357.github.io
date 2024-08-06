import Box from "@mui/material/Box";
import "./App.css";
import DrawerAppBar from "./components/AppBar";
import Home from "./components/Home";

function App() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, rgba(30,38,46,1) 0%, rgba(48,52,63,1) 83%)",
      }}
    >
      <DrawerAppBar />
      <Home />
    </Box>
  );
}

export default App;
