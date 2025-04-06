import { Box } from "@mui/material";
import React, { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

export const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
};
