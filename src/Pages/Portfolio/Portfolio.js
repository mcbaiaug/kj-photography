import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import images from './images'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import Footer from '../../Components/Footer'
import AspectRatioSharpIcon from '@material-ui/icons/AspectRatioSharp'
import ClearIcon from '@material-ui/icons/Clear'
import useWindowDimensions from '../../Components/useWindowDimensions'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    height: '30rem', //Was 45 rem
    width: '100%',
    objectFit: 'cover',
  },
  resize: {
    width: 'auto',
    // height: '5rem',
    // maxHeight: '1vh',
    backgroundColor: theme.palette.primary.dark,
    position: 'fixed',
    top: '50%',
    left: '50%',
    // -webkit-transform: translate(-50%, -50%),
    WebkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
  },
  resizeImage: {
    maxWidth: 'auto',
    maxHeight: '100%',
    height: '50rem',
    [theme.breakpoints.down('sm')]: {
      height: '35rem',
    },
    // width: 'auto',
    // objectFit: 'cover',
  },
  blur: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    WebkitFilter: 'blur(5px)',
    MozFilter: 'blur(5px)',
    OFilter: 'blur(5px)',
    msFilter: 'blur(5px)',
  },
  x: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.7,
  },
}))
function Portfolio() {
  // FIXME: Optimize the image grid also the resize images tab could open the image in a new page
  const classes = useStyles()
  const [resize, setResize] = useState('')
  const node = useRef()
  const [open, setOpen] = useState(false)
  const { width } = useWindowDimensions()
  const [focus, setFocus] = useState(false)

  // const handleClickOpen = (tile) => {
  //   // setSelectedTile(tile);
  //   console.log('clicked')
  //   console.log(tile)
  // }
  // function handleResize(src, title){
  //   console.log('effort given')
  //   return(
  //     <div className={classes.resize}>
  //       <img src={pic1} alt={title}></img>
  //     </div>
  //   )
  // }
  function column() {
    console.log('check')
    if (width > 1400) {
      return 4
    }
    // if(980>width<1400){
    //   return 2
    // }
    if (width < 960) {
      return 1
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  // const handleChange = () => {
  //   setOpen(false)
  // }

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      setOpen(false)
      console.log('outside')
      return
    }
    // outside click
    console.log('inside')
  }

  return (
    <div>
      <Navbar />
      {open && (
        <div className={classes.resize}>
          <IconButton
            aria-label="close resize"
            onClick={(e) => {
              setOpen(!open)
            }}
            className={classes.x}
          >
            <ClearIcon />
          </IconButton>

          <img className={classes.resizeImage} src={resize} alt=""></img>
        </div>
      )}
      <div className={open ? classes.blur : classes.root} ref={node}>
        <GridList cellHeight="auto" spacing={10} cols={column()} className={classes.gridList}>
          {images.map((tile) => (
            <GridListTile key={tile.src}>
              <img className={classes.image} src={tile.src} alt={tile.title} />
              {console.log('render images')}

              <GridListTileBar
                title={tile.title}
                actionIcon={
                  <IconButton
                    aria-label={`resize ${tile.title}`}
                    onClick={(e) => {
                      setOpen(!open)
                      setResize(tile.src)
                    }}
                    className={classes.icon}
                  >
                    <AspectRatioSharpIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>

      {/* <div className={classes.root}>
        <GridList cellHeight="auto" className={classes.gridList} cols={4} spacing={4}>
          {images.map((tile) => (
            <GridListTile key={tile.img}>
              <img className={classes.image} src={tile.src} alt={tile.title} />
              {/* <GridListTileBar
              title={tile.title}
              // subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                  value={tile.id}
                  onClick={() => handleClickOpen(tile)}
                >
                  <InfoIcon />
                </IconButton>
              }
      //       /> */}
      {/* //       </GridListTile> */}
      {/* //     ))} */}
      {/* //   </GridList> */}
      {/* // </div> */}
      <Footer />
    </div>
  )
}

export default Portfolio
