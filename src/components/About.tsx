import { Typography, Box, Avatar } from "@mui/material";

export default function About() {
  return (
    <Box id="About" sx={{ textAlign: "center", mt: 5 }}>
      <h2>About</h2>
      <Avatar
        alt="Balakannan B"
        src="/path-to-your-image.jpg"
        sx={{ width: 120, height: 120, margin: "auto" }}
      />
      <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
        Balakannan B
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Junior Software Engineer | Full-Stack Developer
      </Typography>
      <Typography sx={{ mt: 2 }}>
        Passionate software engineer with experience in building scalable
        applications and implementing innovative solutions using modern
        technologies. Skilled in Kafka, Azure, and microservices with a
        problem-solving mindset.
      </Typography>
    </Box>
  );
}
