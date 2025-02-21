import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function Blogs() {
  const blogs = [
    {
      title: "Unpacking Apache Kafka: The Secret Behind Real-Time Data Mastery",
      url: "https://dev.to/bala_kannan_494d2e93a1157/unpacking-apache-kafka-the-secret-behind-real-time-data-mastery-28gj",
      platform: "Dev.to",
      description:
        "Learn the core concepts of Apache Kafka and how it powers real-time event-driven applications.",
    },
    {
      title: "Effortless Web Scaling: .NET 8 Meets Redis Output Caching",
      url: "https://medium.com/p/f461152d2778",
      platform: "Medium",
      description:
        "Explore Redis output caching in .NET 8 and how it can help you scale your web applications.",
    },
  ];

  return (
    <Box
      id="Blogs"
      sx={{
        p: "5em",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: "monospace",
        }}
      >
        ~/BLOGS
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: "70%", margin: "auto" }}
      >
        {blogs.map((blog, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <TiltedCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function TiltedCard({ blog }: any) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 8;
    const y = ((e.clientY - top) / height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Card
      component={Link}
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        backgroundColor: "#1E1E1E",
        color: "#e0e0e0",
        boxShadow: "0px 4px 12px 5px rgba(0,0,0,0.3)",
        border: "1px solid #00FF00",
        transition: "transform 0.2s ease-out",
        transform: `perspective(500px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontFamily: "monospace", color: "#00FF00" }}
        >
          {blog.title}
        </Typography>
        <Typography
          variant="body2"
          color="#a0a0a0"
          sx={{ fontFamily: "monospace", mb: 2 }}
        >
          {blog.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
