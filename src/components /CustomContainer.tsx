import { Breakpoint, Container, Typography } from "@mui/material";
import { ReactNode } from "react";

type CustomContainerProps = {
  maxWidth: Breakpoint;
  children: ReactNode;
};
export const CustomContainer = (props: CustomContainerProps) => {
  const { maxWidth, children } = props;
  return <Container maxWidth={`${maxWidth}`}>{children}</Container>;
};
