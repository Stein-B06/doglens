"use client";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import clsx from "clsx";

interface CustomButtonProps extends ButtonProps {
  size?: "small" | "medium" | "large";
  bgColor?: string;
}

const StyledButton = styled(Button)<CustomButtonProps>(({ bgColor }) => ({
  background: bgColor || "linear-gradient(90deg, #0000ff 0%, #00ffff 100%)", // Default gradient
  color: "#FEFFFF",
  "&:hover": {
    filter: "brightness(1.1)", // Slightly brighten on hover
  },
}));

const MuiButton: React.FC<CustomButtonProps> = ({
  size = "medium",
  bgColor,
  className,
  ...props
}) => {
  return (
    <StyledButton
      className={clsx(
        "font-bold rounded",
        {
          "text-xs py-1 px-2": size === "small",
          "text-sm py-2 px-4": size === "medium",
          "text-lg py-3 px-6": size === "large",
        },
        className
      )}
      style={{ background: bgColor }} // Ensure bgColor is applied here
      {...props}
    />
  );
};

export default MuiButton;
