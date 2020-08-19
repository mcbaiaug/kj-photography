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
  buttonScale: {
    fontSize: '1.3rem',
    color: '#00a0a0',
    textDecoration: 'underlined',
    border: 'black',

  },
  ref:{
    textDecoration:'none',
    color:'white',

  }
}))
function Navbar() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
       {/* FIXME: Find a better way to do this rather than wrapping a button within a link */}
        <Link className={classes.link}>
            <Button className={classes.buttonScale} color="primary" variant="outlined">
              About
            </Button>
          </Link>
          <Link className={classes.link}>
            <Button className={classes.buttonScale} color="primary" variant="outlined">
              Portfolio
            </Button>
          </Link>
        <Typography style={{ fontFamily: 'Allura-Regular', flexGrow:1, }} variant="h3">
            KJ Photography
          </Typography>
          <Link className={classes.link}>
            <Button className={classes.buttonScale} color="primary" variant="outlined">
              Pricing
            </Button>
          </Link>
          <Link className={classes.link}>
            <Button className={classes.buttonScale} color="primary" variant="outlined">
              Contact
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
