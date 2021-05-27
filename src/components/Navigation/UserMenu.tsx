import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
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

// selectors
import { selectCurrentUser, userActions } from "../../redux/slices/userSlice";

const useStyles = makeStyles(() => ({
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

type UserMenuProps = {
  className: string;
  [key: string]: any;
};
export default function UserMenu({ className, ...rest }: UserMenuProps) {
  const history = useHistory();
  const classes = useStyles();
  //
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  //-- start User avatar
  const [userAvatarOpen, setUserAvatarOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  //
  const handleToggle = () => {
    setUserAvatarOpen((prevOpen) => !prevOpen);
  };

  const handleCloseUserAvatar = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setUserAvatarOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setUserAvatarOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(userAvatarOpen);
  useEffect(() => {
    // if (prevOpen.current === true && userAvatarOpen === false) {
    //   anchorRef.current.focus();
    // }

    prevOpen.current = userAvatarOpen;
  }, [userAvatarOpen]);
  //-- end user avatar

  const handleLogout = (event: React.MouseEvent<EventTarget, MouseEvent>) => {
    handleCloseUserAvatar(event);
    history.push("/login");
    dispatch(userActions.logout());
  };
  return (
    <div className={classNames(classes.root, className)} {...rest}>
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
        <Avatar alt="" src={currentUser.avatarSrc || ""} />

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
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </ButtonBase>
    </div>
  );
}
