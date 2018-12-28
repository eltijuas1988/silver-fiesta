import * as React from 'react'
import injectSheet from 'react-jss'
import InputBox from './InputBox'
import Message from './Message'

class TemperatureDisplay extends React.PureComponent {
  render() {
    const {classes} = this.props

    return (
      <div>
        <div className={classes.input}>
          <InputBox/>
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
