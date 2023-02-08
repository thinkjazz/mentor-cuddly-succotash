import { Card, Grid, IconButton, Stack, SvgIconProps } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H3, H6, } from "components/Typography";
import Add from "icons/Add";
import CheckmarkCircle from "icons/CheckmarkCircle";
import { FC } from "react";
import EditButton from "../EditButton";
import HideButton from "../HideButton";
const listItem = [
  {
    id: 1,
    title: "Руководство и наставление команды QA инженеров",
    amount: 40,
  },
  {
    id: 2,
    title: "Разработка и управление стратегией тестирования продукта",
    amount: 32,
  },
  {
    id: 3,
    title: "Определение процессов и практик тестирования",
    amount: 50,
  },
  {
    id: 4,
    title: "Оценка и улучшение качества работы команды QA",
    amount: 50,
    complete: true,
  },
  {
    id: 5,
    title: "Планирование и проведение тестирования программного обеспечения",
    amount: 40,
  },
  {
    id: 6,
    title: "Анализ и отчетность об ошибках и дефектах",
    amount: 32,
  },
];

const Skills: FC = () => {
  return (
    <Card sx={{ padding: 4 }}>
      <FlexBetween mb={3}>
        <H3>Скиллы</H3>
        <HideButton/>
        <EditButton />

      </FlexBetween>

      <Grid container spacing={2}>
        {listItem.map((item) => (
          <Grid item lg={6} sm={6} xs={12} key={item.id}>
            <ListItem
              Icon={Add}
              title={item.title}
              subTitle={item.amount}
              complete={item.complete}
            />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default Skills;

// ----------------------------------------------------
type ListItemProps = {
  title: string;
  subTitle: number;
  complete?: boolean;
  Icon: (props: SvgIconProps<"svg", {}>) => JSX.Element;
};
// ----------------------------------------------------

function ListItem({ title, subTitle, Icon, complete }: ListItemProps) {
  const bgColor = "action.hover";
  return (
    <Stack
      direction="row"
      alignItems="center"
      width="100%"
      height="100%"
      spacing={1}
    >
      <IconButton
        sx={{
          border: "2px solid",
          borderRadius: "25%",
          borderColor: complete ? "primary.main" : "divider",
          backgroundColor: complete ? "primary.main" : "transparent",
        }}
      >
        {complete ? (
          <CheckmarkCircle sx={{ color: "white", fontSize: 18 }} />
        ) : (
          <Icon sx={{ color: "text.primary", fontSize: 18 }} />
        )}
      </IconButton>

      <FlexBox
        px={2}
        width="100%"
        height="100%"
        borderRadius="4px"
        alignItems="center"
        bgcolor={complete ? "primary.main" : bgColor}
      >
        <H6 fontSize={11} color={complete ? "white" : "text.primary"}>
          {title}

        </H6>
      </FlexBox>
    </Stack>
  );
}
