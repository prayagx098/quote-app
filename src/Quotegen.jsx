import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Spinner } from 'react-bootstrap';

const Quotegen = () => {

    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchQuote = async () => {
        setLoading(true);

        try {
          const response = await axios.get('https://dummyjson.com/quotes');
          const quotes = response.data.quotes;
        //   console.log(quote);
          
          const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
          setQuote(randomQuote);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching the quote:', error);
        } 
      };


      useEffect(() => {
        fetchQuote();
      }, []);


  return (

    <div>
    <h1 className='text-center p-5'>Quote App</h1>
    <Container className="d-flex justify-content-center align-items-center">

      <Card style={{ width: '18rem' , backgroundColor:'#fff1db', boxShadow:'2px 2px 5px black'}}>
        <Card.Body>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status" />
              <div>Loading...</div>
            </div>
          ) : (
            <>
              <Card.Text className="mb-4">
                "{quote.quote}"
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                - {quote.author}
              </Card.Subtitle>
              <Button variant="secondary" onClick={fetchQuote} style={{ boxShadow:"2px 2px 2px black" }}>
                Get New Quote
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
    </div>

  )
}

export default Quotegen
