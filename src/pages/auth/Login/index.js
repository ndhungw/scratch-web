import React, { useState } from "react";
import {
  makeStyles,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  Link,
  Hidden,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

// icons
import { Visibility, VisibilityOff } from "@material-ui/icons";

// constants
import COLORS from "../../../constants/colors";

import useTypographyStyles from "../../../assets/styles/useTypographyStyles";
import classNames from "classnames";
import Logo from "../../../assets/icons/logo";
import BACKGROUND_AUTHEN_IMAGE_SOURCE from "../../../assets/images/BG-Authen.png";
import BIG_LOGO_IMAGE_SOURCE from "../../../assets/images/BigLogoImage.png";
import { useDispatch, useSelector } from "react-redux";
import { selectError, userActions } from "../../../app/userSlice";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${BACKGROUND_AUTHEN_IMAGE_SOURCE}), linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, ${COLORS.WhiteSmoke} 100%)`,
    backgroundSize: "cover",
    backgroundBlendMode: "soft-light",
  },
  formLeftText: {
    alignSelf: "flex-start",
    marginBottom: "0.625rem",
  },
  formSubText: {
    marginBottom: "3rem",
  },
  textField: {
    margin: "1rem 0rem",
  },
  buttonSave: {
    margin: "1.5rem 0rem",
    color: COLORS.White,
    backgroundColor: COLORS.DarkGreen,
    fontSize: "1rem",
    fontWeight: 700,
    width: "100%",
    height: "3.125rem",
  },
  link: {
    color: COLORS.DarkGreen,
  },
  panelLeft: {
    borderRadius: 16,
    backgroundImage: `url(${BIG_LOGO_IMAGE_SOURCE}), linear-gradient(180deg, rgba(255, 255, 255, 0.437555) 0%, #FFFFFF 94.91%)`,
    backgroundSize: "cover",
    backgroundBlendMode: "color",
  },
  panelsWrapper: {
    backgroundColor: COLORS.White,
    borderRadius: 16,
  },
  panelRight: {
    padding: "4rem",
  },
  textSubtle: {
    marginTop: "1rem",
  },
}));

export default function LogInPage() {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();
  //
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector(selectError);

  //
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    dispatch(
      userActions.login({
        username: username,
        password: password,
      })
    );
    history.push("/");
    dispatch(userActions.setIsLoading(false));
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      {/* Left + right panel Wrapper */}
      <Grid item xs={11} sm={9} lg={7} xl={6} className={classes.panelsWrapper}>
        <Grid container>
          <Hidden smDown>
            <Grid
              item
              md={6}
              lg={6}
              container
              justify="center"
              alignItems="center"
              className={classes.panelLeft}
            >
              <Logo />
            </Grid>
          </Hidden>

          {/* Main login form */}
          <Grid
            item
            xs={12}
            lg={6}
            md={6}
            sm={12}
            container
            direction="column"
            alignItems="center"
            className={classes.panelRight}
          >
            <Typography
              variant="h3"
              className={classNames(typoClasses.h3, classes.formLeftText)}
            >
              Welcome Back!
            </Typography>

            <Typography
              className={classNames(
                typoClasses.textGray,
                classes.formLeftText,
                classes.formSubText
              )}
            >
              {"Please login to continue"}
            </Typography>

            {error && <div>{error}</div>}

            <TextField
              label="Username"
              value={username}
              onChange={handleChangeUsername}
              fullWidth
              className={classes.textField}
            />
            <FormControl fullWidth className={classes.textField}>
              <InputLabel>Password</InputLabel>
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleChangePassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              onClick={handleLogin}
              variant="contained"
              color="primary"
              className={classes.buttonSave}
            >
              LOGIN
            </Button>

            <Typography
              className={classNames(typoClasses.textSubtle, classes.textSubtle)}
            >
              {"New to Scratch?"}
            </Typography>
            <Link href="/signup" className={typoClasses.button}>
              Create Account Here
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
