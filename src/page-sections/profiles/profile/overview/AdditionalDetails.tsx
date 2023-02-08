import { Card, Stack, SvgIconProps, useTheme } from "@mui/material";
import { alpha, Box } from "@mui/system";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5, H6, Tiny } from "components/Typography";
import BriefcaseOutlined from "icons/BriefcaseOutlined";
import DateRange from "icons/DateRange";
import Education from "icons/Education";
import EmailOutlined from "icons/EmailOutlined";
import Globe from "icons/Globe";
import UserOutlined from "icons/UserOutlined";
import { FC } from "react";
import EditButton from "../EditButton";

const AdditionalDetails: FC = () => {
  const theme = useTheme();

  return (
    <Card sx={{ padding: 4 }}>
      <FlexBetween>
        <H5>Информация</H5>
        <EditButton />
      </FlexBetween>

      <Stack mt={3} spacing={2}>
        <ListItem
          title="Email"
          subTitle="test@mgail.com"
          Icon={EmailOutlined}
          color={theme.palette.primary.main}
        />

        <ListItem
          title="Язык"
          subTitle="English, Русский"
          Icon={Globe}
          color={theme.palette.info.main}
        />

        <ListItem
          title="Псевдоним"
          subTitle="Zombie"
          Icon={UserOutlined}
          color={theme.palette.warning.main}
        />

        <ListItem
          title="На сайте"
          subTitle="15 Сентября, 2021"
          Icon={DateRange}
          color={theme.palette.success.main}
        />


        <ListItem
          title="Образование"
          subTitle="Школа Милиции"
          Icon={Education}
          color={theme.palette.secondary.main}
        />
      </Stack>
    </Card>
  );
};

export default AdditionalDetails;

// ----------------------------------------------------
type ListItemProps = {
  color: string;
  title: string;
  subTitle: string;
  Icon: (props: SvgIconProps<"svg", {}>) => JSX.Element;
};
// ----------------------------------------------------

function ListItem({ title, subTitle, Icon, color }: ListItemProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1.5}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 30,
          height: 30,
          borderRadius: "4px",
          backgroundColor: alpha(color, 0.2),
        }}
      >
        <Icon sx={{ color }} />
      </Stack>
      <Box>
        <Tiny fontWeight={500}>{title}</Tiny>
        <H6 fontSize={12}>{subTitle}</H6>
      </Box>
    </Stack>
  );
}
