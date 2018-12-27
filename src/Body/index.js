import React from 'react'
import injectSheet from "react-jss"
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
    height: 200,
    width: 200,
    backgroundColor: "yellow",
    color: "black",
  },
}

export default injectSheet(styles)(Body)
