import { Filter } from "@/components /Filter";
import { TopSection } from "./_component/TopSection";
import { Stack } from "@mui/material";
import { CustomContainer } from "@/components ";
import { Category } from "./_component/Category";

export default function Dashboard() {
  return (
    <Stack gap={"120px"}>
      <TopSection />

      <CustomContainer maxWidth="lg">
        <Stack
          sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
          width={"100%"}
          gap={2}
        >
          <Filter
            icon="book"
            title="Хүргэлтийн төлөв хянах"
            description="3ахиалга бэлтгэлийн явцыг хянах"
          />
          <Filter
            icon="time"
            title="Шуурхай хүргэлт"
            description="Захиалга бэлтгэлийн явцыг хянах"
          />
          <Filter
            icon="healthy"
            title="Эрүүл, баталгаат орц"
            description="3ахиалга бэлтгэлийн явцыг хянах"
          />
          <Filter
            icon="book"
            title="Хоолны өргөн сонголт"
            description="3ахиалга бэлтгэлийн явцыг хянах"
          />
        </Stack>
      </CustomContainer>
      <Category title="Хямдралтай" />
    </Stack>
  );
}
