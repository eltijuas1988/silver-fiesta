import * as React from 'react'

const Message = ({message}) => {
  if (!message) return null

  return (
    <div>{message}</div>
  )
}

export default Message
