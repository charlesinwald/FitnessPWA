import {Fab} from "@material-ui/core";
import React from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router-dom";

export function BackButton() {
    const history = useHistory();
    return <Fab color="secondary" onClick={() => history.goBack()}><ArrowBackIcon/></Fab>;
}
