import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'

const apiKey = 'b2077944e95bdb0c5e00862011d622ad'

class InputBox extends React.PureComponent {
  state = {
    city: "",
    error: null,
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
    const domain = "http://api.openweathermap.org/data/2.5/weather"
    const {city} = this.state
    const params = `?q=${city}&units=imperial&appid=${apiKey}`

    if (!city || !city.length > 0) return
    let url = `${domain}${params}`

    axios.get(`${url}`)
    .then(res => {
      this.setState({error: null})

      const {data} = res
      const main = data && data.main
      const {temp} = main

      console.log({temp})
    })
    .catch(error => {
      this.setState({error: "Please Enter a Valid City Name"})

      console.log({error})
    })
  }

  render() {
    const {error} = this.state

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
        value={this.state.city}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    )
  }
}

export default InputBox
