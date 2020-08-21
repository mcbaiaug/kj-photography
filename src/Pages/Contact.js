import Navbar from '../Components/Navbar'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import ValidationField from '../Components/ValidationField'
import emailjs from 'emailjs-com'

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
}))

function Contact() {
  const classes = useStyles()
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')

  // console.log(date)

  function sendEmail(e) {
    // console.log(e)
    // e.preventDefault()
    // e.preventDefault()
    emailjs.sendForm('kj', 'kj_photography', e.target, 'user_z4l3HmMlqcbrsI9k53dve').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    e.target.reset()
  }

  function Copyright() {
    return (
      <Typography variant="body1" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Companion
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }

  return (
    <React.Fragment>
      <Navbar />

      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h4" style={{ fontFamily: 'Allura-Regular' }}>
            Contact
          </Typography>
          {/* FIXME: Add a submit function https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/ */}
          <form className={classes.form} onSubmit={sendEmail} noValidate>
            <Grid container spacing={4}>
              <Grid item xs={6}>
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
                <ValidationField name="First Name" id="given-name " isRequired />
              </Grid>
              <Grid item xs={6}>
                <ValidationField autoComplete="family-name" id="family-name" name="Last Name" isRequired />
              </Grid>
              <Grid item xs={12}>
                <ValidationField autoComplete="email" id="email" isEmail name="Email Address" isRequired />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="date"
                  variant="outlined"
                  color="secondary"
                  label="Select a Date"
                  type="date"
                  name='Date'
                  defaultValue={new Date().toISOString().slice(0, 10)}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                {/* <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone number" //for screen readers
                  name="phone number"
                  label="Phone Number"
                  value={phone}
                  color="secondary"
                  onChange={(e) => {
                    setPhone(e.target.value)
                  }}
                /> */}
                <ValidationField id="phone number" name="Phone Number" isRequired />
              </Grid>

              <Grid item xs={12}>
                <TextField
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
                />
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
              onClick={(event)=> sendEmail(event)}
            >
              Submit
            </Button>
            {/* <input type="submit" value="Submit"></input> */}
            <Grid container justify="center">
              {/* <Grid item>
                <Link href="/register" variant="body1" color="secondary">
                  Don't have an account? Sign Up
                </Link>
              </Grid> */}
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Contact
