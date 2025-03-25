import React, { useState } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EmailIcon from '@mui/icons-material/Email'; // Example MUI icon
import emailjs from "@emailjs/browser";

const useStyles = makeStyles((theme) => ({
  contactSection: {
    padding: theme.spacing(4, 0),
  },
  form: {
    marginTop: theme.spacing(2),
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
      width: '100%',
    },
  },
}));

function Contact() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bowd4lr", // Replace with your EmailJS Service ID
        "template_cmq73io", // Replace with your EmailJS Template ID
        formData,
        "hgeOw9fI02ezU58uO" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Try again.");
        }
      );
      }
  return (
    <div className={classes.contactSection} id="contact">
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" paragraph>
        Feel free to reach out to me via email or through the form below.
      </Typography>
      
      <Typography variant="body1" color="primary" sx={{ display: "flex", mb: 1 }}>
        <EmailIcon sx={{ mr: 0.5 }} /> sethminaudana@gmail.com
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField label="Name" variant="outlined" onChange={handleChange} name="name"
          value={formData.name}  required />
        <TextField label="Email" variant="outlined" type="email"  onChange={handleChange} name="email"
          value={formData.email} required />
        <TextField label="Message" variant="outlined" multiline rows={4}  onChange={handleChange} name="message"
          value={formData.message} required/>
        <Button variant="contained" color="secondary" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
}

export default Contact;