import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

class App extends Component {
  render() {
    const {classes} = this.props

    return (
      <div className={classes.main}>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 40,
  },
}

export default injectSheet(styles)(App)
