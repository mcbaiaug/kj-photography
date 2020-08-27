import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardInfo from './CardInfo'
import Carousel from 'react-material-ui-carousel'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.primary,
    backgroundColor: theme.palette.secondary.dark,
  },
  formText: {
    fontFamily: 'Allura-Regular',
  },
  card: {
    backgroundColor: 'transparent',
    marginRight: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
  rightGrid: {
    // marginTop: '5rem',
  },
  selectedCard: {
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: theme.palette.secondary.dark,
  },
  carousel: {
    height: '40rem',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    height: '45rem',
    width: '100%',
    objectFit: 'contain',
    // marginRight:'-10rem',
    // display: 'block', /* remove extra space below image */
  },
}))
function Pricing() {
  const classes = useStyles()
  const [cardNum, setCardNum] = useState(0)
  function selected() {
    return (
      <React.Fragment>
        {/* <img src={CardInfo[cardNum].pictures[0]}></img> */}
        <Carousel animation="slide"  className={classes.carousel}>
          {CardInfo[cardNum].pictures.map((tile) => (
            <img src={tile} className={classes.img}></img>
          ))}
        </Carousel>
        <Link href={`/contact/${CardInfo[cardNum].value}`} component={Button} style={{marginTop:'1rem'}}variant="body1">{CardInfo[cardNum].desc}</Link>
      </React.Fragment>
    )
    // switch(cardInfo){
    //   case 1 :
    //     return 'This is the 1st render'
    //   default:
    //     return 'this is my default render'
    // }

    // if(cardInfo===1){
    //   return 'This is the case one render'
    // }else{
    //   return 'this is a default'
    // }
  }
  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7} className={classes.textContainer}>
          <Grid container direction="column">
            <Grid item xs={12}>
              <Typography variant="h3" style={{ fontFamily: 'Allura-Regular' }}>
                {CardInfo[cardNum].title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Container disableGutters maxWidth="md" style={{}}>
                {selected()}
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5} className={classes.rightGrid}>
          <Typography variant="h3" color="secondary" style={{ fontFamily: 'Allura-Regular' }}>
            Pricing
          </Typography>
          <Divider />
          <Card className={1 === cardNum ? classes.selectedCard : classes.card} onClick={() => setCardNum(1)}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="span">
                  High School Senior Session
                </Typography>
                <Typography variant="h6" style={{ paddingLeft: '1.8rem' }} color="secondary" component="span">
                  $50
                </Typography>
                <Typography variant="body2" component="p">
                  1 Hour - 1 1/2 Hours
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={2 === cardNum ? classes.selectedCard : classes.card} onClick={() => setCardNum(2)}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="span">
                  Family Session
                </Typography>
                <Typography variant="h6" style={{ paddingLeft: '1.8rem' }} color="secondary" component="span">
                  $40
                </Typography>
                <Typography variant="body2" component="p">
                  1 Hour
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={3 === cardNum ? classes.selectedCard : classes.card} onClick={() => setCardNum(3)}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="span" noWrap>
                  Content Creator Session
                </Typography>
                <Typography variant="h6" style={{ paddingLeft: '1.8rem' }} color="secondary" component="span">
                  $35/monthly
                </Typography>
                <Typography variant="body2" component="p">
                  45 Minutes - 1 Hour
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={4 === cardNum ? classes.selectedCard : classes.card} onClick={() => setCardNum(4)}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="span">
                  Solo Session
                </Typography>
                <Typography variant="h6" style={{ paddingLeft: '1.8rem' }} color="secondary" component="span">
                  $40
                </Typography>
                <Typography variant="body2" component="p">
                  45 Minutes - 1 Hour
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={5 === cardNum ? classes.selectedCard : classes.card} onClick={() => setCardNum(5)}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="span">
                  Boudoir Session
                </Typography>
                <Typography variant="h6" style={{ paddingLeft: '1.8rem' }} color="secondary" component="span">
                  $40
                </Typography>
                <Typography variant="body2" component="p">
                  1 Hour - 1 1/2 Hours
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Divider/>

        </Grid>
      </Grid>
    </div>
  )
}

export default Pricing
