import React from "react";
import {Grid} from "@material-ui/core";
import {BottomBar} from "../ui/Navbar";

interface SettingsProps {
    toggleDark: (event: React.ChangeEvent<MouseEvent>) => void,
    theme: boolean
}

export function Workout() {
    return <>
        <Grid container justify="center">
            <h1>Workout</h1>
        </Grid>
    </>;
}
