import { AppBar, Box, Container, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <AppBar
      component="footer"
      position="static"
      sx={{
        padding: 2,
        backgroundColor: "rgb(192,192,192)",
        marginTop: "auto",
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption">©2024 NKC-UG</Typography>
        </Box>
      </Container>
    </AppBar>
  );
};
