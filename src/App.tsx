import { CssBaseline, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import useSettings from "hooks/useSettings";
import { FC } from "react";
import { useRoutes } from "react-router-dom";
import routes from "routes";
import { createCustomTheme } from "theme";
import "./i18n";

const App: FC = () => {
  const content = useRoutes(routes());
  const { settings } = useSettings();

  const theme = createCustomTheme({
    theme: settings.theme,

    responsiveFontSizes: settings.responsiveFontSizes,
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          {content}
        </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
