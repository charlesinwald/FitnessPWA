import React from "react";
import {Grid, GridList, GridListTile, GridListTileBar} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {default as workouts} from '../../assets/workouts.json';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            height: '90vh',
            // marginBottom: '10vh'
        },
        Grid: {
            // height: '90vh',
            // marginBottom: '10vh'
        },
        gridList: {
            "width": "100vw",
            // "height": '90vh',
            // "overflowY": 'auto',
            marginBottom: '10vh'

        },
        tileBar: {
            background: "transparent",
        },
        title: {
            fontWeight: 900,
            fontSize: '2rem',
            marginBottom: '3rem',
            lineHeight: '48px'
        }
    }),
);

export function Home() {
    const classes = useStyles();
    console.log(workouts);
    return <>
        {/*<Grid container justify="center" className={classes.Grid}>*/}
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {workouts.map((tile: { img: string; cols: number; title: string | undefined; }) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title}/>
                            <GridListTileBar
                                title={tile.title}
                                classes={{root: classes.tileBar, title: classes.title}}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        {/*</Grid>*/}
    </>;
}
