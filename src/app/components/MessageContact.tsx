"use client";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance"; // Import Axios instance
import { toast } from "sonner";

interface MessageContactProps {
  fadeIn: Variants;
}

export default function MessageContact({ fadeIn }: MessageContactProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post("/contact", formData); // Using axiosInstance
      setFormData({ name: "", email: "", message: "" });
      toast.success("Email sent successfully!");
      console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid item xs={12} md={7}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
          Send a Message
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={1}>
            <TextField
              label="Your Name"
              variant="outlined"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              name="email"
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Message"
              variant="outlined"
              name="message"
              fullWidth
              required
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Stack>
        </form>
      </motion.div>
    </Grid>
  );
}
