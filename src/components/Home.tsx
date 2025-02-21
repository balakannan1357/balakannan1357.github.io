import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
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
          paddingInline: "5em",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          background: "linear-gradient(135deg, #008080, #74404f)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            minWidth: "30%",
            maxWidth: "40%",
            borderRadius: "8px",
            backgroundColor: "#000",
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
              margin: "0",
              fontSize: "0.9em",
              borderRadius: "0",
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

        <CardMedia
          component="img"
          height="700"
          width="200"
          image={myImage}
          alt="profile picture"
          sx={{
            padding: "1em 1em 0 1em",
            objectFit: "contain",
            maxWidth: "40%",
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
