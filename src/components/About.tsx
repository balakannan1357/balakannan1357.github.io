import { Box, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { funky } from "react-syntax-highlighter/dist/esm/styles/prism";
//nord, atomDark, lucario, gruvboxDark, dracula

export default function About() {
  const yaml = `SoftwareEngineer:
  name: "Balakannan B"
  title: "Junior Software Engineer @ Peninsular Research Operations"
  experience:
    - Implemented Kafka producer & consumer (90% memory usage reduction)
    - Scaled microservices with Redis
    - Integrated Azure Functions (80% response time improvement)
    - Migrated charts to ECharts for performance boost
    - Developed low-code/no-code BPMN workflows with Form.io
    - Built reusable Node.js components (70% less redundant code)
  skills:
    languages: ["C#", "C++", "JavaScript", "TypeScript", "Python"]
    databases: ["SQL", "MongoDB", "Redis"]
    frameworks: [".NET", "Node.js", "Express.js", "Angular", "React"]
    tools: ["Git", "Docker", "Azure", "Bootstrap", "Material UI"]
  interests:
    - "Distributed Systems"
    - "Microservices Architecture"
    - "Cloud Computing"
    - "High-Performance Computing"`;

  return (
    <Box
      id="About"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2em 0",
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
          width: "90%",
          maxWidth: "50vw",
        }}
      >
        about.yaml
      </Typography>
      <Box
        sx={{
          display: "inline-block",
          backgroundColor: "#000",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          paddingInline: "1em",
          width: "90%",
          maxWidth: "50vw",
          boxShadow: "0px 4px 12px 5px rgba(0,0,0,0.3)",
          textAlign: "left",
        }}
      >
        <SyntaxHighlighter
          language="yaml"
          style={funky}
          customStyle={{
            background: "transparent",
            padding: "12px",
            fontSize: "14px",
            borderRadius: "8px",
          }}
        >
          {yaml}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
}
