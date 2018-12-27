import React from 'react'
import axios from 'axios'
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

  sendRequest = () => {
    let apiKey = 'b2077944e95bdb0c5e00862011d622ad'
    let city = 'portland'
    let url =
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    axios.get(`${url}`)
    .then(res => {
      const {data} = res
      const main = data && data.main
      const {temp} = main
      console.log({temp})
    })
    .catch(error => {
      console.log({error})
    })
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
