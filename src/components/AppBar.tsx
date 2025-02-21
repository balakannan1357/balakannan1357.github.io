import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";

const drawerWidth = 200;
const navItems = [
  { label: "Home", icon: "fa-solid fa-house", href: "#Home" },
  { label: "About", icon: "fa-solid fa-user", href: "#About" },
  { label: "Blogs", icon: "fa-solid fa-pen-nib", href: "#Blogs" },
  {
    label: "Resume",
    icon: "fa-solid fa-file",
    href: "https://drive.google.com/file/d/12VNqT49RAt1ez25eovmXg7r0PxKAkdZk/view?usp=sharing",
  },
  { label: "Contact", icon: "fa-solid fa-envelope", href: "#Contact" },
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Bk.
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              sx={{ textAlign: "center" }}
              target={item.label === "Resume" ? "_blank" : "_self"}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const theme = createTheme({
    typography: {
      fontFamily: "system-ui",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "#ffffff00",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          paddingInline: "3em",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <i className="fa-solid fa-bars"></i>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" }, color: "#60ccc2" }}
          >
            Bk.
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                href={item.href}
                key={item.label}
                sx={{ color: "#60ccc2", fontSize: "0.9em" }}
                target={item.label === "Resume" ? "_blank" : "_self"}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar id="back-to-top-anchor" />
      <ScrollToTop querySelector="#back-to-top-anchor" />
    </ThemeProvider>
  );
}
