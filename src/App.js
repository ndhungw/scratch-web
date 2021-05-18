import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";

// constants
import COLORS from "./constants/colors";

// store
// import AuthProvider from "./store";
import AuthProvider from "./store/contexts/AuthContext";

// components
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

// pages
import ProfilePage from "./pages/main/Profile";
import FeedPage from "./pages/main/Feed";
import LogInPage from "./pages/auth/Login";
import SignUpPage from "./pages/auth/SignUp";

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
        <Router>
          <ThemeProvider theme={theme}>
            <SnackbarProvider>
              <Switch>
                <Route path={"/signup"}>
                  <SignUpPage />
                </Route>
                <Route path={"/login"}>
                  <LogInPage />
                </Route>

                {/* Private Routes */}
                <PrivateRoute path={"/"} exact>
                  <FeedPage />
                </PrivateRoute>
                <PrivateRoute path={"/feed"}>
                  <FeedPage />
                </PrivateRoute>
                <PrivateRoute path={"/profile"}>
                  <ProfilePage />
                </PrivateRoute>
              </Switch>
            </SnackbarProvider>
          </ThemeProvider>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
