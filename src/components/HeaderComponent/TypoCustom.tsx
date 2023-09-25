import React from "react";
import { Typography } from "@mui/material";

export interface TypoCustomProps {
  children: string;
}

const TypoCustom: React.FC<TypoCustomProps> = ({ children }) => {
  return (
    <Typography
      variant="body2"
      sx={{
        color: "#f2c75c",
        backgroundColor: "#333f48",
        display: "flex",
        alignItems: "center", 
        justifyContent: "center",
        height: "36px",
        textTransform: "uppercase",
      }}
    >
      {children}
    </Typography>
  );
};

export default TypoCustom;
