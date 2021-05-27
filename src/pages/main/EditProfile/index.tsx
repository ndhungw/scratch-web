import {
  Avatar,
  Button,
  ButtonBase,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import useTypographyStyles from "../../../assets/styles/useTypographyStyles";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import COLORS from "../../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import NavigationDesktop from "../../../components/Navigation/NavigationDesktop";
import {
  selectCurrentUser,
  userActions,
} from "../../../redux/slices/userSlice";

const useStyles = makeStyles(() => ({
  root: {},
  wrapper: {
    backgroundColor: COLORS.White,
    marginTop: "2rem",
    padding: "2rem",
    borderRadius: 16,
  },
  avatar: {
    width: "6.25rem",
    height: "6.25rem",
    marginBottom: "2rem",
  },
  spaceVertical: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  sectionText: {
    alignSelf: "flex-start",
  },
  saveButton: {
    width: "100%",
  },
}));

export default function EditProfilePage() {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [fullName, setFullName] = useState(currentUser.fullName || "");
  const [bio, setBio] = useState(currentUser.bio || "");
  const [email, setEmail] = useState(currentUser.email || "");
  const [phone, setPhone] = useState(currentUser.phone || "");

  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };
  const handleChangeBio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleSaveProfile = () => {
    const updateUser = {
      ...currentUser,
      fullName,
      bio,
      email,
      phone,
      avatarSrc: avatarSrc || currentUser.avatarSrc,
    };
    dispatch(userActions.setCurrentUser(updateUser));
  };

  // avatar
  const fileInputRef = useRef<any>();
  const [file, setFile] = useState<File | null>();
  const [avatarSrc, setAvatarSrc] = useState<string | null>();

  const handleSelectFile = (event: any) => {
    event.preventDefault();

    fileInputRef?.current.click();
  };

  // lam trung gian nhu the nay nham
  // tao ra mot state de dung useEffect theo doi va preview:)
  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    } else {
      setFile(null);
    }
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setAvatarSrc(null);
    }
  }, [file]);
  // end avatar

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container justify="center" spacing={0}>
        <Grid item xs={12}>
          <NavigationDesktop />
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          md={5}
          lg={4}
          xl={3}
          container
          justify="center"
          className={classes.wrapper}
        >
          <Grid item xs={12}>
            <Typography className={typoClasses.h3}>{"Edit Profile"}</Typography>
          </Grid>
          <Grid item xs={12} container direction="column" alignItems="center">
            <Avatar
              src={avatarSrc || currentUser.avatarSrc}
              className={classes.avatar}
            />

            <ButtonBase
              onClick={handleSelectFile}
              className={typoClasses.button}
            >
              {"Edit Profile Picture"}
            </ButtonBase>
            <input
              type="file"
              accept="image/*"
              hidden
              ref={fileInputRef}
              onChange={handleFileInputChange}
            />
          </Grid>
          <Grid item xs={12} container direction="column" alignItems="center">
            <TextField
              label="Full Name"
              value={fullName}
              onChange={handleChangeFullName}
              fullWidth
              className={classes.spaceVertical}
            />
            <TextField
              label="Bio"
              value={bio}
              onChange={handleChangeBio}
              fullWidth
              className={classes.spaceVertical}
            />
          </Grid>

          <Grid item xs={12} container direction="column" alignItems="center">
            <Typography
              className={classNames(typoClasses.h5, classes.sectionText)}
            >
              {"Private Information"}
            </Typography>
            <TextField
              label="Email"
              value={email}
              onChange={handleChangeEmail}
              fullWidth
              className={classes.spaceVertical}
            />
            <TextField
              label="Phone"
              value={phone}
              onChange={handleChangePhone}
              fullWidth
              className={classes.spaceVertical}
            />
          </Grid>

          <Button onClick={handleSaveProfile} className={classes.saveButton}>
            Save Profile
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
