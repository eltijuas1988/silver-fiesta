import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'

const domain = "http://api.openweathermap.org/data/2.5/weather"
const apiKey = 'b2077944e95bdb0c5e00862011d622ad'

class InputBox extends React.PureComponent {
  state = {
    error: null,
  }

  onChange = (e) => {
    this.props.onChange(e)
  }

  onKeyDown = (e) => {
    if (e.key === "Enter") {this.sendRequest()}
  }

  sendRequest = () => {
    const {city} = this.props

    if (!city || !city.length > 0) return
    const params = `?q=${city}&units=imperial&appid=${apiKey}`
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
        onKeyDown={this.onKeyDown}
      />
    )
  }
}

export default InputBox
