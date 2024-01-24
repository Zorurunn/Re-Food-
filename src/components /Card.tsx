import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { CustomContainer } from ".";

type CardProps = {
  imgPath: string;
  title: string;
  price: string;
  discountPrice?: string | null;
  discountPercentage?: string | null;
};
export const Card = (props: CardProps) => {
  const {
    imgPath,
    price,
    title,
    discountPrice = null,
    discountPercentage = null,
  } = props;
  return (
    <CustomContainer maxWidth="lg">
      <Stack gap={1.7} width={"100%"}>
        <Stack
          position={"relative"}
          paddingTop={"56.25%"}
          border={"1px solid transparent"}
          borderRadius={5}
          overflow={"hidden"}
        >
          <Image
            src={imgPath}
            alt="Breakfast"
            fill
            style={{ objectFit: "cover" }}
          />
          <Stack
            position={"absolute"}
            zIndex={2}
            width={"20%"}
            height={"20%"}
            top={"10%"}
            right={"10%"}
            sx={{
              backgroundColor: "primary.main",
              border: "2px solid white",
              borderRadius: 10,
              display: discountPercentage ? "flex" : "none",
            }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography fontSize={20} fontWeight={600} color={"white"}>
              {discountPercentage}%
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography fontSize={20} fontWeight={600} color="text.primary">
            {title}
          </Typography>
          <Stack direction={"row"} gap={2}>
            <Typography
              fontSize={18}
              fontWeight={800}
              color="primary.main"
              sx={{ display: discountPrice ? "flex" : "none" }}
            >
              {discountPrice}₮
            </Typography>
            <Typography
              fontSize={18}
              fontWeight={800}
              color={discountPrice ? "text.primary" : "primary.main"}
              sx={{ textDecoration: discountPrice ? "line-through" : "none" }}
            >
              {price}₮
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </CustomContainer>
  );
};

{
  /* <Card
imgPath="/temporary/morning.jpg"
title="Өглөөний хоол"
price="4,800"
discountPrice="4,800"
discountPercentage="20"
/> */
}
