import * as React from 'react'
import axios from 'axios'
import injectSheet from 'react-jss'
import InputBox from './InputBox'
import Message from './Message'

const openWeatherKey = process.env.REACT_APP_OPEN_WEATHER_MAP_KEY

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

  showErrorMessage = () => {
    this.setState({error: "Please Enter A Valid City."})
  }

  clearErrorMessage = () => {
    this.setState({error: null})
  }

  sendRequest = () => {
    const domain = "http://api.openweathermap.org/data/2.5/weather"

    const {city} = this.state

    if (!city || !city.length > 0) return null
    const params = `?q=${city}&units=imperial&appid=${openWeatherKey}`
    let url = `${domain}${params}`

    axios.get(`${url}`)
    .then(res => {
      const {data} = res
      const main = data && data.main
      const {temp} = main

      this.updateTemperature({temp})
      this.clearErrorMessage()
      this.setState({displayMessage: true})
    })
    .catch(error => {
      this.showErrorMessage()
      console.log({error})
    })
  }

  composeTemperatureMessage = () => {
    const {city, temperature, displayMessage} = this.state

    if (displayMessage) {
      return `The current temperature in ${city} is ${temperature}\xBAF.`
    }
  }

  render() {
    const {classes} = this.props
    const {city, error} = this.state

    return (
      <div onKeyDown={this.onKeyDown}>
        <div className={classes.input}>
          <InputBox city={city} error={error} onChange={this.onChange}/>
        </div>
        <Message message={this.composeTemperatureMessage()} error={error}/>
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
