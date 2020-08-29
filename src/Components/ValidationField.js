import React, { useState } from 'react'
import * as emailValidator from 'email-validator'
import TextField from '@material-ui/core/TextField'

function ValidationField(props) {
  const [inputFlag, setInputFlag] = useState(false)
  const [input, setInput] = useState('')

  return (
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
      onChange={(e) => setInput(e.target.value)}
    />
  )
}

export default ValidationField
