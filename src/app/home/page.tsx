"use client";
import { ChangeEvent, useState } from "react";
import { Card, CustomContainer, HeadText } from "@/components ";
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
import { notifyToast } from "@/components /notifyToast";

export default function Home() {
  return (
    <CustomContainer maxWidth="lg">
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <HeadText text={"Нэвтрэх"} size="28px" wieght="700" />
        <Login />
      </Stack>
      <div
        onClick={() => {
          notifyToast({
            message: "✔️dsfsfrefre",
            color: "red",
          });
          // before style
        }}
      >
        click here
      </div>

      {/* Notify("aaa") */}
    </CustomContainer>
  );
}
