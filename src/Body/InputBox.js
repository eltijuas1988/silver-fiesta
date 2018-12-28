import React from 'react'
import TextField from '@material-ui/core/TextField'

class InputBox extends React.PureComponent {
  state = {
    error: null,
  }

  onChange = (e) => {
    this.props.onChange(e)
  }

  render() {
    const {error} = this.state
    const {city} = this.props

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
        onChange={this.onChange}
      />
    )
  }
}

export default InputBox
