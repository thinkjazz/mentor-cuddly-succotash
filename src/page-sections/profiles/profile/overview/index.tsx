import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import AdditionalDetails from "./AdditionalDetails";
import TechStack from "./TechStack";
import MyMentees from "./MyMentees";
import Achievements from "./Achievements";
import Video from "./Video";
import Post from "./Post";
import Skills from "./Skills";
import CanHelpWith from "./CanHelpWith";
import Summery from "./Summery";
import EmploymentPlaces from "./EmploymentPlaces";

const Overview: FC = () => {
  return (
    <Box mt={3}>
      <Grid container spacing={3}>
        <Grid item lg={3} md={4} xs={12}>
          <Stack spacing={3}>
            <MyMentees />
            <AdditionalDetails />
            <Achievements/>
          </Stack>
        </Grid>

        <Grid item lg={9} md={8} xs={12}>
          <Stack spacing={3}>
            <Summery />
            <Skills />
            <TechStack />

            <EmploymentPlaces />
            <Post />
            <Video />
          </Stack>
        </Grid>


      </Grid>
    </Box>
  );
};

export default Overview;
