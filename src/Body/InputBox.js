import React from 'react'
import TextField from '@material-ui/core/TextField'

const InputBox = ({city, error, onChange}) => {
  return (
    <TextField
      error={!!error}
      id="outlined-full-width"
      label={"City"}
      style={{paddingBottom: error ? 0 : 20}}
      helperText={error}
      placeholder="Please Enter a Name For a City"
      fullWidth
      margin="none"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      autoFocus
      value={city}
      onChange={onChange}
    />
  )
}

export default InputBox
