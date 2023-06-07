import {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header'
import QuoteBox from './components/QuoteBox'
import Footer from './components/Footer'

function App() {
 
  const [quote, setQuote] = useState({ text: '', author: '' })

  const devQuotesURL = 
  'https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/Data/quotes.json'

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = () => {
    fetch(devQuotesURL)
      .then(res => res.json())
      .then(data => {
        const filteredQuotes = data.filter(quote => quote.en.length <= 200)
        const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)]
  
        setQuote({
          text: randomQuote.en,
          author: randomQuote.author
        })
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }
  
  return (
    <div className='main'>
      <Header />
      <QuoteBox 
        quote={quote}
        getQuote={getQuote}
      />
      <Footer />
    </div>
  )
}

export default App
