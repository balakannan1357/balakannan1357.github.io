import { ThemeProvider } from "@emotion/react";
import {
  Box,
  CardMedia,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ReactTyped } from "react-typed";
import myImage from "../assets/bk-bg-removed.png";

export default function Home() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Box
        id="Home"
        sx={{
          position: "relative",
          top: "-4em",
          height: "80vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          px: { xs: "1em", sm: "2em", md: "5em" },
          pt: { xs: "7em", md: "0" },
          background: "linear-gradient(135deg, #008080, #74404f)",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%", lg: "30%" },
            minWidth: { xs: "90vw", sm: "50vw", md: "30vw", lg: "20vw" },
            borderRadius: "8px",
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              backgroundColor: "#2d2d2d",
              color: "#c5c5c5",
              padding: "6px 12px",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              fontFamily: "monospace",
              fontSize: "14px",
              width: "100%",
            }}
          >
            bash
          </Typography>
          <SyntaxHighlighter
            language="bash"
            style={atomDark}
            customStyle={{
              backgroundColor: "#000",
              padding: ".3em .7em",
              margin: 0,
              fontSize: "0.9em",
              width: "100%",
            }}
          >
            {`balakannan@dev:~$ cat profile.txt`}
          </SyntaxHighlighter>

          <Typography
            variant="body2"
            sx={{
              width: "100%",
              color: "#c5c5c5",
              fontFamily: "monospace",
              fontSize: "0.9em",
              padding: ".3em .7em",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <ReactTyped
              strings={[
                "> Full-Stack Developer",
                "> Cloud Enthusiast",
                "> Problem Solver",
              ]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={1000}
              loop
              showCursor
              cursorChar="█"
            />
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={myImage}
            alt="profile picture"
            sx={{
              width: { xs: "70%", md: "100%" },
              maxHeight: { xs: "50vh", md: "70vh" },
              objectFit: "contain",
              objectPosition: "bottom",
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
