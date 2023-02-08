import { Card, Chip, Stack, styled } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import { H3 } from "components/Typography";
import { FC } from "react";
import EditButton from "../EditButton";
import HideButton from "../HideButton";

const StyledChip = styled(Chip)(({ theme }) => ({
  fontSize: 12,
  borderRadius: 4,
  marginRight: 16,
  fontWeight: 500,
  marginBottom: 16,
  backgroundColor: theme.palette.action.hover,
}));

const TechStack: FC = () => {
  return (
    <Card sx={{ padding: 4 }}>

      <FlexBetween mb={3}>
        <H3>Технологический стек</H3>
        <HideButton/>
        <EditButton />
      </FlexBetween>

      <Stack direction="row" flexWrap="wrap">
        <StyledChip label="Selenium" />
        <StyledChip label="TestNG" />
        <StyledChip label="JUnit" />
        <StyledChip label="JIRA" />
        <StyledChip label="Bugzilla" />
        <StyledChip label="Jenkins" />
        <StyledChip label="TravisCI" />
        <StyledChip label="CircleCI" />
        <StyledChip label="Java" />
        <StyledChip label="Python" />
        <StyledChip label="SQL" />
        <StyledChip label="Oracle" />

      </Stack>
    </Card>
  );
};

export default TechStack;
