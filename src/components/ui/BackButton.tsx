import {Fab} from "@material-ui/core";
import React from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            position: 'fixed',
            top: theme.spacing(2),
            left: theme.spacing(1),
            backgroundColor: "transparent",
            boxShadow: "none"
        }
    }));

export function BackButton() {
    const history = useHistory();
    const classes = useStyles();
    return <Fab
        classes={{root: classes.fab}}
        color="secondary"
        onClick={() => history.goBack()}><ArrowBackIcon/></Fab>;
}
