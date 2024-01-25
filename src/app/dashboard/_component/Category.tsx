import { Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Stars";
import { Card, CustomContainer } from "@/components ";

type CategoryProps = {
  title: string;
};
export const Category = (props: CategoryProps) => {
  const { title } = props;
  return (
    <CustomContainer maxWidth="lg">
      <Stack>
        <StarIcon />
      </Stack>
      <Typography>{title}</Typography>
      <Stack
        sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
        width={"100%"}
        gap={2}
      >
        {new Array(4).fill(0).map((_, index) => (
          <Stack>
            <Card
              imgPath="/temporary/morning.jpg"
              title="Өглөөний хоол"
              price="4,800"
              discountPrice="4,800"
              discountPercentage="20"
            />
          </Stack>
        ))}
      </Stack>
    </CustomContainer>
  );
};
