import React from "react";
import {Grid, List, Paper, ListItem, ListItemText, Checkbox} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {BackButton} from "../ui/BackButton";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {default as workouts} from '../../assets/workouts.json';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Grid: {
            // height: '90vh',
            // width: '100vh',
            // marginBottom: '10vh'
        },
        Paper: {
            height: '90vh',
            width: '100%',
        },
        gridList: {
            "width": "100vw",
            height: '90vh',
            marginBottom: '10vh'
        },
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            position: 'relative',
            overflow: 'auto',
            height: '90vh',
            marginBottom: '10vh'
        },
        listSection: {
            backgroundColor: 'inherit',
        },
        ul: {
            backgroundColor: 'inherit',
            padding: 0,
        }
    }));

// @ts-ignore
export function Workout() {
    let history = useHistory();
    const classes = useStyles();
    let id : number = history.location.state as number;
    let workout = workouts[id - 1];
    let exercises = workout.exercises;
    return <>
        <Grid container justify="center" className={classes.Grid}>
            <Paper classes={{root: classes.Paper}}>
                <BackButton/>
                <h1>{workout.title} Day</h1>
                <List className={classes.root} subheader={<li />}>
                    {exercises.map((exercise) => (
                        <li key={exercise} className={classes.listSection}>
                            <ul className={classes.ul}>
                                    <ListItem key={exercise}>
                                        <ListItemText primary={exercise} />
                                        <Checkbox color='primary'/>
                                    </ListItem>
                            </ul>
                        </li>
                    ))}
                </List>
            </Paper>
        </Grid>
    </>;
}

