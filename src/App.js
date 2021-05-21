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
import store from "./store";
import { Provider } from "react-redux";

// components
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

// pages
import ProfilePage from "./pages/main/Profile";
import FeedPage from "./pages/main/Feed";
import LogInPage from "./pages/auth/Login";
import SignUpPage from "./pages/auth/SignUp";

// redux-persist things
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import TestPage from "./pages/TestPage";
import EditProfilePage from "./pages/main/EditProfile/EditProfile";

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
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
        text: {
          // Some CSS
          backgroundColor: COLORS.DarkGreen,
          borderRadius: 8,
          border: 0,
          color: COLORS.White,
          height: 48,
          padding: "0 30px",
          fontWeight: 700,
          fontSize: "1rem",
        },
      },
    },
  });
  theme = responsiveFontSizes(theme);

  // redux-persist things
  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <ThemeProvider theme={theme}>
              <SnackbarProvider>
                <Switch>
                  <Route path={"/test"}>
                    <TestPage />
                  </Route>

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
                  <PrivateRoute path={"/profile"} exact>
                    <ProfilePage />
                  </PrivateRoute>
                  <PrivateRoute path={"/profile/edit"}>
                    <EditProfilePage />
                  </PrivateRoute>
                </Switch>
              </SnackbarProvider>
            </ThemeProvider>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
