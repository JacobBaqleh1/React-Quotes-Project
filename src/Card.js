import React , { useState }from 'react';
import './Card.css';

function Card() {
  
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('#000000');
  const [font, setFont] = useState('Arial');
  const [showMenu, setShowMenu] = useState(false);


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
  
    const twitterFunction = () => {
       const text = quote;
       const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
       window.open(url, '_blank');

    }
    
     
    
      const handleClick = () => {
        const newColor = getRandomColor();
        setColor(newColor);
      }
    
      const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      const fontOptions = ['Arial', 'Helvetica', 'Times New Roman', 'Courier'];
      
      
    

    
 
    
 

  return (
    <div id="container" style={{ backgroundColor: `${color}`}} >
      
      <div id="quote-box"  >
        <p id="text" style={{ color: `${color}`, fontFamily: font}}>"{quote}"</p>
        <div>
          <p id="author" style={{ color: `${color}`}}>~ {author}</p>
        </div>
        <div id="buttons">
        <button id="tweet-quote"  > 
          <a onClick={twitterFunction}  > 
            <img 
             style={{ backgroundColor: `${color}`}}
              id="tweet-img"
              src="https://www.svgrepo.com/show/475928/twitter-bird.svg"
            ></img>
          </a>
          </button>
          
          <button id="new-quote" style={{ backgroundColor: `${color}` }} onClick={event => {
          			getQuote();
          			handleClick();
        		}}>
           <span> NEW</span>
           
           QUOTE
          </button>
          <div>
          <button onClick={() => setShowMenu(!showMenu)}>
        Change Font
      </button>
      {showMenu && (
        <ul className="dropdown-menu">
           {fontOptions.map(option => (
            <li key={option} onClick={() => {
              setFont(option);
              setShowMenu(false);
            }}>
              {option}
            </li>
          ))}
        </ul>
      )}
      
    </div>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
