import React from 'react'
import '../button.scss'
import IQuote from './../../../interfaces/quote.interface';

function TweetBtn(props: IQuote) {
  return (
    <a href={'https://twitter.com/intent/tweet?text=' + props.quote + ' - ' + props.author} target="_top" className="button">
      <i className="fab fa-twitter"></i>
    </a>
  )
}

export default TweetBtn