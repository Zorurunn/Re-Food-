"use client";
import { ChangeEvent, useState } from "react";
import { CustomContainer, HeadText, CustomInput } from "@/components ";
import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
} from "@mui/material";
import { Login } from "./_components/Login";

export default function Home() {
  return (
    <CustomContainer maxWidth="lg">
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <HeadText text={"Нэвтрэх"} size="28px" wieght="700" />
        <Login />
      </Stack>
    </CustomContainer>
  );
}
