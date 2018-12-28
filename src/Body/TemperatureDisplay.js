import * as React from 'react'
import axios from 'axios'
import injectSheet from 'react-jss'
import InputBox from './InputBox'
import Message from './Message'

class TemperatureDisplay extends React.PureComponent {
  state = {
    city: "",
    temperature: undefined,
    error: undefined,
  }

  onChange = (e) => {
    this.setState({
      city: e.target.value,
    })
  }

  onKeyDown = (e) => {
    if (e.key === "Enter") {this.sendRequest()}
  }

  updateTemperature = ({temp}) => {
    this.setState({temperature: temp})
  }

  updateError = ({error}) => {
    this.setState({error})
  }

  sendRequest = () => {
    const domain = "http://api.openweathermap.org/data/2.5/weather"
    const apiKey = 'b2077944e95bdb0c5e00862011d622ad'

    const {city} = this.state

    if (!city || !city.length > 0) return null
    const params = `?q=${city}&units=imperial&appid=${apiKey}`
    let url = `${domain}${params}`

    axios.get(`${url}`)
    .then(res => {
      const {data} = res
      const main = data && data.main
      const {temp} = main

      this.updateTemperature({temp})

      console.log({temp})
    })
    .catch(error => {
      this.updateError({error})
      console.log({error})
    })
  }

  composeTemperatureMessage = () => {
    const {city, temperature} = this.state
    if (!city && !temperature) return null

    return `The current temperature in ${city} is ${temperature} degrees F.`
  }

  render() {
    const {classes} = this.props
    const {city} = this.state

    return (
      <div onKeyDown={this.onKeyDown}>
        <div className={classes.input}>
          <InputBox city={city} onChange={this.onChange}/>
        </div>
        <Message message={this.composeTemperatureMessage()}/>
      </div>
    )
  }
}

const styles = {
  input: {
    marginBottom: 15,
  },
}

export default injectSheet(styles)(TemperatureDisplay)
