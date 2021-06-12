import React from 'react'
import '../button.scss'

class NewQuoteBtn extends React.Component<any, {}> {
  render() {
    return (
      <button className='button button_new' onClick={this.props.onUpdateState}>New</button>
    )
  }
}

export default NewQuoteBtn