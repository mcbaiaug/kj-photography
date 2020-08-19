import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import deskBackground from '../Images/KerstynBW.jpg'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

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
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    // textDecoration: 'none',
    textDecorationColor: 'white',

  },
  buttonScale: {
    fontSize: '2rem',
    color: '#00a0a0',
    textDecoration: 'underlined',
    border: 'black',

  },
  ref:{
    textDecoration:'none',
    color:'white',

  }
}))

function Home() {
  const classes = useStyles()

  return (
    <div style={{ overflow: 'hidden' }}>
      <img src={deskBackground} alt="Black and white self-portrait, taken on a road." className={classes.bg}></img>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="space=around"
        justify="center"
        style={{ paddingTop: '15%' }}
      >
        <Grid item xs={6} className={classes.emptyGrid} />
        <Grid item xs={12} md={6}>
          <Typography style={{ fontFamily: 'Allura-Regular' }} variant="h3">
            KJ Photography
          </Typography>
        </Grid>
        <Grid container style={{ paddingBottom: '10%' }} spacing={2}>
         {/* FIXME: Fix resizing issue when portfolio and the about button blend in to eachother */}
         
          <Grid item xs={6} className={classes.emptyGrid} />
          <Grid item xs={12} md={2}>
            <Link className={classes.link}>
              {/* to="/login" */}
              <Button className={classes.buttonScale} color="primary" variant="outlined">
                Portfolio
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link className={classes.link}>
              <Button className={classes.buttonScale} color="primary" variant="outlined" >
                About
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link className={classes.link}>
              <Button className={classes.buttonScale} color="primary" variant="outlined" >
                Contact
              </Button>
            </Link>
          </Grid>
        </Grid>
        {/* FIXME: Prevent the on hover from the buttons about from pushing down the icons */}
        <Grid container style={{paddingTop:'10%',}} spacing={2}>
          <Grid item xs={6} className={classes.emptyGrid}/>
          <Grid item xs={12} md={6} >
            <a href="http://www.google.com" className={classes.ref} target='blank'>
            <InstagramIcon />
            </a>
            <a href="http://www.google.com" className={classes.ref} target='blank' >
            <FacebookIcon />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
