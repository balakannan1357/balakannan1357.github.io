import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const projects = [
  {
    title: "Mask Detection",
    description:
      "Python-based MobileNetV2 model to detect mask usage with 87.3% accuracy.",
    techStack: "Python, MobileNetV2",
  },
  {
    title: "Leaf Classifier",
    description:
      "Classifies healthy and unhealthy leaves with 95.9% accuracy using RF Classifier.",
    techStack: "Random Forest, Python",
  },
  {
    title: "Face Recognition",
    description:
      "Automated face recognition system with 85% accuracy using OpenCV.",
    techStack: "OpenCV, Python",
  },
];

export default function Projects() {
  return (
    <Box sx={{ mt: 5, p: 3 }}>
      <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography color="textSecondary">
                  {project.description}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Tech Stack: {project.techStack}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
