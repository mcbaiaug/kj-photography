import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import deskBackground from '../Images/KerstynBW.jpg'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

const useStyles = makeStyles((theme) => ({
  body: {
    flexGrow: 1,
    height: '90%',
  },
  bg: {
    // backgroundColor: '#cccccc',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    // backgroundAttachment: 'fixed',
    zIndex: -10,

    minHeight: '100%',
    minWidth: '1300px',
    width: '100%',
    height: 'auto',
    position: 'fixed',
    left: 0,
    // top:0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      //  marginTop: '-8rem',
    },
  },
  emptyGrid: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  link: {
    // textDecoration: 'none',
    textDecorationColor: 'white',
  },
  buttonScale: {
    fontSize: '2rem',
    color: theme.palette.secondary.light,
    textDecoration: 'underlined',
    border: 'black',
  },
  ref: {
    textDecoration: 'none',
    color: 'white',
  },
  title: {
    fontFamily: 'Allura-Regular',
    fontDisplay: 'swap',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.5rem',
    },
  },
}))

function Home() {
  const classes = useStyles()

  return (
    <div style={{ overflow: 'hidden' }}>
      <img src={deskBackground} alt="Black and white self-portrait, taken on a road." className={classes.bg}></img>
      <Grid container spacing={2} direction="row" justify="center" style={{ paddingTop: '15%' }}>
        <Grid item xs={6} className={classes.emptyGrid} />
        <Grid item xs={12} md={6}>
          <Typography className={classes.title} variant="h3">
            KJ Photography
          </Typography>
        </Grid>
        <Grid container style={{ paddingBottom: '10%' }} spacing={2}>
          <Grid item xs={6} className={classes.emptyGrid} />
          <Grid item xs={12} md={4} lg={2}>
            <Link to="/portfolio" className={classes.link}>
              {/* to="/login" */}
              <Button className={classes.buttonScale} color="primary" variant="outlined">
                Portfolio
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <Link className={classes.link} to="/pricing">
              <Button className={classes.buttonScale} color="primary" variant="outlined">
                Pricing
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <Link className={classes.link} to="/contact/senior-session">
              <Button className={classes.buttonScale} color="primary" variant="outlined">
                Contact
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container style={{ paddingTop: '10%' }} spacing={2}>
          <Grid item xs={6} className={classes.emptyGrid} />
          <Grid item xs={12} md={12} lg={6}>
            <a href="https://www.instagram.com/kj_photography_wi/" className={classes.ref} target="blank">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/KJ-Photography-162087794215893" className={classes.ref} target="blank">
              <FacebookIcon />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
