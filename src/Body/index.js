import React from 'react'
import injectSheet from 'react-jss'
import TemperatureDisplay from './TemperatureDisplay'

const Body = ({classes}) => {
  return (
    <div className={classes.main}>
      <TemperatureDisplay/>
    </div>
  )
}

const styles = {
  main: {
    boxSizing: 'border-box',
    padding: 40,
    width: '100%',
    backgroundColor: "lightBlue",
  },
}

export default injectSheet(styles)(Body)
