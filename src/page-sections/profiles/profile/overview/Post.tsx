import { Card, Stack, useTheme, Button } from "@mui/material";
import { Box } from "@mui/system";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H3, H4, Tiny } from "components/Typography";
import DateRange from "icons/DateRange";
import Edit from "icons/Edit";
import { FC } from "react";

const Post: FC = () => {
  const theme = useTheme();

  return (
    <Card sx={{ padding: 3 }}>
      <FlexBetween flexWrap="wrap">
        <H3>Посты</H3>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            [theme.breakpoints.down(390)]: { mt: 2 },
          }}
        >
          <Button variant="outlined"  color="success" startIcon={<Edit />}>
            Написать пост
          </Button>
        </Stack>
      </FlexBetween>

      <Stack spacing={3} mt={3}>
        <SinglePost
          category="мотивация"
          date="Nov 21, 2021"
          imgLink="/static/post/1.png"
          title="5 важных качеств для успешного QA Ментора"
        />
        <SinglePost
          category="qa practic tips"
          date="Aug 21, 2021"
          imgLink="/static/post/2.png"
          title="Как развивать скиллы команды QA: практические советы"
        />
        <SinglePost
          category="мотивация"
          date="Jun 21, 2021"
          imgLink="/static/post/3.png"
          title="Инструменты и техники, которые помогут улучшить процесс QA"
        />
        <SinglePost
          category="мотивация"
          date="Jun 21, 2021"
          imgLink="/static/post/3.png"
          title= "Как создать эффективную стратегию QA для вашего проекта"
        />
          <SinglePost
              category="мотивация"
              date="Jun 21, 2021"
              imgLink="/static/post/3.png"
              title="Почему коммуникация важна для QA ментора и как ее улучшить"
          />
          <SinglePost
              category="мотивация"
              date="Jun 21, 2021"
              imgLink="/static/post/3.png"
              title="Почему коммуникация важна для QA ментора и как ее улучшить"
          />
          <SinglePost
              category="мотивация"
              date="Jun 21, 2021"
              imgLink="/static/post/3.png"
              title="Как провести эффективные обучающие сессии для команды QA"
          />
          <SinglePost
              category="мотивация"
              date="Jun 21, 2021"
              imgLink="/static/post/3.png"
              title="Тенденции и развитие в области QA: где идет движение?"
          />
          <SinglePost
              category="мотивация"
              date="Jun 21, 2021"
              imgLink="/static/post/3.png"
              title="Ошибки, которые допускают QA менторы: как их избежать"
          />





      </Stack>
    </Card>
  );
};

export default Post;

// ----------------------------------------------------
type PostProps = {
  date: string;
  title: string;
  imgLink: string;
  category: string;
};
// ----------------------------------------------------

function SinglePost({ date, title, imgLink, category }: PostProps) {
  return (
    <FlexBetween>
      <Stack spacing={0.5}>
        <H4>{title}</H4>

        <FlexBox alignItems="center" pt={0.5}>
          <DateRange sx={{ fontSize: 20, color: "text.disabled", mr: 1 }} />
          <Tiny fontSize={12} fontWeight={500}>
              Опубликовано {date}
          </Tiny>
        </FlexBox>
      </Stack>

      <Box
        sx={{ width: 125, height: 75, borderRadius: "4px", overflow: "hidden" }}
      >
        <img src={imgLink} width="100%" alt="Post" />
      </Box>
    </FlexBetween>
  );
}
