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
    displayMessage: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCity = prevState.city
    const currentCity = this.state.city

    if (prevCity && (prevCity !== currentCity)) {
      this.setState({
        displayMessage: false,
        temperature: null
      })
    }
  }

  onChange = (e) => {
    this.setState({
      city: e.target.value,
    })
  }

  onKeyDown = (e) => {
    const {city, temperature} = this.state

    if (e.key === "Enter") {
      if (city && temperature) {
        this.setState({displayMessage: true})
      }

      this.sendRequest()
    }
  }

  updateTemperature = ({temp}) => {
    this.setState({temperature: temp})
  }

  updateError = ({error}) => {
    this.setState({error})
  }

  showDisplayMessage = () => {
    this.setState({displayMessage: true})
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
      this.showDisplayMessage()
    })
    .catch(error => {
      this.updateError({error})
      console.log({error})
    })
  }

  composeTemperatureMessage = () => {
    const {city, temperature, displayMessage} = this.state

    if (displayMessage) {
      return `The current temperature in ${city} is ${temperature}\xBA F.`
    }
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
