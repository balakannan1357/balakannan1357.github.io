import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

export default function Home() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="home"
        sx={{
          paddingInline: "5em",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(to right, #f8f9fa, #e9ecef, #f8f9fa);",
        }}
      >
        <Typography variant="h4">
          Hello there, I'm Balakannan, a full-stack developer with a passion for
          creating beautiful and functional websites.
        </Typography>
        <CardMedia
          component="img"
          height="700"
          width="200"
          image="/src/assets/bk-bg-removed.png"
          alt={"profile picture"}
          sx={{
            padding: "1em 1em 0 1em",
            objectFit: "contain",
            WebkitFilter: "drop-shadow(5px 5px 5px #fff)",
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
