import {
  Button,
  Card,
  CardContent,
  Grid,
  List,
  makeStyles,
  Typography,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PublishIcon from "@material-ui/icons/Publish";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CreateIcon from "@material-ui/icons/Create";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";
import useTypographyStyles from "../../../../assets/styles/useTypographyStyles";
import COLORS from "../../../../constants/colors";
import Direction from "./Direction";
import { INSTRUCTION_VIDEO_SOURCE } from "../../../../constants/defaultValues";
import DashedButton from "./DashedButton";

const InstructionCard = () => {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify="center">
      <Grid item container spacing={2}>
        <Grid item className={classes.directions} xs={10} sm={12} md={6}>
          <Card className={classes.directionCard}>
            <CardContent>
              <div className={classes.title}>
                <Typography className={typoClasses.h5}>How to cook</Typography>
              </div>
              <List>
                {steps.map((step, index) => {
                  return (
                    <Direction
                      key={index}
                      order={index + 1}
                      content={step.content}
                    />
                  );
                })}
                {/* <Button
                  className={classes.addButton}
                  fullWidth
                  variant="outlined"
                  startIcon={<AddIcon fontSize="inherit" />}
                >
                  Add Directions
                </Button> */}
                <DashedButton
                  className={classes.addButton}
                  startIcon={<AddIcon fontSize="inherit" />}
                >
                  <Typography className={typoClasses.lead}>
                    {"Add Directions"}
                  </Typography>
                </DashedButton>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={12} md={6}>
          <Paper className={classes.media} elevation={0}>
            <div className={classes.mediaContainer}>
              <img src={INSTRUCTION_VIDEO_SOURCE} className={classes.video} />
              <div className={classes.mediaControl}>
                <TextField
                  className={classes.mediaNameEdit}
                  inputProps={{
                    style: {
                      padding: 5,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreateIcon
                          style={{ color: COLORS.White }}
                          fontSize={"small"}
                        />
                      </InputAdornment>
                    ),
                  }}
                  variant={"outlined"}
                  size={"small"}
                ></TextField>
                <Button className={classes.deleteButton} size={"small"}>
                  <DeleteOutlineIcon fontSize={"small"} />
                </Button>
              </div>
              <IconButton className={classes.playButton}>
                <PlayArrowIcon
                  fontSize={"large"}
                  style={{ color: COLORS.White }}
                />
              </IconButton>
            </div>
            {/* <Button
              className={classes.uploadButton}
              fullWidth
              variant="outlined"
              startIcon={
                <>
                  <PublishIcon fontSize="inherit" />
                </>
              }
            >
              <div className={classes.mediaDetails}>
                <Typography>The Making of Waffle.mp4</Typography>
                <Typography>36 Mb</Typography>
              </div>
            </Button> */}
            <DashedButton startComponent={<PublishIcon fontSize="inherit" />}>
              <div className={classes.mediaDetails}>
                <Typography>The Making of Waffle.mp4</Typography>
                <Typography>36 Mb</Typography>
              </div>
            </DashedButton>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    // maxWidth: 955,
    flexGrow: 1,
    backgroundColor: COLORS.White,
    flexDirection: "row",
    borderRadius: "8px",
    padding: 16,
  },
  directions: {},
  directionCard: {
    border: "none",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  media: {
    maxWidth: 455,
    margin: "3rem auto 0 auto",
  },
  addButton: {
    textTransform: "none",
    borderStyle: "dashed",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 13,
    justifyContent: "flex-start",
    // color: COLORS.Grey,
  },
  uploadButton: {
    width: "100%",
    borderStyle: "dashed",
    paddingTop: 15,
    paddingBottom: 13,
    color: COLORS.Grey,
    justifyContent: "flex-start",
    textTransform: "none",
  },
  deleteButton: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderColor: COLORS.White,
    color: COLORS.White,
    border: "1px solid",
    marginTop: 0,
    maxWidth: "30px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
  },
  playButton: {
    position: "absolute",
    width: 90,
    height: 90,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    zIndex: 9,
    boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.5)",
  },
  mediaDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  mediaContainer: {
    position: "relative",
  },
  mediaControl: {
    position: "absolute",
    right: 15,
    top: 15,
    flex: 1,
    zIndex: 10,
  },
  mediaNameEdit: {
    marginRight: 15,
    maxWidth: "135px",
    maxHeight: "30px",
    minWidth: "135px",
    minHeight: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    border: "1px solid",
    borderColor: COLORS.White,
    color: COLORS.White,
    borderRadius: 8,
  },
  video: {
    width: "100%",
    height: "100%",
  },
}));

const steps = [
  { content: "Heat a Belgian waffle iron." },
  {
    content:
      "Mix the flour, sugar, and baking powder together in a mixing bowl. Stir in 1 cup eggnog, butter, and the egg until well blended. Add more eggnog if ",
  },
  {
    content:
      "Lightly grease or spray the waffle iron with non-stick cooking spray. Pour some batter onto the preheated waffle iron, close the top, and cook until golden brown and crisp on both sides. Waffles are usually cooked with steam subsides. Transfer waffles to a serving plate, and keep warm.",
  },
  {
    content:
      "Meanwhile, place the raspberry preserves in a pan, and heat over medium heat until pourable.",
  },
];
export default InstructionCard;
