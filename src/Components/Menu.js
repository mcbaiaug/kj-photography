import React from 'react'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex:20,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  button: {
    fontSize: '1.3rem',
    flexGrow: 1,
    color: theme.palette.secondary.main,
    // textDecoration: 'underlined',
    border: 'black',
  },
  link:{
    textDecoration: 'none',
    color: 'white',

  },
}))

function Menu() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])
  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          className={classes.button}
          onClick={handleToggle}
        >
          Menu
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem component={Link} className={classes.link} href="/portfolio" onClick={handleClose}>
                      Portfolio
                    </MenuItem>
                    <MenuItem component={Link} className={classes.link} href="/about" onClick={handleClose}>
                      About
                    </MenuItem>
                    <MenuItem component={Link} className={classes.link} href="/pricing" onClick={handleClose}>
                      Pricing
                    </MenuItem>
                    <MenuItem component={Link} className={classes.link} href="/contact/senior-session" onClick={handleClose}>
                      Contact
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  )
}

export default Menu
