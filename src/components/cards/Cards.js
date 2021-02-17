import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import cx from "classnames"
import styles from "./Cards.module.css"
import CountUp from "react-countup"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cfdac8",
    color: "#252525",
    borderRadius: "10px",
    boxShadow: "20px 20px 60px  #b0b9aa",
  },
}))

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  const classes = useStyles()

  if (!confirmed) {
    return "Loading..."
  }

  return (
    <div className={styles.Container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.Card, styles.Infected, classes.root)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.Card, styles.Recovered, classes.root)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.Card, styles.Deaths, classes.root)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths of Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
