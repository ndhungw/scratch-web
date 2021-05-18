import { useState, useEffect, useRef } from "react";
import {
  makeStyles,
  Avatar,
  ButtonBase,
  ClickAwayListener,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { USER_SAMPLE } from "../../../constants/data";
import { useAuth } from "../../../store/contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatarBtn: {
    borderRadius: 50,
    padding: 4,
  },
  avatarBtnActive: {
    border: "4px solid grey",
    borderRadius: 50,
    padding: 0,
  },
}));
export default function UserMenu({ user, className, ...rest }) {
  const classes = useStyles();
  //
  const { logout } = useAuth();

  //-- start User avatar
  const [userAvatarOpen, setUserAvatarOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    console.log("click user avatar");
    setUserAvatarOpen((prevOpen) => !prevOpen);
  };

  const handleCloseUserAvatar = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setUserAvatarOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setUserAvatarOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(userAvatarOpen);
  useEffect(() => {
    if (prevOpen.current === true && userAvatarOpen === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = userAvatarOpen;
  }, [userAvatarOpen]);
  //-- end user avatar

  const handleLogout = (event) => {
    handleCloseUserAvatar(event);
    logout();
  };
  return (
    <div className={classNames(classes.root, className)}>
      <ButtonBase
        ref={anchorRef}
        aria-controls={userAvatarOpen ? "user-avatar-menu-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classNames({
          [classes.avatarBtn]: true,
          [classes.avatarBtnActive]: userAvatarOpen,
        })}
      >
        <Avatar alt="" src={USER_SAMPLE.avatarSrc} />

        <Popper
          open={userAvatarOpen}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          placement="bottom-end"
          style={{ zIndex: 5 }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleCloseUserAvatar}>
              <MenuList
                autoFocusItem={userAvatarOpen}
                id="user-avatar-menu-list-grow"
                onKeyDown={handleListKeyDown}
              >
                <MenuItem
                  onClick={handleCloseUserAvatar}
                  component={NavLink}
                  to="/profile"
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={handleLogout}
                  // component={NavLink}
                  // to="/logout"
                >
                  Logout
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </ButtonBase>
    </div>
  );
}
