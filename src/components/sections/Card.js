import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 182,
    height: 500,
    marginTop: 10,
    position:"relative",
  },
  media: {
    height: 1,
    paddingTop: "85%" //"56.25%" // 16:9
  },
}));

export default function RecipeReviewCard(props) {
  const card = props.card;
  const imgSrc = require(`../../assets/img/${card.img}`).default;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        
        title={card.headerTitle}
        subheader={card.subheader}
      />
      <CardMedia
        className={classes.media}
        image={imgSrc}
        title={card.mediaTitle}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {card.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
