import {BottomNavigation, BottomNavigationAction, createStyles} from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home"
import SettingsIcon from "@material-ui/icons/Settings"
import { Link } from "react-router-dom";
import {makeStyles, MuiThemeProvider, Theme} from "@material-ui/core/styles";

interface NavbarProps {
    theme: Theme
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '10vh',
            position: 'fixed',
            bottom: 0,
            zIndex: 9999
        }
    }),
);

export function BottomBar(props : NavbarProps) {
    const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
    const [value, setValue] = React.useState(pathname);
    const classes = useStyles();
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <MuiThemeProvider theme={props.theme}>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction component={Link} value="Home" to="/" label="Home" icon={<HomeIcon/>}/>
            <BottomNavigationAction component={Link} value="Settings" to="/settings" label="Settings" icon={<SettingsIcon/>}/>
        </BottomNavigation>
        </MuiThemeProvider>
    );
}
