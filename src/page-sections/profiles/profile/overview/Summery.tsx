import { Card } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import { H3, Paragraph } from "components/Typography";
import React from "react";
import EditButton from "../EditButton";
import HideButton from "../HideButton";

const Summery = () => {
  return (
    <Card sx={{ padding: 4 }}>
      <FlexBetween>
        <H3>Обо мне</H3>
          <HideButton/>
        <EditButton />
      </FlexBetween>

      <Paragraph mt={2} fontWeight={500}>
          Я - опытный Ментор QA инженер с более чем 5 летним опытом в тестировании программного обеспечения. <br />  {" "}
          Я обладаю широкими знаниями в области тестирования и использования различных инструментов для автоматизации.<br />
          Я проявляю уверенность в работе с командой разработчиков и владею хорошими коммуникативными навыками.<br /><br />
          Я стремлюсь постоянно развиваться и улучшать свои навыки в области QA, чтобы обеспечить высокое качество продукта.
      </Paragraph>
    </Card>
  );
};

export default Summery;
