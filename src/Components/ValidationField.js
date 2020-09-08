import React, { useState } from 'react'
import * as emailValidator from 'email-validator'
import TextField from '@material-ui/core/TextField'
// import { ErrorContext } from '../Context/errorContext'


function ValidationField(props) {
  const [inputFlag, setInputFlag] = useState(false)
  const [input, setInput] = useState('')
  // const [error, setError] = useContext(ErrorContext)
  function handleChange(bool){
    props.onChange(bool)
  }

  function validate(value) {
    if(value!=='' && !props.isEmail){
      return false
    }
    if(props.isEmail){
      console.log('check')
      console.log(value)
      console.log(!(emailValidator.validate(value)))
      return !(emailValidator.validate(value))
    }
    console.log('aaaaa')
    return false

    
 
  }

  return (
   <React.Fragment>
    <TextField
    variant="outlined"
    required={props.isRequired}
    fullWidth
    id={props.id} //for screen readers
    name={props.name}
    label={props.name}
    autoComplete={props.autoComplete}
    onBlur={() => setInputFlag(true)}
    // {inputValidator.validate(input)&&error}
    error={inputFlag && (input === '' || (props.isEmail ? !emailValidator.validate(input) : false))}
    value={input}
    
    helperText={
      inputFlag && (input === '' || (props.isEmail ? !emailValidator.validate(input) : false))
      ? `Invalid ${props.name}!`
      : ''
    }
    color="secondary"
    onChange={(e) => {
      setInput(e.target.value)
      handleChange(validate(e.target.value))
      // console.log((input !== '' && (props.isEmail ? !emailValidator.validate(input) : true)))
     
      //inputFlag && (input === '' || (props.isEmail ? !emailValidator.validate(input) : false))
    }}
    />
   
    
    {/* {setError(inputFlag && (input === '' || (props.isEmail ? !emailValidator.validate(input) : false)))} */}
    </React.Fragment>
   
  )
}

export default ValidationField
