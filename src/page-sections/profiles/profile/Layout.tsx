import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import { TabList } from "@mui/lab";

import {
  Card,
  IconButton,
  Stack,
  styled,
  SvgIconProps,
  Tab,
} from "@mui/material";

import { Box } from "@mui/system";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";

import { H2, H3, Tiny } from "components/Typography";

import AvatarBadge from "components/avatars/AvatarBadge";
import ApartmentIcon from '@mui/icons-material/Apartment';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PlaceIcon from '@mui/icons-material/Place';

import numeral from "numeral";
import { FC, Fragment, SyntheticEvent } from "react";
import { Outlet } from "react-router-dom";

// styled components
const ContentWrapper = styled(Box)(({ theme }) => ({
  zIndex: 1,
  padding: 10,
  marginTop: 50,
  position: "relative",
}));

const CoverPicWrapper = styled(Box)(() => ({
  top: 0,
  left: 0,
  height: 150,
  width: "100%",
  overflow: "hidden",
  position: "absolute",
  backgroundColor: "#43ccac",
}));

const StyledFlexBetween = styled(FlexBetween)(() => ({
  margin: "auto",
  flexWrap: "wrap",
}));

const StyledTabList = styled(TabList)(({ theme }) => ({
  paddingLeft: 26,
  paddingRight: 26,
  [theme.breakpoints.up("sm")]: {
    "& .MuiTabs-flexContainer": { justifyContent: "center" },

  },
}));

// -------------------------------------------------
type LayoutProps = {
  handleTabList: (_: SyntheticEvent, value: string) => void;
};
// -------------------------------------------------

const Layout: FC<LayoutProps> = ({ children, handleTabList }) => {
  return (
    <Fragment>
      <Card sx={{ position: "relative" }}>
        <CoverPicWrapper>
          <img
            width="100%"
            height="100%"
            alt="Cover"
            src="/static/background/user-cover-pic.png"
            style={{ objectFit: "cover" }}
          />
        </CoverPicWrapper>

        <ContentWrapper>
          <FlexBox justifyContent="center">
            <AvatarBadge
              badgeContent={
                <label htmlFor="icon-button-file">
                  <input
                    type="file"
                    accept="image/*"
                    id="icon-button-file"
                    style={{ display: "none" }}
                  />

                  <IconButton aria-label="upload picture" component="span">
                    <CenterFocusStrongIcon
                      sx={{ fontSize: 16, color: "primary.dark" }}
                    />
                  </IconButton>
                </label>
              }
            >
              <AppAvatar
                alt="Zombie Boy"
                src="/static/avatar/avatar-dead-monster-svgrepo-com.svg"
                sx={{ width: 160, height: 160 }}
              />
            </AvatarBadge>
          </FlexBox>

          <Box mt={2}>
            <H2 fontWeight={600} textAlign="center">
              Zombie Boy
            </H2>

            <StyledFlexBetween paddingTop={2} maxWidth={480}>
              <ListItem title="QA engineer" Icon={ApartmentIcon} />
              <ListItem title="Амстердам" Icon={PlaceIcon} />
              <ListItem title="С нами с 2022" Icon={DateRangeIcon} />
            </StyledFlexBetween>
          </Box>

          <StyledFlexBetween paddingTop={2} maxWidth={480}>
            <BoxItem amount={100000} title="Ставка фуллтайм" color="#4caf50" />
            <BoxItem amount={5000} title="Ставка за проект" color="#33c9dc" />
            <BoxItem amount={25000} title="Ставка Парттайм" color="#e91e63" />
          </StyledFlexBetween>
        </ContentWrapper>

        <StyledTabList variant="scrollable" onChange={handleTabList}>
          <Tab disableRipple
               label="Основное"
               value="1"
          />
          <Tab disableRipple label="Проекты" value="2" />
          <Tab disableRipple label="Connections" value="5" />
          <Tab disableRipple label="Активность" value="6" />
        </StyledTabList>
      </Card>

      {children || <Outlet />}
    </Fragment>
  );
};

export default Layout;

// ----------------------------------------------------------------
type ListItemProps = {
  title: string;
  Icon: (props: SvgIconProps<"svg", {}>) => JSX.Element;
};

type BoxItemProps = {
  amount: number;
  title: string;
  color: string;
};
// ----------------------------------------------------------------

function ListItem({ title, Icon }: ListItemProps) {
  return (
    <FlexBox alignItems="center">
      <Icon sx={{ fontSize: 20, color: "text.secondary", mr: 1 }} />
      <Tiny fontWeight={600} color="text.secondary">
        {title}
      </Tiny>
    </FlexBox>
  );
}

function BoxItem({ title, amount, color }: BoxItemProps) {
  return (
    <Stack
      spacing={0.5}
      alignItems="center"
      sx={{
        padding: 2,
        borderRadius: "0px",
        border: "0px solid",
        borderColor: "divider",
        width: { sm: 120, xs: "100%" },
        marginBottom: { sm: 0, xs: 1 },
      }}
    >
      <H3 color={color}>{numeral(amount).format("0")} ₽</H3>
      <Tiny fontWeight={600}>{title}</Tiny>
    </Stack>
  );
}
