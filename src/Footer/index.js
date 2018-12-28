import React from 'react'
import injectSheet from 'react-jss'

const Footer = ({classes}) => {
  return (
    <div className={classes.root}>Thanks For Visiting!</div>
  )
}

const styles = {
  root: {
    backgroundColor: '#9EB0E1',
    width: '100%',
    padding: 40,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
}

export default injectSheet(styles)(Footer)
