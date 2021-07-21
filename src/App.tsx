import React, { useState, useEffect } from 'react'
import './App.scss'
import Quote from './components/quote/quote'
import TweetBtn from './components/button/tweet-btn/tweet-btn'
import NewQuoteBtn from './components/button/new-quote-btn/new-quote-btn'
import IQuote from './interfaces/quote.interface';

const App: React.FC = () => {
  const [quote, setQuote] = useState<string | undefined>('');
  const [author, setAuthor] = useState<string | undefined>('');


  const getQuote = (response: { quotes: IQuote[] }) => {
    let quotes = response.quotes;
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];

    setQuote(randomQuote.quote)
    setAuthor(randomQuote.author)
  }

  const fetchQuotes = () => {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc")
      .then(res => res.json())
      .then(
        (result) => {
          getQuote(result);
        }
      )
  }

  useEffect(() => { fetchQuotes() }, []);

  return (
    <div className='app'>
      <div className='app__container'>
        <h1 className='app__title'>Random Quote Machine</h1>
        <div className='app__content' id="quote-box">
          <Quote quote={quote} author={author} />
          <div className='app__actions'>
            <TweetBtn quote={quote} author={author} />
            <NewQuoteBtn onUpdateState={fetchQuotes} />
          </div>
        </div>
        <footer className="app__footer">by <a href="https://codepen.io/Ninelka/">Ninel</a></footer>
      </div>
    </div>
  )
}

export default App
