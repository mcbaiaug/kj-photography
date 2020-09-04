import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position:'static',
    bottom:0,
    overflow:'hidden',
    width:'100%',
    [theme.breakpoints.down('sm')]: {
      order:3,
      marginBottom:'30px',
    },
    // marginBottom:'.5rem'
    // marginTop:'2rem',

  },
  ref: {
    textDecoration: 'none',
    color:theme.palette.secondary.dark
  },
}))
function Footer() {
  const classes = useStyles()
  return (
      <Grid container className={classes.root} spacing={2}>
        {/* <Grid item xs={2}>
        <a href="https://www.instagram.com/kj_photography_wi/" className={classes.ref} target="blank">
            <InstagramIcon />
          </a>
        </Grid> */}
        
        
        <Grid item xs={12}>
          <a href="https://www.instagram.com/kj_photography_wi/" className={classes.ref} target="blank">
            <InstagramIcon />
          </a>
          <a href="http://www.google.com" className={classes.ref} target="blank">
            <FacebookIcon />
          </a>
        </Grid>
{/* 
        <Grid item xs={2}>
        <a href="http://www.google.com" className={classes.ref} target="blank">
            <FacebookIcon />
          </a>
        </Grid> */}
      </Grid>
  )
}

export default Footer
