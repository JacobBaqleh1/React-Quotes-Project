import React from 'react';
import './Card.css';
function Card() {
  //get the data (fetch)
  //save the daata to state
  const [quote, setQuote] = React.useState('');
  const [author, setAuthor] = React.useState('');

  React.useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  function getQuote() {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
      
  }
  function call(){
    console.log("hi")
  }

  return (
    <div id="container">
      <div id="quote-box">
        <p id="text">"{quote}"</p>
        <div>
          <p id="author">~ {author}</p>
        </div>
        <div id="buttons">
          <a href="twitter.com" id="tweet-quote">
            <img
              id="tweet-img"
              src="https://www.svgrepo.com/show/201339/twitter.svg"
            ></img>
          </a>
          <button id="new-quote" 
          onClick=
          {event => {
            getQuote;
            call;
          }} >
            NEW QUOTE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
