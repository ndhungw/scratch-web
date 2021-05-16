import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import COLORS from "./constants/colors";
import FeedPage from "./pages/Feed";
import ProfilePage from "./pages/Profile";

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
      <ThemeProvider theme={theme}>
        <div
          style={{
            // padding: 15,
            backgroundColor: COLORS.WhiteSmoke,
            height: "100vh",
          }}
        >
          {/* <FeedPage /> */}
          <ProfilePage />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
