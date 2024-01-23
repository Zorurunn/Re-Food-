"use client";
import { Button } from "@mui/material";
type CustomButtonProps = {
  title: string;
  width: string;
  textSize: string;
};

export const CustomButton = (props: CustomButtonProps) => {
  const { title, width, textSize } = props;

  return <Button sx={{ width: width, fontSize: textSize }}>{title}</Button>;
};
