import { Card, Stack } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import { H5, Tiny } from "components/Typography";
import React, { FC } from "react";

const MyMentees: FC = () => {
  return (
    <Card sx={{ padding: 4 }}>
      <H5>Я - Наставник</H5>

      <Stack spacing={3} mt={3}>
        <SingleItem
          name="Уолтер Вайт"
          position="QA Lead"
          imageUrl="/static/avatar/001-man.svg"
        />
        <SingleItem
          name="Кабаева Алина"
          position="QA tester"
          imageUrl="/static/avatar/002-girl.svg"
        />
        <SingleItem
          name="Какой-то парень"
          position="tester"
          imageUrl="/static/avatar/005-man-1.svg"
        />
        <SingleItem
          name="Джейсон Вурхиз"
          position="tester"
          imageUrl="/static/avatar/007-boy-1.svg"
        />
      </Stack>
    </Card>
  );
};

export default MyMentees;

// -------------------------------------------------
type SingleItemProps = {
  name: string;
  imageUrl: string;
  position: string;
};
// -------------------------------------------------

function SingleItem({ name, imageUrl, position }: SingleItemProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <AppAvatar src={imageUrl} />

      <Stack spacing={0.5}>
        <H5 fontSize={12}>{name}</H5>
        <Tiny fontWeight={500} fontSize={10}>
          {position}
        </Tiny>
      </Stack>
    </Stack>
  );
}
