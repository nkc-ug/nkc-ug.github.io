import { Box, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CodeOfConduct } from "../components/CodeOfConduct";

export const Welcome = () => {
  const headingStyle = { borderBottom: "thick double #32a1ce" };
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <CodeOfConduct />
      <Box id="contact" sx={{ margin: 3 }}>
        <Typography variant="h4" className="heading" sx={headingStyle}>
          加入方法
        </Typography>
        <Typography>NKC-UG運営までご連絡ください。</Typography>
      </Box>
      <Footer />
    </Box>
  );
};
