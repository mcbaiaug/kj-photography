import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Menu from './Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: 'Allura-Regular',
     fontDisplay: 'swap', 
     [theme.breakpoints.down('sm')]: {
      fontSize:'3.2rem',
    },
  },
  link: {
    // textDecoration: 'none',
    textDecorationColor: 'white',
  },
  button: {
    fontSize: '1.3rem',
    flexGrow: 1,
    color: theme.palette.secondary.main,
    // textDecoration: 'underlined',
    border: 'black',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  ref: {
    textDecoration: 'none',
    color: 'white',
  },
  menu: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

}))
function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ paddingBottom: '.4rem' }}>
        <Toolbar>
          <Button component={Link} href="/portfolio" variant="outlined" className={classes.button}>
            Portfolio
          </Button>
          <Button component={Link} href="/about" variant="outlined" className={classes.button}>
            About
          </Button>
          <a href="/" style={{ textDecoration: 'none', color: 'white', flexGrow: 1 }}>
            <Typography className={classes.title} variant="h3">
              KJ Photography
            </Typography>
          </a>
          <Button component={Link} href="/pricing" variant="outlined" className={classes.button}>
            Pricing
          </Button>
          <Button component={Link} href="/contact" variant="outlined" className={classes.button}>
            Contact
          </Button>
        </Toolbar>
        <Toolbar className={classes.menu}>
          <Menu />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
