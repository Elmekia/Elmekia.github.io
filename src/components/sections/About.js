import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from "./Card"
import cards from "../../assets/data/aboutMe.json";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 75,
        backgroundColor: "#3185466e"
    },
}));

export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container xs={12} direction="row" justify="space-around" alignItems="center">
                {cards.map((card, index) => (
                    <RecipeReviewCard key={index} card={card} />
                ))}
            </Grid>
        </div>
    )
}
