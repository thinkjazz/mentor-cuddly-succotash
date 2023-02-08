import { Box, IconButton, MenuItem, Popover, styled } from "@mui/material";
import { H6 } from "components/Typography";
import { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// dummy language options
const languageOptions: {
  [key: string]: { icon: string; label: string };
} = {
  en: {
    icon: "/static/flags/usa.png",
    label: "English",
  },
  es: {
    icon: "/static/flags/rus.png",
    label: "Русский",
  },
  //   hi: {
  //     icon: '/static/flags/in.png',
  //     label: 'Hindi',
  //   },
};

// custom styled components
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": { backgroundColor: theme.palette.action.hover },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  height: 24,
  width: 24,
  padding: "2px",
  "& img": {
    width: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
}));

const ItemWrapper = styled(Box)(() => ({
  display: "flex",
  "& img": { width: "100%" },
}));

const LanguagePopover: FC = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setOpen(false);
  };

  const selectedLanguage = languageOptions[i18n.language];

  return (
    <>
      <StyledIconButton onClick={handleOpen} ref={anchorRef}>
        <IconWrapper>
          <img alt={selectedLanguage.label} src={selectedLanguage.icon} />
        </IconWrapper>
      </StyledIconButton>
      <Popover
        keepMounted
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        PaperProps={{ sx: { width: 150, padding: "0.5rem 0" } }}
      >
        {Object.keys(languageOptions).map((language: string) => (
          <MenuItem
            key={languageOptions[language].label}
            onClick={() => handleChangeLanguage(language)}
          >
            <ItemWrapper>
              {/* <img
                alt={languageOptions[language].label}
                src={languageOptions[language].icon}
              /> */}
              <H6 fontWeight={600} ml={1}>
                {languageOptions[language].label}
              </H6>
            </ItemWrapper>
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default LanguagePopover;
