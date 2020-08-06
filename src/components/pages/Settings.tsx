import React from "react";
import {CssBaseline, FormControlLabel, Grid, Switch, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {BackButton} from "../ui/BackButton";

interface SettingsProps {
    toggleDark: any,
    isLight: boolean
}

// @ts-ignore
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper,
            height: '90vh',
        },
        heading: {
            color: theme.palette.text.primary,
        },
        switch: {
            color: theme.palette.text.primary,
        }
    }));

export function Settings(props: SettingsProps) {
    const [state, setState] = React.useState({
        light: !props.isLight,
    });

    function toggleDark() {
        setState((prevState => ({light: !prevState.light})));
        props.toggleDark();
    }

    const classes = useStyles();

    return <>
        <Grid container justify="center" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" className={classes.heading}>Settings</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel control={
                        <Switch
                            checked={state.light}
                            className={classes.switch}
                            color="primary"
                            onChange={() => toggleDark()}/>}
                                      label="Toggle Dark Mode"/>
                    <BackButton/>

                </Grid>
        </Grid>
    </>;
}
