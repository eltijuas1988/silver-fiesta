import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'

const apiKey = 'b2077944e95bdb0c5e00862011d622ad'

class InputBox extends React.PureComponent {
  state = {
    city: "",
  }

  onChange = (e) => {
    this.setState({
      city: e.target.value,
    })
  }

  onKeyDown = (e) => {
    if (e.key === "Enter") {this.sendRequest()}
  }

  sendRequest = () => {
    const {city} = this.state

    if (!city || !city.length > 0) return
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
        value={this.state.city}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    )
  }
}

export default InputBox
