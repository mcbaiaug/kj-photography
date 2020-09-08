import Navbar from '../Components/Navbar'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import ValidationField from '../Components/ValidationField'
import emailjs from 'emailjs-com'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Footer from '../Components/Footer'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import MenuItem from '@material-ui/core/MenuItem'


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
  select: {
    // textDecoration: 'none',
    // backgroundColor: 'transparent',
    color: 'secondary',
  },
  highlight:{
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function Contact(props) {
  const classes = useStyles()
  const [description, setDescription] = useState('')
  const [session, setSession] = useState(props.match.params.session)
  const [open, setOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)
  const[firstError, setFirstError] = useState(true) 
  const[lastError, setLastError] = useState(true) 
  const[emailError, setEmailError] = useState(true) 
  const[phoneError, setPhoneError] = useState(true) 

  function handleChangeFirst(bool){
    setFirstError(bool)
    console.log('first error')
  }
  function handleChangeLast(bool){
    setLastError(bool)
    console.log('last error')

  }
  function handleChangeEmail(bool){
    setEmailError(bool)
    console.log('email error')

  }
  function handleChangePhone(bool){
    setPhoneError(bool)
    console.log('phone error')

  }

  // function validate(){
  //   if(firstError || lastError || emailError || phoneError){
  //     setError(true)
  //     console.log('big oopsie')
  //     console.log(error)
  //   }
  // }

  // setError(firstError || lastError || emailError || phoneError)
  

  // console.log(date)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
    setErrorMsg(false)
  }

  function sendEmail(e) {
    // e.target.reset()
    e.preventDefault()
    
    // console.log(e.target.value)
    // console.log('Context Check')
    // console.log(error)
    // console.log(e.target)
    // kj.photography.wi@gmail.com

    if(!(firstError || lastError || emailError || phoneError)){ 
      console.log('sent')
    // emailjs.sendForm('kj', 'kj_photography', e.target, 'user_z4l3HmMlqcbrsI9k53dve').then(
    //   (result) => {
    //     console.log(result.text)
    //   },
    //   (error) => {
    //     console.log(error.text)
    //   }
    // )
    }
  }

  // function Copyright() {
  //   return (
  //     <Typography variant="body1" color="textSecondary" align="center">
  //       {'Copyright © '}
  //       <Link color="inherit" href="https://material-ui.com/">
  //         Companion
  //       </Link>{' '}
  //       {new Date().getFullYear()}
  //       {'.'}
  //     </Typography>
  //   )
  // }

  return (
    <React.Fragment>
      <Navbar />

      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h4" style={{ fontFamily: 'Allura-Regular', fontDisplay: 'swap' }}>
            Contact
            {/* {JSON.stringify(props)} */}
            {/* {props.path.params.session} */}
            {/* {console.log(props.match.params.session)} */}
          </Typography>
          {/* FIXME: Add a submit function https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/ */}
          {/* onSubmit={(event)=> sendEmail(event)} */}
          <form className={classes.form} onSubmit={(event) => sendEmail(event)} noValidate>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                {/* <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="given-name"
                  label="First Name"
                  name="First Name"
                  value={firstName}
                  // autoComplete="given-name"
                  color="secondary"
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                /> */}
                <ValidationField name="First Name" id="given-name " isRequired onChange={handleChangeFirst} />
               
              </Grid>
              <Grid item xs={12} sm={6}>
                <ValidationField autoComplete="family-name" id="family-name" name="Last Name" isRequired onChange={handleChangeLast} />
              </Grid>
              <Grid item xs={12}>
                <ValidationField autoComplete="email" id="email" isEmail name="Email Address" isRequired onChange={handleChangeEmail}/>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="date"
                  variant="outlined"
                  color="secondary"
                  label="Select a Date"
                  type="date"
                  name="Date"
                  defaultValue={new Date().toISOString().slice(0, 10)}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <ValidationField id="phone number" name="Phone Number" isRequired onChange={handleChangePhone} />
              </Grid>

              <Grid item xs={12}>
                {/* <TextField
                  variant="outlined"
                  fullWidth
                  id="subject" //for screen readers
                  name="Subject"
                  label="Subject"
                  value={subject}
                  color="secondary"
                  onChange={(e) => {
                    setSubject(e.target.value)
                  }}
                /> */}
                <FormControl style={{ minWidth: '100%' }}>
                  <InputLabel htmlFor="">Session</InputLabel>
                  <Select
                    defaultValue={'senior-session'}
                    color="secondary"
                    value={session}
                    required
                    name="Session"
                    onChange={(e) => setSession(e.target.value)}
                    variant="outlined"
                    // inputProps={{

                    // }}
                  >
                    <MenuItem
                      className={classes.highlight}
                      aria-label="Highscool Senior Session"
                      value={'senior-session'}
                    >
                      Highschool Senior Session
                    </MenuItem>
                    <MenuItem
                      className={classes.highlight}
                      aria-label="Content Creator Session"
                      value={'content-creator'}
                    >
                      Content Creator Session
                    </MenuItem>
                    <MenuItem className={classes.highlight} aria-label="Solo Session" value={'solo-session'}>
                      Solo Session
                    </MenuItem>
                    <MenuItem className={classes.highlight} aria-label="Family Session" value={'family-session'}>
                      Family Session
                    </MenuItem>
                    <MenuItem className={classes.highlight} aria-label="Boudoir Session" value={'boudoir-session'}>
                      Boudoir Session
                    </MenuItem>
                    <MenuItem className={classes.highlight} aria-label="Other" value={'other'}>
                      Other
                    </MenuItem>
                  </Select>
                  {session === 'other' && (
                    <FormHelperText>Please leave a description of what you would like!</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  multiline
                  fullWidth
                  id="description" //for screen readers
                  name="Description"
                  label="Description"
                  value={description}
                  color="secondary"
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={() => {
                // validate()
                // console.log(error)
                setErrorMsg(firstError || lastError || emailError || phoneError)
                setOpen(!(firstError || lastError || emailError || phoneError))}} //opposite of error? was true
            >
              Submit
            </Button>
            {/* <input type="submit" value="Submit"></input> */}
          </form>
        </div>
        <Snackbar open={open} autoHideDuration={80000} onClose={handleClose}>
          <Alert severity="info" onClose={handleClose}>
            Thank you! I will be sending an email shortly!
          </Alert>
        </Snackbar>
        <Snackbar open={errorMsg} autoHideDuration={80000} onClose={handleClose}>
          <Alert severity="warning" onClose={handleClose}>
            Form errors!
          </Alert>
        </Snackbar>
        <Box mt={5}>{/* <Copyright /> */}</Box>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default Contact
