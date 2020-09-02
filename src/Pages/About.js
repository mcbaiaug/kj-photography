import React from 'react'
import Navbar from '../Components/Navbar'
import { Grid, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import profile from './../Images/Profile.jpg'
import Footer from '../Components/Footer'

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
  emptyGrid: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  img: {

    width: '90%',
    height: 'auto',
    paddingTop:'15%',
    paddingRight:'15%',
    [theme.breakpoints.down('sm')]: {
    
      paddingTop:'0%',
      paddingRight:'0%',
    },
  },
  paragraph:{
    textIndent:'2rem',
  },
  imgContainer:{

    [theme.breakpoints.down('sm')]: {
      order:1,
    },
  },
  textContainer:{
  
    [theme.breakpoints.down('sm')]: {
      order:2,
    },
  },
}))
function About() {
  const classes = useStyles()
  return (
    <div style={{overflow:'hidden'}}>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} className={classes.textContainer} >
          <Grid container direction="column">
            <Grid item xs={12}>
              <Typography variant="h3" style={{ fontFamily: 'Allura-Regular', fontDisplay: 'swap', }}>
                About
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Container maxWidth="md">
                <Typography variant="body2" align="justify" paragraph className={classes.paragraph}>
                  Hello, my name is KJ and I am a new photographer in the western Wisconsin area. When I first started
                  photography it was my freshman year of college and I just did for fun with my iPod camera. My family
                  and friends said they were really good and I should look into buying a camera. Fortunately, my
                  boyfriend believed in me enough to buy me a real camera last year. Now, I found I really enjoy taking
                  pictures of people. I enjoy making others feel good about themselves and making them feel comfortable.
                  When taking photos of others they have said I make them feel confident about themselves and they have
                  fun with me.
                </Typography>
                <Typography variant="body2" align="justify" paragraph className={classes.paragraph}>
                  Since then, I have refined my passion and I'm taking on larger projects. My goal is to explore my
                  passion, and in so doing, help as many people capture the meaningful moments in their lives as
                  possible!
                </Typography>

                <Typography variant="body2" align="justify" paragraph className={classes.paragraph}>
                  My friends describe me as fun, determined, hard working, loves people and making them happy,
                  personable, and innovative, which I believe all of these qualities play a role in my photography
                  skills.
                </Typography>
                <Typography variant="body2" align="justify" paragraph className={classes.paragraph}>
                  I can't wait to meet you and help you, your family, your loved ones, or even your pets capture the
                  best parts of your lives!
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.imageContainer} sm={4}>
          <img src={profile} className={classes.img} alt=' of KJ'></img>
        </Grid>
      </Grid>
      <Footer />

      {/* <Grid container spacing={2} justify='center'>
      <Grid item xs={12} sm={8}></Grid>
       <Grid container direction='column'>
        <Grid item xs={12} sm={8}>
          <Typography variant='h3'style={{fontFamily:'Allura-Regular'}} >
            About
          </Typography>
          </Grid> 
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={profile}></img>
        </Grid>
      </Grid> */}
    </div>
  )
}

export default About
