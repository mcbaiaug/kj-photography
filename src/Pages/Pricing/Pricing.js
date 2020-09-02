import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardInfo from './CardInfo'
import Carousel from 'react-material-ui-carousel'
import Divider from '@material-ui/core/Divider'
import Footer from '../../Components/Footer'

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
      // height:'4rem',
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
    
    [theme.breakpoints.down('sm')]: {
      marginTop:'-50px',
    },
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
  textContainer:{
    [theme.breakpoints.down('sm')]: {
      order:2,
    },
  },
  imgContainer:{
    [theme.breakpoints.down('sm')]: {
      order:1,
    },
  },
  sessionTitle: {
    [theme.breakpoints.down('sm')]: {
      display:'none',
    },
  },
  carButton: {
    marginTop:'1rem',
    border:'2px solid',
    borderColor: theme.palette.secondary.dark,
    [theme.breakpoints.down('sm')]: {
      display:'none',
    },
  },
  display:{
    border:'2px solid',
    borderColor: theme.palette.secondary.dark,
    [theme.breakpoints.up('sm')]: {
      display:'none',
      
      
    },
  },
  description:{
    [theme.breakpoints.up('sm')]: {
      display:'none',
    },
  },
  rate:{
    marginLeft:'2rem',
  },
  extraFooterDesktop:{
    [theme.breakpoints.down('sm')]: {
      display:'none',
    },
  },
  extraFooterMobile:{
    [theme.breakpoints.up('sm')]: {
      display:'none',
    },
  },
}))
function Pricing() {
  const classes = useStyles()
  const [cardNum, setCardNum] = useState(0)
  
  
  function selected() {
    return (
      <React.Fragment>
        {/* <img src={CardInfo[cardNum].pictures[0]}></img> */}
        <Link href={`/contact/${CardInfo[cardNum].value}`} component={Button}  className={classes.display} variant="body1">{CardInfo[cardNum].desc}</Link>

        <Carousel animation="slide"  className={classes.carousel}>
          {CardInfo[cardNum].pictures.map((tile, id) => (
            <img key={id} src={tile} alt={tile} className={classes.img}></img>
          ))}
        </Carousel>
        <Link href={`/contact/${CardInfo[cardNum].value}`} component={Button} className={classes.carButton} variant="body1">{CardInfo[cardNum].desc}</Link>
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
    <div style={{ overflow:'hidden', }}>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7} className={classes.textContainer}>
          <Grid container direction="column">
            <Grid item xs={12} className={classes.sessionTitle}>
              <Typography variant="h3" style={{ fontFamily: 'Allura-Regular', fontDisplay: 'swap', }}>
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
          <Typography variant="h3" color="secondary" style={{ fontFamily: 'Allura-Regular', fontDisplay: 'swap', }}>
            Pricing
          </Typography>
          <Divider />
          <Card className={1 === cardNum ? classes.selectedCard : classes.card} onClick={() => setCardNum(1)}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="span">
                  High School Senior Session
                </Typography>
                <Typography variant="h6" className={classes.rate} color="secondary" component="span">
                  $50
                </Typography>
                <Typography variant="body2" component="p" className={classes.description}>
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
                <Typography variant="h6" className={classes.rate} color="secondary" component="span">
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
                <Typography gutterBottom variant="h6" component="span">
                  Content Creator Session
                </Typography>
                <Typography variant="h6" className={classes.rate} color="secondary" component="span">
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
                <Typography variant="h6" className={classes.rate} color="secondary" component="span">
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
                <Typography variant="h6" className={classes.rate} color="secondary" component="span">
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
      {/* <Footer style={{}} /> */}
      </Grid>
      <Footer className={classes.extraFooterMobile} />
    </div>
  )
}

export default Pricing
