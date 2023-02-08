import { Card, Stack, styled, Table, TableRow, useTheme } from "@mui/material";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { alpha, Box } from "@mui/system";

import FlexRowAlign from "components/flexbox/FlexRowAlign";
import Scrollbar from "components/ScrollBar";
import { H3, H4, Small, Tiny } from "components/Typography";


import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { FC } from "react";
import {info, success, warning} from "../../../../theme/colors";



const IconWrapper = styled(FlexRowAlign)<{ color: string }>(({ color }) => ({
  width: 35,
  height: 30,
  borderRadius: "4px",
  backgroundColor: alpha(color, 0.2),
}));

const StyledTableCell = styled(TableCell)(() => ({
  paddingBottom: 0,
  borderBottom: 0,
  "&:nth-of-type(2)": { textAlign: "center" },
}));

const EmploymentPlaces: FC = () => {
  const theme = useTheme();
  const teamList = [
    {
      id: 1,
      Icon: GoogleIcon,
      company: "Google",
      position: "QA Engineers",
      date: "12 Июля 2022",
      dateEnd: "22 Июля 2023",
      color: theme.palette.warning.main,
    },
    {
      id: 2,
      Icon: FacebookIcon,
      company: "Meta - Facebook",
      position: "QA Lead",
      date: "22 Июля 2021",
      dateEnd: "12 Июля 2022",
      color: theme.palette.info.dark,
    },
    {
      id: 3,
      Icon: LinkedInIcon,
      company: "LinkedIn Olly",
      position: "QA Lead",
      date: "22 Июля 2020",
      dateEnd: "12 Июля 2021",
      color: theme.palette.primary.main,
    },
  ];

  return (
    <Card sx={{ padding: 4 }}>
      <H3 mb={1}>Опыт работы</H3>

      <Scrollbar autoHide={false}>
        <Table sx={{ minWidth: 600 }}>
          <TableBody>
            {teamList.map((item) => (
              <TableRow key={item.id}>
                <StyledTableCell>
                  <Stack direction="row" spacing={2}>
                    <IconWrapper color={item.color}>
                      <item.Icon sx={{ color: item.color }} />
                    </IconWrapper>

                    <Box>
                      <H4>{item.company}</H4>
                      <Tiny fontSize={13} fontWeight={600}>
                        {item.position}
                      </Tiny>
                    </Box>
                  </Stack>
                </StyledTableCell>

                <StyledTableCell>
                  <Small color="text.secondary">Работал c {item.date}</Small>
                </StyledTableCell>

                <StyledTableCell>
                  <Stack direction="row" justifyContent="flex-end" spacing={2}>
                    <Small color="text.secondary">Уволился {item.dateEnd}</Small>
                  </Stack>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
};

export default EmploymentPlaces;
