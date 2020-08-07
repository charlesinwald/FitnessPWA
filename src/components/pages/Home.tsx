import React from "react";
import {GridList, GridListTile, GridListTileBar} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {default as workouts} from '../../assets/workouts.json';
import {useHistory} from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            height: '90vh',
        },
        Grid: {
            // height: '90vh',
            // marginBottom: '10vh'
        },
        gridList: {
            "width": "100vw",
            marginBottom: '10vh'
        },
        tileBar: {
            background: "transparent",
        },
        title: {
            fontWeight: 900,
            fontSize: '3rem',
            marginTop: '3rem',
            lineHeight: '48px',
            overflow: "visible",
        },
        titleWrap: {
            overflow: "visible"
        },
        imgFullHeight: {
            height: '100%'
        },
        tile: {
            height: '100%'
        }
    }),
);

export function Home() {
    const classes = useStyles();
    const history = useHistory();

    function openWorkout(id: number) {
        history.push({pathname: '/workout',
                      state: id
                                });
    }

    return (
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={3} spacing={1}>
                    {workouts.map((tile: { img: string; cols: number; title: string | undefined; id: number}) => (
                        <GridListTile
                                      cols={tile.cols || 1}
                                      onClick={() => openWorkout(tile.id)}
                                      >
                            <video autoPlay loop muted playsInline>
                                <source src={'images/' + tile.img} type="video/webm">
                                </source>
                            </video>
                            <GridListTileBar
                                titlePosition="top"
                                title={tile.title}
                                classes={{root: classes.tileBar, title: classes.title, titleWrap: classes.titleWrap}}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
    );
}
