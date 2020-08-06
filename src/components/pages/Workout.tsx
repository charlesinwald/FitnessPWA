import React from "react";
import {Grid, Paper} from "@material-ui/core";
import {useParams, useHistory} from "react-router-dom";
import {BackButton} from "../ui/BackButton";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Paper: {
            height: '90vh',
            width: '100vh'
        }
    }));

// @ts-ignore
export function Workout() {
    let history = useHistory();
    const classes = useStyles();
    let id = history.location.state;
    return <>
        <Grid container justify="center">
            <Paper classes={{root: classes.Paper}}>
                <h1>Workout {id}</h1>
                <BackButton/>
            </Paper>
        </Grid>
    </>;
};

