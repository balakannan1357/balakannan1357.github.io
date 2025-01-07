import { Box, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ mt: 5, p: 3 }}>
      <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
        Contact Me
      </Typography>
      <form>
        <TextField label="Your Name" fullWidth margin="normal" />
        <TextField label="Your Email" fullWidth margin="normal" />
        <TextField
          label="Your Message"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Send Message
        </Button>
      </form>
    </Box>
  );
}
