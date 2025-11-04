import * as React from "react";
import { Container, Box, Typography, Link, Stack } from "@mui/material";

export default function AboutUs() {
  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        spacing={4}
        sx={{ mb: 4 }}
      >
        <Link
          href="https://github.com/arash-azad"
          target="_blank"
          underline="none"
          sx={{ flex: 1 }}
        >
          <Box
            sx={{
              bgcolor: "black",
              color: "white",
              p: 6,
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              transition: "0.3s",
              "&:hover": { bgcolor: "grey.800" },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              GitHub
            </Typography>
          </Box>
        </Link>

        <Link
          href="https://t.me/piriash"
          target="_blank"
          underline="none"
          sx={{ flex: 1 }}
        >
          <Box
            sx={{
              bgcolor: "black",
              color: "white",
              p: 6,
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              transition: "0.3s",
              "&:hover": { bgcolor: "grey.800" },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Telegram
            </Typography>
          </Box>
        </Link>
      </Stack>

      <Box sx={{ width: "100%" }}>
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.050283951634!2d51.3760023!3d35.6891975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e014c7c206fcb%3A0x4586ceaf68507a23!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v170—something!5m2!1sen!2sus"
        style={{
          width: "100%",
          height: "400px",
          border: 0,
          borderRadius: "8px",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"/>
     
      </Box>
    </Container>
  );
}
