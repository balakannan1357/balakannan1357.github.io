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
        sx={{
          paddingInline: "5em",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(90deg, rgba(30,38,46,1) 0%, rgba(48,52,63,1) 83%)",
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
          alt={"alt"}
          title={"titleasdasdsada"}
          sx={{
            padding: "1em 1em 0 1em",
            objectFit: "contain",
            // WebkitFilter: "drop-shadow(1px 1px 1px #000)",
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
