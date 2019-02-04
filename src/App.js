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
        <div className={classes.body}>
          <Body/>
        </div>
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
    justifyContent: 'space-between',
    height: '100%',
  },
  body: {
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    marginTop: 2,
    marginBottom: 2,
  },
  '@global': {
    html: {
      height: '100%',
    },
    body: {
      height: '100%',
      margin: 0,
      padding: 0,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ],
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    '#root': {
      height: '100%',
    },
    code: {
      fontFamily: [
        'source-code-pro',
        'Menlo',
        'Monaco',
        'Consolas',
        'Courier New',
        'monospace'
      ],
    }
  }
}

export default injectSheet(styles)(App)
