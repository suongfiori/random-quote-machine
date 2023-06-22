
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';


const QuoteBox = ({ quote, getQuote }) => {

  const tweetURL = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
  const encodedQuote = encodeURIComponent(`"${quote.text}" - ${quote.author}`);

  return (
  <>

  <Helmet>
    <title>Random Quotes Generator - Quote Box</title>
    <meta name="description" content={`"${quote.text}" - ${quote.author}`} />
  </Helmet>

    <div id="quote-box">
      <div id="text" className='text'>
        <h3 className='quote'>
          {quote.text}
        </h3>
        <p id="author" className='author'>- {quote.author}</p>
      </div>
      <div className='tweet'>
        <button id="new-quote" onClick={getQuote} className='btn'>New quote</button>
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
    </>
  )
}

export default QuoteBox