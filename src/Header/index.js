import React from 'react'
import injectSheet from 'react-jss'

const Header = ({classes}) => {
  const {main, greeting, instructions} = classes

  return (
    <div className={main}>
      <div className={greeting}>Welcome to Silver Fiesta!!</div>
      <div className={instructions}>
        Type in a City to See the current Weather
      </div>
    </div>
  )
}

const styles = {
  main: {
    textAlign: 'center',
  },
  greeting: {
    fontSize: 40,
  },
  instructions: {
    fontSize: 20,
  },
}

export default injectSheet(styles)(Header)
