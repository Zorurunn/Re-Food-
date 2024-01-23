"use client";
import { FaCode } from "react-icons/fa6";
import { Button, Stack, Typography } from "@mui/material";
type CustomButtonProps = {
  title: string;
  width: string;
  textSize: string;
};

export const Header = () => {
  return (
    <Stack direction={"row"} gap={2}>
      <Stack justifyContent="center">
        <FaCode />
      </Stack>
      <Stack direction={"row"}>
        <Typography>НҮҮР</Typography>
        <Typography>ХООЛНЫ ЦЭС</Typography>
        <Typography>ХҮРГЭЛТИЙН БҮС</Typography>
      </Stack>
    </Stack>
  );
};
