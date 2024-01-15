import React from "react";
import { AppBar, Button, Toolbar, makeStyles } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "90%",
      padding: theme.spacing(4.5),
    },
    root: {
      display: "flex",
    },

    appbar: {
      width: "100%",
      background: "#e3b4ea",
    },
    toobar: theme.mixins.toolbar,
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove local storage data

    localStorage.removeItem("LoginUser");
    localStorage.removeItem("alldata");

    // Redirect to the sign-in page (replace 'signin' with your actual sign-in route)
    navigate("/signin");
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" style={{ flex: 1, textAlign: "center" }}>
            Welcome to MindMark
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.logoutButton}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <div className={classes.page}>
        <div className={classes.toolbar}> </div>
        {children}
      </div>
    </div>
  );
}
