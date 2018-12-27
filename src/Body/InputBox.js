import React from 'react'
import TextField from '@material-ui/core/TextField'

const InputBox = () => {
  return (
    <div>
      <TextField
        id="outlined-full-width"
        label="City"
        placeholder="Please Enter a Name For a City"
        fullWidth
        margin="none"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  )
}

export default InputBox
