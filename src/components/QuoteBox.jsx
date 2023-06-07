
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


const QuoteBox = (props) => {

  const tweetURL = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
  const encodedQuote = encodeURIComponent(`"${props.quote.text}" - ${props.quote.author}`);

  return (
    <div id="quote-box">
      <div id="text" className='text'>
        <h3 className='quote'>
          
          {props.quote.text}
        </h3>
        <span id="author" className='author'>- {props.quote.author}</span>
      </div>
      <div className='tweet'>
        <button id="new-quote" onClick={props.getQuote} className='btn'>New quote</button>
        <a 
            id="tweet-quote" 
            href={tweetURL + encodedQuote} 
            target="_blank" 
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
        </a>
      </div>
    </div>
  )
}

export default QuoteBox