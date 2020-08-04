import React from "react";
import {FormControlLabel, Grid, Switch, Typography} from "@material-ui/core";

interface SettingsProps {
    toggleDark: (event: React.ChangeEvent<MouseEvent>) => void,
    isLight: boolean
}

export function Settings(props: SettingsProps) {
    const [state, setState] = React.useState({
        light: props.isLight,
    });

    function toggleDark() {

        return props.toggleDark;
    }

    return <>
        <Grid container justify="center">
            <Grid item xs={12} justify="center">
                <Typography variant="h2">Settings</Typography>
            </Grid>
            <Grid item xs={12} justify="flex-start">
                <FormControlLabel control={
                    <Switch
                        checked={state.light}
                        //@ts-ignore
                        onChange={toggleDark()}/>}
                        label="Toggle Dark Mode"/>
            </Grid>
        </Grid>
        {/*<BottomBar/>*/}
    </>;
}
