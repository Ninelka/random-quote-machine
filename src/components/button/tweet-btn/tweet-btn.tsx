import React from 'react'
import '../button.scss'
import IQuote from './../../../interfaces/quote.interface';

class TweetBtn extends React.Component<IQuote, {}>  {
  render() {
    return (
      <a href={'https://twitter.com/intent/tweet?text=' + this.props.quote + ' - ' + this.props.author} target="_top" className="button">
        <i className="fab fa-twitter"></i>
      </a>
    )
  }
}

export default TweetBtn