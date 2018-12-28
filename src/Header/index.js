import React from 'react'
import injectSheet from 'react-jss'

const Header = ({classes}) => {
  const {root, greeting, instructions} = classes

  return (
    <div className={root}>
      <div className={greeting}>Welcome to Silver Fiesta!!</div>
      <div className={instructions}>
        Type in a City to See the current Weather
      </div>
    </div>
  )
}

const styles = {
  root: {
    textAlign: 'center',
    backgroundColor: '#9BEBA5',
    width: '100%',
    padding: [20, 40, 20, 40],
  },
  greeting: {
    fontSize: 40,
  },
  instructions: {
    fontSize: 20,
  },
}

export default injectSheet(styles)(Header)
