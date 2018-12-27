import React from 'react'
import injectSheet from 'react-jss'
import InputBox from './InputBox'

const Body = ({classes}) => {
  return (
    <div className={classes.main}>
      <InputBox/>
    </div>
  )
}

const styles = {
  main: {
    boxSizing: 'border-box',
    padding: 20,
    width: '100%',
    backgroundColor: "lightBlue",
  },
}

export default injectSheet(styles)(Body)
