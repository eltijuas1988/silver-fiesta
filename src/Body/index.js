import React from 'react'
import injectSheet from "react-jss"

const styles = {
  main: {
    color: "#fff",
  },
}

class Body extends React.PureComponent {
  render() {
    return (
      <div>
        This is the body
      </div>
    )
  }
}

// const StyledBody = injectSheet(styles)(Body)
// export default StyledBody

export default injectSheet(styles)(Body)
