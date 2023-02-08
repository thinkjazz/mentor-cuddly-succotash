import { Edit } from "@mui/icons-material";
import { Button, Card, CardMedia, Grid, styled } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H3, H4, Small, Tiny } from "components/Typography";

import { FC } from "react";
import { lightTheme } from "../../../../constants";

const StyledSmall = styled(Small)(({ theme }) => ({
  padding: "3px 12px",
  borderRadius: "4px",
  display: "inline-block",
  fontSize: 14,
  backgroundColor: theme.palette.action.hover,
  color: theme.palette.text.secondary,
}));



const Video: FC = () => {
  return (
    <Card sx={{ padding: 3 }}>
      <FlexBetween mb={3}>
        <H3>Видео</H3>
        <Button variant="outlined" color="success" startIcon={<Edit />}>
         Добавить
        </Button>
      </FlexBetween>

      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <SinglePortfolio

            title="Hollow Purple"
            date="12.00 Nov 21, 2021"
            imgLink="/static/portfolio/1.png"
          />
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <SinglePortfolio

            title="Red Blood"
            date="12.00 Nov 21, 2021"
            imgLink="/static/portfolio/2.png"
          />
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <SinglePortfolio

            title="Lime Blue"
            date="12.00 Nov 21, 2021"
            imgLink="/static/portfolio/3.png"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Video;

// -------------------------------------------------------
type SinglePortfolioProps = {

  date: string;
  title: string;
  imgLink: string;
};
// -------------------------------------------------------

function SinglePortfolio({  date, title, imgLink }: SinglePortfolioProps) {
  return (
    <Card
      sx={{
        position: "relative",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: 0,
      }}
    >
      <CardMedia component="img" image={imgLink} height={152} />



      <CardContent sx={{ paddingBottom: "16px !important" }}>

        <Box flexWrap="wrap">
          <Box mt={1.5}>
            <H4>{title}</H4>
            <Tiny fontWeight={500}>{date}</Tiny>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
