import React, { useState,} from 'react'
import Navbar from '../../Components/Navbar'
import { makeStyles } from '@material-ui/core/styles'
import photos from './photos'
import Footer from '../../Components/Footer'
import ResponsiveGallery from 'react-responsive-gallery'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
// import LazyLoad from 'react-lazyload'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  buttonGroup: {
    position: 'sticky',
    top: 0,
    margin: 'auto',
    flexWrap: 'nowrap',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  button: {
    paddingLeft: '1.4rem',
    paddingRight: '1.4rem',
  },
  select: {
    width: '100%',
    position: 'sticky',
    backgroundColor: theme.palette.primary.main,

    top: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  scroll: {
    position: 'fixed',
    zIndex: 10,
    right: 20,
    bottom: 20,
    [theme.breakpoints.down('sm')]: {
      bottom:50,
    },
  },
}))
function Portfolio() {
  const classes = useStyles()
  const [selected, setSelected] = useState([true, false, false, false, false])
  const [gallery, setGallery] = useState(0)
  const [showScroll, setShowScroll] = useState(false)
  
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // FIXME: Unbind this event
  window.addEventListener('scroll', checkScrollTop)

  function toggle(index) {
    let newArr = [false, false, false, false, false]
    newArr[index] = !newArr[index]
    setSelected(newArr)
    setGallery(index)
    scrollTop()
  }

  return (
    <div>
      <Navbar />
      <div>
        <ButtonGroup fullWidth className={classes.buttonGroup} size="small" variant="outlined">
          <Button
            className={classes.button}
            size="small"
            variant={selected[0] ? 'contained' : 'outlined'}
            color="secondary"
            onClick={() => toggle(0)}
          >
            All Photos
          </Button>
          <Button
            className={classes.button}
            size="small"
            variant={selected[1] ? 'contained' : 'outlined'}
            color="secondary"
            onClick={() => toggle(1)}
          >
            Senior Portraits
          </Button>
          <Button
            className={classes.button}
            size="small"
            variant={selected[2] ? 'contained' : 'outlined'}
            color="secondary"
            onClick={() => toggle(2)}
          >
            Family
          </Button>
          <Button
            className={classes.button}
            size="small"
            variant={selected[3] ? 'contained' : 'outlined'}
            color="secondary"
            onClick={() => toggle(3)}
          >
            Content Creator
          </Button>
          <Button
            className={classes.button}
            size="small"
            variant={selected[4] ? 'contained' : 'outlined'}
            color="secondary"
            onClick={() => toggle(4)}
          >
            Solo Portrait
          </Button>
        </ButtonGroup>
        {/* <FormControl className={classes.formControl}> */}
        <Select
          value={gallery}
          className={classes.select}
          onChange={(e) => toggle(e.target.value)}
          defaultValue="All Photos"
          color="secondary"

          // displayEmpty
          // className={classes.selectEmpty}
          // inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={0}>All Photos</MenuItem>
          <MenuItem value={1}>Senior Photos</MenuItem>
          <MenuItem value={2}>Family Photos</MenuItem>
          <MenuItem value={3}>Content Creator</MenuItem>
          <MenuItem value={4}>Solo Photos</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
        {/* </FormControl> */}

        <ResponsiveGallery images={photos[gallery].src} useLightBox />
        <ArrowUpwardIcon fontSize="large" onClick={scrollTop} className={classes.scroll} style={{ display: showScroll ? 'flex' : 'none'}} />
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
