import QuoteList from "../components/quotes/QuoteList";

const dummyQuotes = [
    {
    id: 'q1',
    author: 'Test',
    text: 'Test'}
]

const Quotes = () => {
    return (
        <QuoteList quotes={dummyQuotes}/>
    )
};

export default Quotes;