import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSc_kbgab6P8UyxXcAuxFDl_qCs2XfPeeD02TYRPOm2vSQCkUg";
    const formDataEntries = new URLSearchParams({
      "entry.YOUR_NAME_ENTRY_ID": formData.name,
      "entry.YOUR_EMAIL_ENTRY_ID": formData.email,
      "entry.YOUR_MESSAGE_ENTRY_ID": formData.message,
    });
    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      body: formDataEntries,
    }).then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mb: 5 }}>
      <Paper elevation={3} sx={{ p: 4, mt: 5, borderRadius: 3 }}>
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            name="name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Your Email"
            name="email"
            fullWidth
            margin="normal"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Your Message"
            name="message"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, fontWeight: "bold", borderRadius: 2 }}
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
