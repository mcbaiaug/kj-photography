import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    // textDecoration: 'none',
    textDecorationColor: 'white',
  },
  button: {
    fontSize: '1.3rem',
    color: theme.palette.secondary.main,
    // textDecoration: 'underlined',
    border: 'black',
  },
  ref: {
    textDecoration: 'none',
    color: 'white',
  },
}))
function Navbar() {
  const classes = useStyles()



  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ paddingBottom: '.4rem' }}>
        <Toolbar>
          <Button component={Link} href='/' variant='outlined' className={classes.button}>
            Home
          </Button>
          <Button component={Link} href="/about" variant='outlined' className={classes.button}>
            About
          </Button>
          <Typography style={{ fontFamily: 'Allura-Regular', flexGrow: 1 }} variant="h3">
            KJ Photography
          </Typography>
          <Button component={Link} href="/pricing" variant='outlined' className={classes.button}>
            Pricing
          </Button>
          <Button component={Link} href="/contact" variant='outlined' className={classes.button}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
