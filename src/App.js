import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import COLORS from "./constants/colors";
import ProfilePage from "./pages/Profile";
import AuthProvider from "./store";

function App() {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: COLORS.DarkGreen,
      },
      secondary: {
        main: COLORS.WildWaterMelon,
      },
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <div
            style={{
              backgroundColor: COLORS.WhiteSmoke,
              height: "100vh",
            }}
          >
            <ProfilePage />
          </div>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
