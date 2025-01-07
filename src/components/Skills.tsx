import { Box, Typography, Grid, Paper } from "@mui/material";

const skills = {
  Languages: ["C#", "C++", "JavaScript", "TypeScript", "Python"],
  Databases: ["SQL", "MongoDB", "Redis"],
  Frameworks: [".NET", "Node.js", "Express.js", "Angular", "React"],
  Tools: ["Git", "Docker", "Azure", "Bootstrap", "Material UI"],
  Additional: ["Agile", "Problem Solving", "Organizational"],
};

export default function Skills() {
  return (
    <Box sx={{ mt: 5, p: 3 }}>
      <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {Object.entries(skills).map(([category, skillList]) => (
          <Grid item xs={12} sm={6} md={4} key={category}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {category}
              </Typography>
              <ul>
                {skillList.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
