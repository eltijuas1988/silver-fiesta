import * as React from 'react'
import injectSheet from 'react-jss'
import InputBox from './InputBox'
import Message from './Message'

class TemperatureDisplay extends React.PureComponent {
  state = {
    city: "",
  }

  onChange = (e) => {
    this.setState({
      city: e.target.value,
    })
  }

  render() {
    const {classes} = this.props
    const {city} = this.state

    return (
      <div>
        <div className={classes.input}>
          <InputBox city={city} onChange={this.onChange}/>
        </div>
        <Message/>
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
