import React from 'react'
import TextField from '@material-ui/core/TextField'

class InputBox extends React.PureComponent {
  state = {
    textField: "",
  }

  onChange = (e) => {
    this.setState({
      textField: e.target.value,
    })
  }

  onKeyDown = (e) => {
    if (e.key === "Enter") {console.log("Enter Clicked")}
  }

  render() {
    return (
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
        autoFocus
        value={this.state.textField}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    )
  }
}

export default InputBox
